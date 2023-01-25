import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home.view'; 
import EditorList from './views/EditorReport.view';
import PostCreate from './views/PostCreate.view';
import NotFound404 from './views/NotFound404.view';
import EditorProfileView from './views/EditorProfile.view';
import { useEffect } from 'react';
import info from '../core/utils/info';
import PostEdit from './views/PostEdit.view';
import AuthService from './auth/Authorization.service';

export default function App() {
  useEffect(() => {
    window.onunhandledrejection = function (error: PromiseRejectionEvent) {
      info({
        title: error.reason.response?.data.title || "Erro", 
        description: error.reason.response?.data.detail || error.reason.message
      })
    }
  }, [])

  useEffect(() => {
    async function identify() {
      const isInAuthorizationRoute = window.location.pathname === "/authorize";
      const code = new URLSearchParams(window.location.search).get("code");
      const codeVerifier = AuthService.getCodeVerifier();
      const accessToken = AuthService.getAccessToken();

      if (!accessToken && !isInAuthorizationRoute) {
        AuthService.imperativelySendToLoginScreen();
      }

      if (isInAuthorizationRoute) {
        if (isCodesNotPresent(code, codeVerifier)) {
          info({
            title: "Segurança",
            description: "Código não foi informado"
          })
          return;
        }

        const { access_token, refresh_token } =
          await AuthService.getFirstAccessToken({ code, codeVerifier, redirectUri: "http://localhost:3000/authorize" });

        AuthService.setAccessToken(access_token);
        AuthService.setRefreshToken(refresh_token);
        window.location.pathname = "/";
      }
    }

    identify();
  }, []);

  function isCodesNotPresent(code: string | null, codeVerifier: string): boolean {
    return !code || !codeVerifier;
  }
  
  return (
    <BrowserRouter>     
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/editores'} exact component={EditorList} />
        <Route path={'/editores/:id'} exact component={() => (<EditorProfileView isShowPersonalData={true} />)} />
        <Route path={'/posts/criar'} exact component={PostCreate} />
        <Route path={'/posts/editar/:id'} exact component={PostEdit} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
  )
}