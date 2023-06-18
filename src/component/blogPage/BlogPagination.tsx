import React from "react";
import "./stylesheet/pagination.scss";

const BlogPagination = () => {
  return (
    <div className="pagination">
      <ul>
        <li className="previousNav">First</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li className="nextNav">Last</li>
      </ul>
    </div>
  );
};

export default BlogPagination;
