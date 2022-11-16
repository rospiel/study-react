import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Post, PostService } from "rospiel-react_alganews-sdk";
import isNull from "rospiel-react_alganews-sdk/dist/utils/objectUtil";
import { ResourceNotFoundError } from "rospiel-react_alganews-sdk/dist/errors";

interface PostProps extends NextPageProps { 
  post?: Post.Detailed;
}

interface Params extends ParsedUrlQuery {
  id: string
}

function isInvalidParamNumber(param: string): boolean {
  const value = Number(param);
  return isNaN(value);
}

export default function PostPage(props: PostProps) {
  return <div>{props.post?.title}</div>;
}

export const getServerSideProps: GetServerSideProps<PostProps, Params> = async ({ params }) => {

  if (isNull(params)) {
    return { notFound: true }
  }

  if (isInvalidParamNumber(params!.id)) {
    return { notFound: true }
  }

  try {
    const post = await PostService.getExistingPost(Number(params!.id));
    return {
      props: {
        post
      }
    }
  } catch (error) {
    console.log("Error during searching post of id.: " + params!.id);
    console.log(error);


    if (error instanceof ResourceNotFoundError) {
      return { notFound: true };
    }

    const errorMessage = {} as PostProps;
    errorMessage.error = 
      { 
        message: error.message,
        statusCode: error.data?.status || 500
      };
    

    return { props: errorMessage }
  }
}