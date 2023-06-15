import React from "react";
import "./stylesheet/pagination.scss";

const BlogPagination = () => {
  return (
    <div className="pagination_blog">
      <ul>
        <li className="previous_nav">First</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li className="next_nav">Last</li>
      </ul>
    </div>
  );
};

export default BlogPagination;
