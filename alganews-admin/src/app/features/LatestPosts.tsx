import { Avatar, Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import {
  Post,
  PostService,
} from "rospiel-react_alganews-sdk";

export default function LatestPosts() {
  const [posts, setPosts] = useState<Post.Paginated>();

  useEffect(() => {
    const query = {} as Post.Query;
    query.sort = ["createdAt", "desc"];
    query.page = 0;
    query.size = 3;

    PostService.getAllPosts(query).then(setPosts);
  }, []);

  return (
    <Row gutter={16}>
      {posts?.content?.map((post) => {
        return (
          <Col span={8}>
            <Card
              key={post.id}
              cover={
                <img
                  alt={post.title}
                  src={post.imageUrls.small}
                  style={{
                    height: 168,
                    objectFit: "cover",
                  }}
                />
              }
            >
              <Card.Meta
                title={post.title}
                avatar={
                  <Avatar
                    src={post.editor.avatarUrls.small}
                  />
                }
              />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
