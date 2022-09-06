import styled from "styled-components";
import Head from "../../core/Head";
import ErrorBoundary from "../components/ErrorBoundary";
import FieldDescriptor from "../components/FieldDescriptor/FieldDescriptor";
import Profile from "../components/Profile/Profile";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";
import { Wrapper  as Button } from "../components/ValueDescriptor/ValueDescriptor.styles";
import DefaultLayout from "../layouts/Default/Default.layout";

interface EditorProfileProps {
  isShowPersonalData: boolean;
}

export default function EditorProfileView(props: EditorProfileProps) {
  return (
    <DefaultLayout>
      <Head title="Editor Profile" description="Tela com as informações do editor"></Head>
      <ErrorBoundary>
        <ProfileContainer isShowPersonalData={props.isShowPersonalData}>
          <Profile name="Ana Castilho" description="criadora de conteúdo há 2 meses" editorId={1} />
          <div className="profile">
            <div className="description">
              Ana Castilho é especialista em recrutamento de desenvolvedores e ama escrever dicas para ajudar os devs a encontrarem a vaga certa para elas. Atualmente tem uma empresa de Recruitment e é redatora no alga content.
              <div className="progressBar"><ProgressBar title="tech recruiting" progress={97} theme="secondary" width={340} /></div>
              <div className="progressBar"><ProgressBar title="coaching" progress={75} theme="secondary" width={340} /></div>
              <div className="progressBar"><ProgressBar title="java" progress={50} theme="secondary" width={340} /></div>
            </div>
            <div className="details">
              <div className="address">
                <FieldDescriptor label="cidade:" value="Vila Velha" />
                <FieldDescriptor label="estado:" value="Espírito Santos" />
              </div>
                <div className="personalInfo">
                  <FieldDescriptor label="celular:" value="+55 27 91234-5678" />
                  <FieldDescriptor label="email:" value="ana.castilho@redacao.algacontent.com" />
                  <FieldDescriptor label="data de nascimento:" value="26 de Dezembro de 1997 (22 anos)" />
                </div>
              
            </div>
          </div>
          <div className="earnings">
            <ValueDescriptor description="palavras nesta semana" value={20345} isDefault={false} />
            <ValueDescriptor description="ganhos da semana" value={560322.02} isDefault={true} isCurrency={true} />
          </div>
          <div className="earnings">
            <ValueDescriptor description="palavras no mês" value={140432} isDefault={false} />  
            <ValueDescriptor description="ganhos no mês" value={560322.02} isDefault={true} isCurrency={true} />
          </div>
          <div className="earnings">
            <ValueDescriptor description="total de palavras" value={2434.423} isDefault={false} />  
            <ValueDescriptor description="ganhos sempre" value={560322.02} isDefault={true} isCurrency={true} />
          </div>
        </ProfileContainer>
      </ErrorBoundary>  
    </DefaultLayout>
  ) 
}

const ProfileContainer = styled.div<{isShowPersonalData: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid rgba(39, 64, 96, 0.1);
  padding: 24px;

  .profile {
    display: flex;
    gap: 24px;
  }
  
  .description {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 340px;
  }

  .progressBar {
    margin-bottom: 28px;
  }

  .details {
    width: 340px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .personalInfo{
    display:  ${props => props.isShowPersonalData ? 'flex' : 'none'};
    flex-direction: column;
    gap: 16px;
  }

  .address {
    display: flex;
    gap: 16px
  }

  .earnings {
    display:  ${props => props.isShowPersonalData ? 'flex' : 'none'};
    gap: 95px;
  }

  ${Button} {
    width: 340px;
  }
`