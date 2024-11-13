import React from 'react'
import { useEffect,useState } from 'react'

const prefix=`whatsapp-clone-`
function useLocalStorage(key,initialValue) {
  const prefixkey=prefix+key;
  const[value,setValue]=useState(()=>{
    const jsonValue=localStorage.getItem(prefixkey)
    if(jsonValue!=null) return JSON.parse(jsonValue)

    if(typeof initialValue===`function`) {  
      return initialValue()
    } else {
      return initialValue
    }
  
})
useEffect(() => {
  localStorage.setItem(prefixkey,JSON.stringify(value))
}, [prefixkey,value])

return [value,setValue]
}

export default useLocalStorage
