import {useState} from "react";

export const useFetching=(collback)=>{
    const [isLoading, setIsLoading]=useState(false);
    const [err, setErr]=useState("");

const fetching= async()=>{
 
try{
  setIsLoading(true)
   await collback()
 }catch(e){
   setErr(e.message)
 }finally{
   setIsLoading(false)   
 }

}
  return [fetching, isLoading, err]
};
