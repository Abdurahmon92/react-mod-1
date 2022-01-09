import React, { useEffect, useState } from 'react';
import "../style/styles.css";
import TableList from '../components/TableList';
import Form from '../components/Form';
import FilterAndSearch from '../components/FilterAndSearch';
import MyModal from '../ui/modal/MyModal';
import MyButton from '../ui/buton/MyButton';
import Loading from '../ui/loader/Loading';
import { usePosts } from '../hooks/useCreatePosts';
import PostServiceApi from '../api/PostServiceApi';
import { useFetching } from '../hooks/useFetching';
import { getPageArry, getPageCount } from '../utils/Pages';
import MyPagination from '../ui/pagination/MyPagination';


function MainPage() {
  const [posts, setPosts] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, serLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
 


  // const [isLoading, setIsLoading]=useState(false);

  const [fetchPosts, isLoading, postError] = useFetching(async (limit,page) => {
    const response = await PostServiceApi.getAllPosts(limit,page)
    setPosts(response.data)
    console.log(response.headers['x-total-count'])
    const totalCount = response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount, limit));
  })

  console.log(totalPage);



  useEffect(() => {
    fetchPosts(limit,page)
  }, [limit,page])


  const createPost = (newpost) => {
    setPosts([...posts, newpost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(s => s.id !== post.id));
  }

  const cahangePage=()=>{
    setPage(page)
    fetchPosts(limit,page)
  }

  //  const sortPost=(sort)=>{
  //      setSelect(sort)
  //     }

  return (
    <div className="app w-50 mx-auto">

      <MyButton
        className='btn btn-primary'
        onClick={() => {
          setModal(true)
        }}
      >
        addposts
      </MyButton>

      <MyModal modal={modal} setModal={setModal}>
        <Form createPost={createPost} />
      </MyModal>

      <FilterAndSearch
        filter={filter} setFilter={setFilter}
      />

      {
        postError && <p>Error</p>
      }

      {isLoading ?
        <Loading /> :<TableList remove={removePost} posts={sortedAndSearchPosts} title="Beautiful posts" />
      }
        <MyPagination
           page={page}
           totalPage={totalPage} 
           cahangePage={cahangePage} 
        />       
    </div>
  );
}

export default MainPage;
