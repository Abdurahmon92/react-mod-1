import React from 'react';
import stilus from './MyModal.module.css'; 

function MyModal({children,modal,setModal}) {
    const ModalClasses=[stilus.myModal]  
      if(modal){
        ModalClasses.push(stilus.active) 
      }
    return (
        <div className={ModalClasses.join(' ')}onClick={()=>setModal(false)}>
           <div className={stilus.myModalContent} onClick={(e)=> e.stopPropagation()}>
               {children}
           </div> 
        </div>
    );
}

export default MyModal;