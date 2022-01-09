import React from 'react';
import { getPageArry } from '../../utils/Pages';
import MyButton from '../buton/MyButton';

function MyPagination({ totalPage, page, cahangePage }) {
    const pageArray = getPageArry(totalPage);
   
        return (
        <>
          {pageArray.map(item => (
           
             <MyButton
                 className={page === item ? "btn btn-primary" : "btn btn-outline-primary"}
                 onClick={() => cahangePage(item)}>
                   {item}
             </MyButton> ))}       
         </>
        );

    

}

export default MyPagination;