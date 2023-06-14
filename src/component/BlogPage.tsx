import React from "react";
import AboutBlogPage from "./blogPage/AboutBlogPage";
import Header from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import BlogImageModule from "./blogPage/BlogImageModule";
import BlogPagination from "./blogPage/BlogPagination";
import ModularKit from "./commonComponent/ModularKit";

const BlogPage = () => {
  return (
    <>
      <Header />
      <AboutBlogPage />
      <BlogImageModule />
      <BlogPagination />
      <ModularKit />
      <Footer />
    </>
  );
};

export default BlogPage;
