import React from 'react';

const TableHead = ({nam, programing, stack, action}) => {
    return(
        <>
         <thead>
        <tr>
          <th>{nam}</th>
          <th>{programing}</th>
          <th>{stack}</th>
          <th>{action}</th>
        </tr>
        </thead>    
        </>
    );
};

export default TableHead;