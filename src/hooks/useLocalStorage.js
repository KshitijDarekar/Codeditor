import {useState,useEffect} from 'react';


const PREFIX='code-editor-'
function useLocalStorage(key,initialValue) {
    //getting the value 
    const prefixedKey= PREFIX+key
    const[value,setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(prefixedKey)
        if(jsonValue != null) return JSON.parse(jsonValue)
        
        if(typeof initialValue ==='function'){
            return initialValue()
        }
        else{
            return initialValue
        }
    })
    useEffect(()=>{
        //saving the value in local storage
        localStorage.setItem(prefixedKey,JSON.stringify(value))
    },[prefixedKey,value])
  
    return [value,setValue] ;
}

export default useLocalStorage;
