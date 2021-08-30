import React, { useState, useEffect } from "react";
import Blog from "../../components/Blog/Blog";
import { Container, Row, Col, Spinner } from "react-bootstrap";
//import { blogContent } from "../../components/Blog/data";

function BlogPage() {
  const [allPosts, setAllPosts] = useState([]);

  const getAllPosts = async () => {
    const data = await fetch(
      "https://public-api.wordpress.com/wp/v2/sites/ecommerce458750409.wordpress.com/posts"
    );

    const posts = await data.json();
    console.log(posts);
    setAllPosts(posts);
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return allPosts.length > 0 ? (
    <Blog blogContent={allPosts}></Blog>
  ) : (
    <Container>
      <Row>
        <Col>
          <Spinner animation="grow" />
        </Col>
      </Row>
    </Container>
  );
}

export default BlogPage;
