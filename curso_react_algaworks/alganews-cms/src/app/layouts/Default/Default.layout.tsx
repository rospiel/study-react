import confirm from '../../../core/utils/confirm';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';
import SessionController from '../../components/SessionController/SessionController';
import * as DL from './Default.layout.styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout (props: DefaultLayoutProps) {
  return (
    <DL.Wrapper>
      <DL.Header>
        <Logo />
      </DL.Header>
      <DL.Main>
        <DL.Navigation>
          <NavBar />
        </DL.Navigation>

        <DL.FeaturedContent>
          { props.children }
        </DL.FeaturedContent>

        <DL.Aside>
          <SessionController name="Rodrigo Santos" description="Developer" onLogout={() => {confirm({title: 'Você deseja deslogar?'})}} />
        </DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  )
}

export default DefaultLayout;