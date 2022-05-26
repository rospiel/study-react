import * as DL from './Default.layout.styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout (props: DefaultLayoutProps) {
  return (
    <DL.Wrapper>
      <DL.Header>
        HEADER
      </DL.Header>
      <DL.Main>
        <DL.Navigation>
          SCREEN 1
        </DL.Navigation>

        <DL.FeaturedContent>
          { props.children }
        </DL.FeaturedContent>

        <DL.Aside>
          SCREEN 3
        </DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  )
}

export default DefaultLayout;