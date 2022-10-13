import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import { format } from "date-fns/esm"
import { useEffect, useMemo, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { Column, usePagination, useTable } from "react-table"
import styled from "styled-components"
import { Post } from "../../sdk/@types"
import PostService from "../../sdk/services/Post.service"
import { isNull, nonNull } from "../../sdk/utils/objectUtil"
import Loading from "../components/Loading"
import Table from "../components/Table/Table"

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

function getTitle(post: Post.Summary) {
  return (
    <>
      <img className='avatar' src={post.editor.avatarUrls.small} alt={post.editor.name} title={post.editor.name} />
      {post.title}
    </>
  )
}  

export default function PostsList () {
  const[posts, setPosts] = useState<Post.Paginated>();
  const [error, setError] = useState<Error>();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    PostService.getAllPosts({
      page,
      size: 1, 
      showAll: true,
      sort: ['createdAt', 'desc']
    })
    .then(setPosts)
    .catch(error => {
      setError(new Error(error.message));
    }).finally(() => {
      setLoading(false);
    })
  }, [page]);

  if (nonNull(error)) {
    throw error;
  }

  const columns = useMemo<Column<Post.Summary>[]>(
    () => [
      {
        Header: '',
        accessor: 'id', 
        Cell: () => getIcon()
      },
      {
        Header: () => <Header textAlign='left'>Título</Header>,
        accessor: 'title', 
        Cell: (props) => (
          <Title>
            {getTitle(props.row.original)}
          </Title>
        )
      },
      {
        Header: () => <Header textAlign='right'>Criação</Header>,
        accessor: 'createdAt', 
        Cell: (props) => (
          <Views>
            {format(new Date(props.value), 'dd/MM/yyyy')}
          </Views>
        )
      },
      {
        Header: () => <Header textAlign='center'>Última atualização</Header>,
        accessor: 'updatedAt',
        Cell: (props) => (
          <Conversions>
            {format(new Date(props.value), 'dd/MM/yyyy')}
          </Conversions> 
        )
      },
      {
        /* id precisa ser único e informado se usando header sem accessor */
        id: Math.random().toString(),
        accessor: 'published',
        Header: () => <Header textAlign='right'>Ações</Header>,
        Cell: (props) => (
          <div style={{ textAlign: 'right' }}>
            {props.value ? 'Publicado' : 'Privado'}
          </div> 
        )
      },
    ],
    []
  );

  const instance = useTable<Post.Summary>({ data: posts?.content || [], 
    columns, 
    manualPagination: true, 
    initialState: { pageIndex: 0 }, 
    pageCount: posts?.totalPages
  }, usePagination);

  if (isNull(posts)) {
    return (
       <div>
          <Skeleton height={32}/>
       </div>
    )
  }

  return (
    <>
      <Loading show={loading} />
      <Table instance={instance} onPaginate={setPage} />
    </>
  )
}