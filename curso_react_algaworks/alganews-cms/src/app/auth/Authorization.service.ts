import axios from "axios";
import queryString from "qs";
import pkceChallenge from "pkce-challenge";

const AUTH_SERVER = process.env.REACT_APP_AUTH_SERVER_URL;
const REACT_APP_URL = process.env.REACT_APP_URL;

const authServer = axios.create({
  baseURL: AUTH_SERVER
});

authServer.interceptors.response.use(undefined, async (error) => {
  if (error?.response?.status === 401) {
    AuthService.imperativeSendToLogout();
  }

  return Promise.reject(error);
})

export interface OAuthAuthorizationTokenResponse {
  access_token: string;
  refresh_token: string;
  token_type: 'bearer' | string;
  expires_in: number;
  scope: string;
  [key: string]: string | number;
}

export default class AuthService {
  static readonly ACCESS_TOKEN = "accessToken";
  static readonly REFRESH_TOKEN = "refreshToken";
  static readonly CODE_VERIFIER = "codeVerifier";
  static readonly GRANT_TYPE_AUTHORIZATION_CODE = "authorization_code";
  static readonly CLIENT_ID = "alganews-cms";
  static readonly REQUEST_MAPPING_OAUTH = "/oauth/";
  static readonly APP_X_WWW_FORM_URLENCODED = "application/x-www-form-urlencoded";

  public static imperativeSendToLogout() {
    window.localStorage.clear();
    window.location.href = `${AUTH_SERVER}/logout?redirect=${REACT_APP_URL}`
  }

  public static async getFirstAccessToken(config: {
    code: string | null;
    codeVerifier: string;
    redirectUri: string;
  }) {
    const data = {
      code: config.code,
      code_verifier: config.codeVerifier,
      grant_type: this.GRANT_TYPE_AUTHORIZATION_CODE,
      client_id: this.CLIENT_ID,
      redirect_uri: config.redirectUri,
    };

    const encodedData = queryString.stringify(data);

    return authServer.post<OAuthAuthorizationTokenResponse>(this.REQUEST_MAPPING_OAUTH.concat("token"), encodedData, {headers: {"Content-Type": this.APP_X_WWW_FORM_URLENCODED}}).then(response => response.data);
  }

  public static async getNewToken(config: {
    refreshToken: string,
    codeVerifier: string
  }) {
    const data = {
      refresh_token: config.refreshToken,
      code_verifier: config.codeVerifier,
      grant_type: 'refresh_token',
      client_id: this.CLIENT_ID
    };

    const encodedData = queryString.stringify(data);

    return authServer.post<OAuthAuthorizationTokenResponse>(this.REQUEST_MAPPING_OAUTH.concat("token"), encodedData, { headers: { "Content-Type": this.APP_X_WWW_FORM_URLENCODED } }).then(response => response.data);
  }

  public static getLoginScreenUrl(codeChallenge: string): string {
    const config = queryString.stringify({
      response_type: "code",
      client_id: this.CLIENT_ID,
      redirect_uri: `${window.location.origin}/authorize`,
      code_challenge: codeChallenge,
      code_challenge_method: "S256",
      grant_type: this.GRANT_TYPE_AUTHORIZATION_CODE,
    })

    return `${AUTH_SERVER}${this.REQUEST_MAPPING_OAUTH}authorize?${config}`;
  }

  public static async imperativelySendToLoginScreen() {
    const { code_challenge, code_verifier } = await pkceChallenge();

    this.setCodeVerifier(code_verifier);
    const loginUrl = this.getLoginScreenUrl(code_challenge);
    window.location.href = loginUrl;
  }
  
  public static getAccessToken(): string {
    const accessToken = window.localStorage.getItem(this.ACCESS_TOKEN);
    
    return accessToken ? accessToken : "";
  }

  public static setAccessToken(accessToken: string) {
    window.localStorage.setItem(this.ACCESS_TOKEN, accessToken);
  }

  public static getRefreshToken(): string {
    const refreshToken = window.localStorage.getItem(this.REFRESH_TOKEN);
    
    return refreshToken ? refreshToken : "";
  }

  public static setRefreshToken(refreshToken: string) {
    window.localStorage.setItem(this.REFRESH_TOKEN, refreshToken);
  }

  public static getCodeVerifier(): string {
    const codeVerifier = window.localStorage.getItem(this.CODE_VERIFIER);
    
    return codeVerifier ? codeVerifier : "";
  }

  public static setCodeVerifier(codeVerifier: string) {
    window.localStorage.setItem(this.CODE_VERIFIER, codeVerifier);
  }
}