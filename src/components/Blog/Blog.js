import React, { useState, useEffect } from "react";
import BlogDetails from "./BlogDetails";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const Blog = () => {
  const [allPosts, setAllPosts] = useState([]);

  const getAllPosts = async () => {
    const data = await fetch(
      "https://public-api.wordpress.com/wp/v2/sites/ecommerce458750409.wordpress.com/posts"
    );

    const posts = await data.json();
    setAllPosts(posts);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return allPosts.length > 0 ? (
    <BlogDetails blogContent={allPosts} />
  ) : (
    <Container>
      <Row>
        <Col>
          <Spinner animation="grow" />
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
