import React from 'react';

export function List({children}) {
  return (
    <ul className='job-postings'>{children}</ul>
  );
}

export function ListItem({children}) {
  return <li className='job-post'>{children}</li>;
}