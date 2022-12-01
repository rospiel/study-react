import {
  UserOutlined,
  LaptopOutlined,
  DiffOutlined,
  HomeOutlined,
  TableOutlined,
  PlusCircleOutlined,
  FallOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import {
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar() {
  const history = useHistory();
  const location = useLocation();

  const subMenuUsers = {
    label: "Usuários",
    key: "usuários",
    icon: <UserOutlined />,
    children: [
      {
        label: <Link to={"/usuarios"}>Consulta</Link>,
        key: "/usuarios",
        icon: <TableOutlined />,
        onClick: () => history.push("/usuarios"),
      },
      {
        label: (
          <Link to={"/usuarios/cadastro"}>Cadastro</Link>
        ),
        key: "/usuarios/cadastro",
        icon: <PlusCircleOutlined />,
        onClick: () => history.push("/usuarios/cadastro"),
      },
    ],
  };

  const subMenuPayments = {
    label: "Pagamentos",
    key: "pagamentos",
    icon: <LaptopOutlined />,
    children: [
      {
        label: <Link to={"/pagamentos"}>Consulta</Link>,
        key: "/pagamentos",
        icon: <TableOutlined />,
        onClick: () => history.push("/pagamentos"),
      },
      {
        label: (
          <Link to={"/pagamentos/cadastro"}>Cadastro</Link>
        ),
        key: "/pagamentos/cadastro",
        icon: <PlusCircleOutlined />,
        onClick: () => history.push("/pagamentos/cadastro"),
      },
    ],
  };

  const subMenuCashFlow = {
    label: "fluxo-de-caixa",
    key: "FluxoDeCaixa",
    icon: <DiffOutlined />,
    children: [
      {
        label: (
          <Link to={"/fluxo-de-caixa/despesas"}>
            Despesa
          </Link>
        ),
        key: "/fluxo-de-caixa/despesas",
        icon: <FallOutlined />,
        onClick: () =>
          history.push("/fluxo-de-caixa/despesas"),
      },
      {
        label: (
          <Link to={"/fluxo-de-caixa/receitas"}>
            Receita
          </Link>
        ),
        key: "/fluxo-de-caixa/receitas",
        icon: <RiseOutlined />,
        onClick: () =>
          history.push("/fluxo-de-caixa/receitas"),
      },
    ],
  };

  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "Home",
      icon: <HomeOutlined />,
      onClick: () => history.push("/"),
    },
    subMenuUsers,
    subMenuPayments,
    subMenuCashFlow,
  ];

  return (
    <Sider
      width={200}
      className="site-layout-background"
      breakpoint="lg"
      collapsedWidth={0}
    >
      <Menu
        items={items}
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={[location.pathname.split("/")[1]]}
        style={{ height: "100%", borderRight: 0 }}
      />
    </Sider>
  );
}
