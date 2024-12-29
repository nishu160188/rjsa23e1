import React from 'react';
import { Link } from 'react-router-dom';

const blogList = [
  { id: 1, title: 'Intensity', shortText: 'Weak moods have minimal...', fullText: 'Weak moods have minimal emotional fluctuations, while strong moods are intense and extreme moods are overwhelming and uncontrollable.' },
  { id: 2, title: 'Duration', shortText: 'Short-term moods are...', fullText: 'Short-term moods are fleeting, lasting only a few minutes or hours, while medium-term moods last several days or weeks, and long-term moods persist for months or years.' },
  { id: 3, title: 'Stability', shortText: 'Short-term moods are...', fullText: 'Short-term moods are prone to rapid changes, while medium-term moods are more stable but can still be altered, and long-term moods are highly resistant to external influences.' }
];

const Blogs = () => {
  return (
    <div className='blogs'>
      <h1>Blogs</h1>
      <ul>
        {blogList.map(blog => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.shortText}</p>
            <Link to={`/blog/${blog.id}`}>Read More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
