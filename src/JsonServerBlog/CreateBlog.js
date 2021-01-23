import React, { useState } from 'react';

import {useHistory} from 'react-router-dom'


function CreateBlog() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('pera');


  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

      
    fetch('http://localhost:8000/blogs',{

      method:'POST',
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(blog)

    }).then(()=> history.push('/') )




  };

  return (
    <div className="container">
      <h1 className='createBlog-title'>Make Blog</h1>

      <form onSubmit={handleSubmit} className="form-control">
        <div>
          <label className='label' htmlFor="title">Naslov</label> <br></br>
          <input
            className='blog-input'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className='label' htmlFor="title">Tekst</label> <br></br>
          <textarea
            className='blog-input'
            type="text"
            value={body}
            rows='12'
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div>
          <select className='blog-select' onChange={(e) => setAuthor(e.target.value)}>
            <option value="pera">Pera</option>
            <option value="zdera">Zdera</option>
          </select>
        </div>

        <button className="btn">Add Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
