import axios from "axios";
import Service from "rospiel-react_alganews-sdk/dist/Service";
import AuthService from "./Authorization.service";

const HEADER_AUTHORIZATION = "Authorization";
const BEARER = "Bearer ";

Service.setRequestInterceptors(async (request) => {
  const accessToken = AuthService.getAccessToken();

  if (accessToken) {
    request.headers[HEADER_AUTHORIZATION] = BEARER.concat(accessToken);
  }

  return request;
});

function getOriginalRequest(error: any): any {
  return error.config;
}

function isUnauthorizedAndWithoutRetry(status: any, retry: any): boolean {
  return status === 401 && !retry;
}

function isPossibleRenewToken(codeVerifier: string, refreshToken: string): boolean {
  return !refreshToken || !codeVerifier;
}

function renewToken(codeVerifier: string, refreshToken: string) {
  return AuthService.getNewToken({ codeVerifier, refreshToken });
}

function setNewTokenOriginalRequest(originalRequest: any): void {
  originalRequest.headers[HEADER_AUTHORIZATION] = BEARER.concat(AuthService.getAccessToken());
}

Service.setResponseInterceptors((response) => response, async (error) => {
  const originalRequest = getOriginalRequest(error);
  
  if (isUnauthorizedAndWithoutRetry(error.response.status, originalRequest._retry)) {
    originalRequest._retry = true;
    const codeVerifier = AuthService.getCodeVerifier();
    const refreshToken = AuthService.getRefreshToken();

    if (isPossibleRenewToken(codeVerifier, refreshToken)) {
      window.alert('TODO: IMPLEMENTAR LOGOUT');
      return;
    }

    const tokens = await renewToken(codeVerifier, refreshToken);

    AuthService.setAccessToken(tokens.access_token);
    AuthService.setRefreshToken(tokens.refresh_token);

    setNewTokenOriginalRequest(originalRequest);

    return axios(originalRequest);
  }

});

