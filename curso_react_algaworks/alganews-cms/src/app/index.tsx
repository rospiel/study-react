import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home.view'; 
import EditorList from './views/EditorReport.view';
import PostCreate from './views/PostCreate.view';
import NotFound404 from './views/NotFound404.view';
import EditorProfileView from './views/EditorProfile.view';
import { useEffect } from 'react';
import info from '../core/utils/info';

export default function App () {
  useEffect(() => {
    window.onunhandledrejection = function (error: PromiseRejectionEvent) {
      info({
        title: error.reason.response?.data.title || "Erro", 
        description: error.reason.response?.data.detail || error.reason.message
      })
    }
  }, [])
  
  return (
    <BrowserRouter>     
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/editores'} exact component={EditorList} />
        <Route path={'/editores/:id'} exact component={() => (<EditorProfileView isShowPersonalData={true} />)} />
        <Route path={'/posts/criar'} exact component={PostCreate} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
  )
}