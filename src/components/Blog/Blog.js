import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Blog.css";

const Blog = ({ blogContent }) => {
  console.log(blogContent);
  // const [articleImg, setArticleImg] = useState(blogContent.firstArticle.img)
  // const [blogTitle, setBlogTitle] = useState(blogContent.firstArticle.blogTitle)
  // const [blogDescription, setBlogDescription] = useState(blogContent.firstArticle.blogDescription)
  // const changeContent = () => {
  //     console.log("clicked")
  //     setBlogTitle(Object.values(blogContent).filter(item => console.log(item.id === blogContent.id)))
  // }
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
              {Object.values(blogContent[0]["jetpack-related-posts"]).map(
                blog => (
                  <div key={blog.id} className="blogContianer">
                    <p id="publishedDate">{blog.date}</p>
                    <div className="author">
                      <img
                        src={blog.img.src.substring(
                          0,
                          blog.img.src.indexOf("?")
                        )}
                        alt="authorImg"
                        className="authorImg w-100"
                      />
                      <div>
                        <p>
                          <span id="authorName">{blog.title}</span>
                          <br />
                          <span>{blog.excerpt}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </Col>
            {/* {blogContent.map((blog) => (
                                <BlogDetails
                                    key={blog.id}
                                    img={blog.img}
                                    blogTitle={blog.blogTitle}
                                    author={blog.author}
                                    publishedDate={blog.publishedDate}
                                    blogDescription={blog.blogDescription}
                                    authorWork={blog.authorWork}
                                />
                            ))} */}
          </>
        )}
      </Row>
    </Container>
  );
};

export default Blog;
