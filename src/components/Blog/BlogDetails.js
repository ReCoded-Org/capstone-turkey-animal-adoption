import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Blog.css";

const BlogDetails = ({ blogContent }) => {
  return (
    <Container className="mt-5">
      <Row className="blog">
        {blogContent && (
          <>
            <Col sm={6}>
              <div className="articleContianer">
                <img
                  src={blogContent[0].jetpack_featured_media_url}
                  alt=""
                  className="w-100 articleImg"
                />
                <h1 id="articleTitle">{blogContent[0].title.rendered}</h1>
                <p
                  id="articleDescription"
                  dangerouslySetInnerHTML={{
                    __html: blogContent[0].excerpt.rendered,
                  }}
                ></p>
              </div>
            </Col>
            <Col sm={6} id="blogCol">
              {blogContent[0]["jetpack-related-posts"].map((blog) => (
                <div key={blog.id} className="blogContianer">
                  <p id="publishedDate">{blog.date}</p>
                  <div className="posts">
                    <img
                      src={blog.img.src.substring(0, blog.img.src.indexOf("?"))}
                      alt="postImg"
                      className="postImg w-100"
                    />
                    <div>
                      <p>
                        <span id="postTitle">{blog.title}</span>
                        <br />
                        <span>{blog.excerpt}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default BlogDetails;
