import { Post } from "../@types";
import Service from "../Service";
import generateQueryString from "../utils/generateQueryString";

class PostService extends Service {

  static readonly REQUEST_MAPPING: string = "/posts";

  static getAllPosts(search: Post.Query) {
    const queryString = generateQueryString(search);
    return this.Http
    .get<Post.Paginated>(this.REQUEST_MAPPING.concat(queryString))
    .then(this.getData);
  }

  static getExistingPost(id: number) {
    return this.Http
      .get<Post.Detailed>(`${this.REQUEST_MAPPING}/${id}`)
      .then(this.getData)
  }

  static publishExistingPost(id: number) {
    return this.Http
      .put<{}>(`${this.REQUEST_MAPPING}/${id}/publishing`)
      .then(this.getData);
  }

  static insertPost(post: Post.Input) {
    return this.Http
    .post<Post.Detailed>(this.REQUEST_MAPPING, post)
    .then(this.getData)
  }

  static updateExistingPost(postId: number, post: Post.Input) {
    return this.Http
      .put<Post.Detailed>(`/posts/${postId}`, post)
      .then(this.getData);
  }
}

export default PostService;