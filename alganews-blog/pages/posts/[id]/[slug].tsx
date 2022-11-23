import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { DiscussionEmbed } from "disqus-react";
import { Post, PostService } from "rospiel-react_alganews-sdk";
import isNull from "rospiel-react_alganews-sdk/dist/utils/objectUtil";
import { ResourceNotFoundError } from "rospiel-react_alganews-sdk/dist/errors";
import Head from "next/head";
import PostHeader from "../../../components/PostHeader";
import Markdown from "../../../components/Markdown";

interface PostProps extends NextPageProps { 
  post?: Post.Detailed;
}

interface Params extends ParsedUrlQuery {
  id: string
  slug: string
}

function isInvalidParamNumber(param: any): boolean {
  const value = Number(param);
  return isNaN(value);
}

export default function PostPage(props: PostProps) {
  const host = "http://localhost:3000";

  return (
    <>
      <Head>
        <meta property="og:title" content={props.post!.title} />
        <meta property="og:site_name" content="AlgaNews" />
        <meta property="og:url" content="alganews.com.br" />
        <meta property="og:description" content={props.post!.body.slice(0, 54)} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={props.post!.imageUrls.medium} />
        <title>{props.post!.title} - AlgaNews</title>
        <link rel="canonical" href={`${host}/posts/${props.post!.id}/${props.post!.slug}`}/>
      </Head>
      <PostHeader createdAt={props.post!.createdAt!} editor={props.post!.editor.avatarUrls.small} thumbnail={props.post!.imageUrls.medium} title={props.post!.title!} />

      <Markdown body={props.post?.body!} />
      <DiscussionEmbed
            shortname="study-react"
            config={{
              url: `${host}/${props.post?.id}/${props.post?.slug}`,
              identifier: String(props.post!.id),
              title: props.post!.title,
              language: "pt_BR",
            }}
          />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<PostProps, Params> = async ({ params, res }) => {

  if (isNull(params)) {
    return { notFound: true }
  }

  if (isInvalidParamNumber(params?.id)) {
    return { notFound: true }
  }

  try {
    const post = await PostService.getExistingPost(Number(params?.id));

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