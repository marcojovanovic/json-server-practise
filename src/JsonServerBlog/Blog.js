import React from 'react';
import {Link} from 'react-router-dom'

function Blog({ title, body, id }) {
  return (
    <>
      <Link to={`/blogDetails/${id}`}>
        <div className="blog-content">
          <h1 className="blog-title">{title}</h1>
          <p>{body}</p>
          <button className="btn">Delete Blog</button>
        </div>
      </Link>
    </>
  );
}

export default Blog;
