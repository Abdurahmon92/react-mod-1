import React, { useState } from 'react';
import MyButton from '../ui/buton/MyButton';
import MyImput from '../ui/input/MyImput';

function Form(props) {
    const [post, setPost]=useState({title:'', stack:''})

       const addPost=(e)=>{
         e.preventDefault()
           
         const newPost={ 
            ...post,
            id: Date.naw
           }
          props.createPost(newPost)
          
          setPost({title:"", stack:""})
       }
       



    return (
        <>
    <form>
       <h3 className='text-center'> create your first posts</h3>
        
           <MyImput  
              type="text"
              className='form-control'
              placeholder='Post title'
              value ={post.title}
              onChange={e=>setPost({...post, title: e.target.value})}
           />

          <MyImput
           type="text"
           className='form-control'
           placeholder='Post body'
           value ={post.stack}
           onChange={e=>setPost({...post, stack: e.target.value})}
          />

       <br/>

            <MyButton onClick={addPost} className='btn btn-primary w-100'>
              add
            </MyButton>
    </form>        
       
        </>
    );
}

export default Form;