import React from 'react';
import BlogList from './BlogList';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails'

import './main.css';

import Home from './CreateBlog';
import CreateBlog from './CreateBlog';

function BlogApp() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <BlogList />
          </Route>
          <Route exact path="/blog">
            <CreateBlog />
          </Route>
          <Route exact path="/blogDetails/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default BlogApp;
