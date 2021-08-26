import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogDetails from "./BlogDetails"
import "./Blog.css"

const Blog = ({ blogContent }) => {
    // const [articleImg, setArticleImg] = useState(blogContent.firstArticle.img)
    // const [blogTitle, setBlogTitle] = useState(blogContent.firstArticle.blogTitle)
    // const [blogDescription, setBlogDescription] = useState(blogContent.firstArticle.blogDescription)
    // const changeContent = () => {
    //     console.log("clicked")
    //     setBlogTitle(Object.values(blogContent).filter(item => console.log(item.id === blogContent.id)))
    // }
    return (
        <Container>
            <Row className="blog">
                {blogContent && (
                    <>
                        <Col sm={6}>
                            <div className="articleContianer">
                                <img src={blogContent.firstArticle.img} alt="" className="w-100 articleImg" />
                                <h1 id="articleTitle">{blogContent.firstArticle.blogTitle}</h1>
                                <p id="articleDescription">{blogContent.firstArticle.blogDescription}</p>
                            </div>
                        </Col>
                        <Col sm={6} id="blogCol">
                            {Object.values(blogContent).map((blog) => (
                                <div key={blog.id} className="blogContianer">
                                    <p id="publishedDate">{blog.publishedDate}</p>
                                    <p id="blogTitle">{blog.blogTitle}</p>
                                    <div className="author">
                                        <img src={blog.authorImg} alt="authorImg" className="authorImg w-100" />
                                        <div>
                                            <p>
                                                <span id="authorName">{blog.author}</span>
                                                <br />
                                                {blog.authorWork}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
    )
}

export default Blog