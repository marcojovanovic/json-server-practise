import React, { useState, useEffect } from 'react';
import Blog from './Blog';

//import { blogs } from './data';

function BlogList() {
  const [blogPosts, setBlogPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(() => {
    const controler = new AbortController();

    setTimeout(() => {
      async function getJsondata() {
        try {
          const data = await fetch('http://localhost:8000/blogs', {
            signal: controler.signal,
          });

          const res = await data.json();

          if (data.status !== 200) {
            throw Error('nesto ga zabrlja');
          }

          setBlogPosts(res);

          setIsLoading(false);
        } catch (err) {
          if (err.name === 'AbortError') {
            console.log('fetch caught');
          }

          setError(err.message);
          setIsLoading(false);
        }
      }

      getJsondata();
    }, 500);

    return () => controler.abort();
  }, []);

  return (
    <>
      {error && <h1>Nesto ga zabrlja ...</h1>}
      {isLoading ? (
        <h1 className="loading-title">Loading ....</h1>
      ) : (
        <div className="container">
         
            {blogPosts &&
              blogPosts.map((item) => {
                const { title, body, id } = item;

                return (
                  <Blog
                    key={item.id}
                    title={title}
                    body={body}
                    id={id}
                    isLoading={isLoading}
                  />
                );
              })}
             
          </div>
        
      )}
    </>
  );
}

export default BlogList;
