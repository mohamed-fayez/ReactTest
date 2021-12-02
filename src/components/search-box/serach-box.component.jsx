import React from 'react'
import './serach-box.style.css'
export const SearchBox = ({placeholder,handelChange}) => {
   
   return <div className="">
         <input type="serach" placeholder={placeholder}  onChange={handelChange}/>
       </div>
}