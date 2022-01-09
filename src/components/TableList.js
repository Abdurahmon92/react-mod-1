import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import TableHead from './TableHead';
import TableItem from './TableItem';


const TableList = ({ posts, title, remove }) => {

  return (
    <>
      <h2 className='text-center'>{title}</h2>
      {/* <TableHead nam="#" programing="Progremmeing" stack="stack" action="Action" /> */}
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="item">
            <TableItem remove={remove} post={post} number={index + 1} key={index}/>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  )
};


export default TableList;