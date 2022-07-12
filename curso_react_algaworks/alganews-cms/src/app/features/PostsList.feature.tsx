import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import { useMemo } from "react"
import { Column, useTable } from "react-table"
import styled from "styled-components"
import Table from "../components/Table/Table"

type Post = {
  id: number
  title: string
  views: number
  author: {
    name: string
    avatar: string
  }
  conversions: {
    thousands: number
    percentage: number
  }
}

const Conversions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  font-weight: 500;
  font-family: Roboto Mono, menospace;
  font-size: 12px;

  span.percentage {
    color: #09f
  }
`

const Views = styled.div`
  text-align: right;
  font-weight: 500;
  font-family: Roboto Mono, menospace;
`

const Title = styled.div`
  text-align: left;
  display: flex;
  gap: 8px;
  align-items: center;

  img.avatar {
    width: 24px;
    height: 24px;
  }
`

interface HeaderProps {
  textAlign: string
}

const Header = styled.div<HeaderProps>`
  text-align: ${(props) => props.textAlign};
`
function getIcon() {
  return (
    <Icon size="14px" color="#09f" path={mdiOpenInNew} />
  )
}

function getConversion(thousands: number, percentage: number) {
  return (
    <>
      <span>{thousands}k</span>
      <span className='percentage'>({percentage}%)</span>
    </>
  )
}

function getTitle(post: Post) {
  return (
    <>
      <img className='avatar' src={post.author.avatar} alt={post.author.name} />
      {post.title}
    </>
  )
}  

export default function PostsList () {
  const data = useMemo<Post[]>(
    () => [
      {
        author: {
          name: 'Rodrigo Santos',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
        },
        id: 1,
        conversions: {
          percentage: 64.35,
          thousands: 607,
        },
        title: 'Como dobrei meu salário aprendendo somente React',
        views: 985415
      },
      {
        author: {
          name: 'Rodrigo Santos',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
        },
        id: 2,
        conversions: {
          percentage: 64.35,
          thousands: 607,
        },
        title: 'React.js vs. React Native: a REAL diferença entre os dois',
        views: 985415
      },
      {
        author: {
          name: 'Rodrigo Santos',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
        },
        id: 3,
        conversions: {
          percentage: 95.35,
          thousands: 845,
        },
        title: 'Como dobrei meu salário aprendendo somente React',
        views: 985415
      }
    ],
    []
  );

  const columns = useMemo<Column<Post>[]>(
    () => [
      {
        Header: '',
        accessor: 'id', 
        Cell: () => getIcon()
      },
      {
        Header: () => <Header textAlign='left'>Artigo</Header>,
        accessor: 'title', 
        Cell: (props) => (
          <Title>
            {getTitle(props.row.original)}
          </Title>
        )
      },
      {
        Header: () => <Header textAlign='right'>Views</Header>,
        accessor: 'views', 
        Cell: (props) => (
          <Views>
            {props.value.toLocaleString('pt-br')}
          </Views>
        )
      },
      {
        Header: () => <Header textAlign='center'>Conversões</Header>,
        accessor: 'conversions',
        Cell: (props) => (
          <Conversions>
            {getConversion(props.value.thousands, props.value.percentage)}
          </Conversions> 
        )
      },
      {
        /* id precisa ser único e informado se usando header sem accessor */
        id: Math.random().toString(),
        Header: () => <Header textAlign='right'>Ações</Header>,
        Cell: () => (
          <div style={{ textAlign: 'right' }}>
            todo: actions
          </div> 
        )
      },
    ],
    []
  );

  const instance = useTable<Post>({ data, columns });

  return (
    <Table instance={instance}/>
  )
}