import React, { useEffect, useState } from 'react'
// import BasicLineChart from './chat'
// import Pai from './chat'
import "./Summary.css"
import axios from 'axios';

const Summry = () => {

  const url = "http://localhost:4000";
  const [list,setList] = useState([]);
  const [user, setUser] = useState([])
  
  const [orders, setOrders] = useState([]);


  const fetchAllOrders = async () => {
    const response = await axios.get(`${url}/api/order/list`)
    if (response.data.success) {
      setOrders(response.data.data.reverse());
      console.log(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }
  useEffect(() => {
    fetchAllOrders();
  }, [])

  console.log(orders.length);
  
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if(response.data.success)
    {
      setList(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }
  useEffect(()=>{
    fetchList();
  },[])





  
  const allusers = ()=>{
    axios.get('http://localhost:4000/api/user/user').then((rrs)=>{
      setUser(rrs.data.data)
    })
  }
  useEffect(()=>{
    allusers();
  },[])
  var alluser = (user.length)

  console.log(alluser);
  console.log(list.length);
  var myData= (list.length);

  console.log(myData);

  var doghnutCharts = document.querySelectorAll('.doghnutChartGroup .circular-progress');

for (var h = 0; h < doghnutCharts.length; h++) {
    var percent = doghnutCharts[h].getAttribute('data-percent');
    console.log(percent);
    var degree = 90 + ( ( 360 / 100 ) * Number(percent) );
    console.log(degree);

    if (percent > 0 && percent <= 25) {
        doghnutCharts[h].style.background = 'linear-gradient(90deg, #E0E0E0 50%, transparent 50%, transparent), linear-gradient(' + degree + 'deg , #FF70A6 50%, #E0E0E0 50%, #E0E0E0)';
    } else if (percent > 25 && percent <= 50) {
        doghnutCharts[h].style.background = 'linear-gradient(90deg, #E0E0E0 50%, transparent 50%, transparent), linear-gradient(' + degree + 'deg , #FF70A6 50%, #E0E0E0 50%, #E0E0E0)';
    } else if (percent > 50 && percent <= 75) {
        doghnutCharts[h].style.background = 'linear-gradient(-90deg, #FF70A6 50%, transparent 50%, transparent), linear-gradient(' + degree + 'deg , #FF70A6 50%, #E0E0E0 50%, #E0E0E0)';
    } else if (percent > 75 && percent <= 100) {
        doghnutCharts[h].style.background = 'linear-gradient(-90deg, #FF70A6 50%, transparent 50%, transparent), linear-gradient(' + degree + 'deg , #FF70A6 50%, #E0E0E0 50%, #E0E0E0)';
    } else {
        doghnutCharts[h].style.background = 'linear-gradient(90deg, #E0E0E0 50%, transparent 50%, transparent), linear-gradient(90deg , #FF70A6 50%, #E0E0E0 50%, #E0E0E0)';
    }

    //doghnutCharts[h].style.background = 'linear-gradient(90deg, #E0E0E0 50%, transparent 50%, transparent), linear-gradient(' + degree + 'deg , #FF70A6 50%, #E0E0E0 50%, #E0E0E0)';
    console.log(doghnutCharts[h].style.background);
  }
  return (
   <>
       <div classNameName='allll' style={{display:"flex"}}>
        <div style={{padding:"100px"}}>
        <div className="doghnutChartGroup displayInlineBlock" >
	        <div className="circular-progress" data-percent={list.length} data-text={list.length}></div>
	     <div className="circular-text">Products</div>
        </div> 
        </div>
     




       <div style={{padding:"100px"}}>
       <div className="doghnutChartGroup displayInlineBlock">
	<div  className="circular-progress" data-percent={user.length} data-text={user.length}></div>
	<div className="circular-text">Users</div>
</div>
       </div>
       <div > 
      
        <div style={{padding:"100px"}} className="doghnutChartGroup displayInlineBlock">
	<div className="circular-progress" data-percent={orders.length} data-text={orders.length}></div>
	<div className="circular-text">Orders</div>
</div></div>
       </div>

       
       
   </>
  )
}

export default Summry;