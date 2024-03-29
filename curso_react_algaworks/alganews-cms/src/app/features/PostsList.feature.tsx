import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import format from "date-fns/format"
import parseISO from "date-fns/parseISO"
import { useEffect, useMemo, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { useDispatch, useSelector } from "react-redux"
import { Column, usePagination, useTable } from "react-table"
import { Post } from "rospiel-react_alganews-sdk"
import isNull, { nonNull } from "rospiel-react_alganews-sdk/dist/utils/objectUtil"
import styled from "styled-components"
import { RootState } from "../../core/store"
import modal from "../../core/utils/modal"

import Loading from "../components/Loading"
import PostTitleAnchor from "../components/PostTitleAnchor"
import Table from "../components/Table/Table"
import PostPreview from "../views/PostPreview.view"
import * as  PostsActions from "../../core/store/Posts.store";

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
  max-width: 270px;
  
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

function handlePostClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: number): void {
  event.preventDefault();
  modal({ children: <PostPreview postId={id} /> });
}

function getTitle(post: Post.Summary) {
  return (
    <>
      <img className='avatar' src={post.editor.avatarUrls.small} alt={post.editor.name} title={post.editor.name} />
      <PostTitleAnchor title={post.title}  href={`/posts/${post.id}`} onClick={event => handlePostClick(event, post.id) } >{post.title}</PostTitleAnchor>
    </>
  )
}  

export default function PostsList () {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const [error, setError] = useState<Error>();
  const [page, setPage] = useState(0);
  const loading = useSelector((state: RootState) => state.posts.fetching);
  
  useEffect(() => {
    const query = {} as Post.Query;
    query.page = page;
    query.size = 1;
    query.showAll = true;
    query.sort = ["createdAt", "desc"];
    
    dispatch(PostsActions.fetchAllPosts(query));
  }, [dispatch, page]);

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
            {format(parseISO(props.value), 'dd/MM/yyyy')}
          </Views>
        )
      },
      {
        Header: () => <Header textAlign='center'>Última atualização</Header>,
        accessor: 'updatedAt',
        Cell: (props) => (
          <Conversions>
            {format(parseISO(props.value), 'dd/MM/yyyy')}
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