import React from 'react'
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';
import "./User.css"
const User = () => {
  const [list,setList] = useState([]);

  const allusers = ()=>{
    axios.get('http://localhost:4000/api/user/user').then((rrs)=>{
      setList(rrs.data.data)
    })
  }
  useEffect(()=>{
    allusers();
  },[])
  console.log(list.length);
  const ans = list.map((key)=>{
    return (
      <div className='list-table-format'>
        <p>{key._id}</p>
        <p>{key.name}</p>
        <p>{key.email}</p>
        <p>{key.password}</p>
      </div>
    )
  })
  return (
    <div className='list add flex-col'>
        <p>All Users List</p>
        <div className='list-table'>
          <div className="list-table-format title">
            <b>_Id</b>
            <b>Name</b>
            <b>Email</b>
            <b>Password</b>
          </div>
          {ans}
        </div>
    </div>
  )
}

export default User