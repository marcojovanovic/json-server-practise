import React,{useEffect, useState} from 'react'
import { useParams} from 'react-router-dom';

import {useHistory} from 'react-router-dom'

function BlogDetails() {

  let { id } = useParams()

  const [body, setBody]=useState('')
  const [title, setTitle]=useState('')

  const history = useHistory()

  const handleDelete =() =>{

    fetch(`http://localhost:8000/blogs/${id}`, {

      method:'Delete'
    }).then(()=> history.push('/'))


  }



  useEffect(() => {
     
      async function getJsondata() {
      
          const data = await fetch(`http://localhost:8000/blogs/${id}`);

          const res = await data.json();

          console.log(res)

          setBody(res.body)
          setTitle(res.title)
        
      }
           getJsondata();
     
  }, []);


  return (
    <div className='container'>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={handleDelete} className='btn'>Delete Blog</button>
    </div>
  )
}

export default BlogDetails
