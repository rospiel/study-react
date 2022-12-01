import { Route, Switch } from "react-router-dom";
import CashFlowExpensesView from "./views/CashFlowExpenses.view";
import CashFlowRevenuesView from "./views/CashFlowRevenues.view";
import HomeView from "./views/Home.view";
import PaymentCreateView from "./views/PaymentCreate.view";
import PaymentListView from "./views/PaymentList.view";
import UserCreateView from "./views/UserCreate.view";
import UserListView from "./views/UserList.view";

export default function Routes() {
  return (
    <Switch>
      <Route path={"/"} exact component={HomeView} />
      <Route
        path={"/usuarios/cadastro"}
        exact
        component={UserCreateView}
      />
      <Route
        path={"/usuarios"}
        exact
        component={UserListView}
      />
      <Route
        path={"/pagamentos/cadastro"}
        exact
        component={PaymentCreateView}
      />
      <Route
        path={"/pagamentos"}
        exact
        component={PaymentListView}
      />
      <Route
        path={"/fluxo-de-caixa/despesas"}
        exact
        component={CashFlowExpensesView}
      />
      <Route
        path={"/fluxo-de-caixa/receitas"}
        exact
        component={CashFlowRevenuesView}
      />
    </Switch>
  );
}
