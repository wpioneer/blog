import React from 'react';
import { RouteHandler, Link } from 'react-router';
import { link } from 'gatsby-helpers';
import BlogNav from '../BlogNav';
import BlogSocial from '../BlogSocial';
import style from './style.css';

export default class extends React.Component {
  render() {
    let blogName, blogDescr, blogLogo;
    if (this.props.state.path === link('/')) {
      blogName = (
        <h1>
          <Link
            style={{
              textDecoration: 'none',
              borderBottom: 'none',
              color: 'inherit'
            }}
            to={link('/')}
          >
            {this.props.config.blogTitle}
          </Link>
        </h1>
      );
    } else {
      blogName = (
        <h2>
          <Link
            style={{
              textDecoration: 'none',
              borderBottom: 'none',
              color: 'inherit'
            }}
            to={link('/')}
          >
            {this.props.config.blogTitle}
          </Link>
        </h2>
      );
    }
    blogLogo = (
        <img
          src='./photo.png'
          width='75'
          height='75'
          style={{
            marginBottom: '15px',
            opacity: '0.9',
            borderRadius: '0%',
            backgroundClip: 'padding-box'
          }}
        />
    );
    blogDescr = (
        <p>
          {this.props.config.blogDescr}
        </p>
    ); 
    return (
      <div className='sidebar'>
        <div className='sidebar-inner'>
          <div className='blog-details'>
            <header>
              {blogLogo}
              {blogName}
              {blogDescr}
            </header>
          </div>
          <div className='blog-options'>
            <BlogNav {...this.props}/>
            <footer>
            <BlogSocial {...this.props}/>
            <p className='copyright'>
              &copy; All rights reserved.
            </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}