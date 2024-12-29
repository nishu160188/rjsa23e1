import React from 'react';
import { useParams } from 'react-router-dom';

const blogList = [
  { id: 1, title: 'Intensity', shortText: 'Weak moods have minimal...', fullText: 'Weak moods have minimal emotional fluctuations, while strong moods are intense and extreme moods are overwhelming and uncontrollable.' },
  { id: 2, title: 'Duration', shortText: 'Short-term moods are...', fullText: 'Short-term moods are fleeting, lasting only a few minutes or hours, while medium-term moods last several days or weeks, and long-term moods persist for months or years.' },
  { id: 3, title: 'Stability', shortText: 'Short-term moods are...', fullText: 'Short-term moods are prone to rapid changes, while medium-term moods are more stable but can still be altered, and long-term moods are highly resistant to external influences.' }
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogList.find(blog => blog.id === parseInt(id));

  return (
    <div className='blogDetail'>
      <h1>{blog.title}</h1>
      <p>{blog.fullText}</p>
    </div>
  );
};

export default BlogDetail;
