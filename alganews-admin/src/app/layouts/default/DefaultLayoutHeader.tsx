import { Avatar, Layout, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import logo from "../../../assets/logo.svg";

const { Header } = Layout;

export default function DefaultLayoutHeader() {
  return (
    <Header className="header">
      <Row
        justify={"space-between"}
        align={"middle"}
        style={{ height: "100%" }}
      >
        <img src={logo} alt="imagem do app" />
        <Avatar size="small" icon={<UserOutlined />} />
      </Row>
    </Header>
  );
}
