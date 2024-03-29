import { useMemo } from "react"


export const useSortPosts=(posts, sort) => {
    const sortedPosts = useMemo(()=>{
        console.log("render") 
        
       if (sort) { 
           return [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]))
        }
          return posts 
      }, [sort, posts])
      return sortedPosts
}


export const usePosts=(posts, sort, query)=>{
    const sortedPosts=useSortPosts(posts, sort)
    const sortedAndSearchPosts = useMemo(()=>{
        return sortedPosts.filter(pos=>pos.title.toLowerCase().includes(query.toLowerCase()))
      },[query, sortedPosts])
      
     return sortedAndSearchPosts
}