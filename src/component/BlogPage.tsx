import React from "react";
import WelcomePageOfBlog from "./blogPage/WelcomePageOfBlog";
import Header from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import ArticlesImageModuleOfBlog from "./blogPage/ArticlesImageModuleOfBlog";
import BlogPagination from "./blogPage/BlogPagination";
import ModularKit from "./commonComponent/ModularKit";

const BlogPage = () => {
  return (
    <>
      <Header />
      <WelcomePageOfBlog />
      <ArticlesImageModuleOfBlog />
      <BlogPagination />
      <ModularKit />
      <Footer />
    </>
  );
};

export default BlogPage;
