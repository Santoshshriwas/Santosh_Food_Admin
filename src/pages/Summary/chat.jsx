import axios from "axios";
import React, { useEffect, useState } from "react";
import { VictoryPie } from "victory-pie";

// const myData = [
//   { x: "rum", y: 45 },
//   { x: "botka", y: 55},
//   { x: "beere", y: 44 },
// ];

const Pai = () => {
  const url = "http://localhost:4000";
 

  const [list , setList] = useState([]);
  const fetchList = async()=>{
    const response = await axios.get(`${url}/api/food/list`);
    if(response.data.success){
      setList(response.data.data)
    }else{
      toast.error("error")
    }
  }
  useEffect(()=>{
    fetchList()
    console.log(list);
    // alert(list.length)
  },[])

const salad = list.filter(list=>list.
  category
   === 'Salad');

let sal = (salad.length)
const rolls = list.filter(list=>list.items);

let roll = (rolls.length)
const deserts = list.filter(list=>list.
  category
   === 'Deserts');

let desert = (deserts.length)


const myData = [
  { x: "salad", y: sal },
  { x: "rolls", y: roll},
  { x: "deserts", y: desert },
];


  return (
    <div>
      <VictoryPie
        data={myData}
        colorScale={["blue", "yellow", "red"]}
        radius={100}
      />
    </div>
  );
};

export default Pai;


{/* <style>
    /Circles Dashboard Zizo/
.doghnutChartGroup {
    margin: 10px;
    width: 100px;
}

    .doghnutChartGroup .circular-progress {
        background: linear-gradient(90deg, #E0E0E0 50%, transparent 50%, transparent), linear-gradient(126deg, #FF70A6 50%, #E0E0E0 50%, #E0E0E0);
        border-radius: 50%;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        height: 200px;
        margin: 2em auto;
        position: relative;
        min-width: 200px;
        margin: 10px;
        transition: background .5s 0.3s;
    }

        .doghnutChartGroup .circular-progress::before {
            background-color: #FAFAFA;
            border-radius: 50%;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
            color: rgba(0, 0, 0, 0.54);
            content: attr(data-text);
            font-size: 72px;
            font-weight: bold;
            height: 100%;
            left: 0;
            line-height: 200px;
            position: absolute;
            text-align: center;
            top: 0;
            -webkit-transform: scale(0.87);
            transform: scale(0.87);
            width: 100%;
        }

        .doghnutChartGroup .circular-progress:hover {
            box-shadow: 0 0 100px 1px rgba(255, 214, 112, 0.35);
        }

    .doghnutChartGroup .circular-text {
        text-align: center;
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1px;
    }

@keyframes turning_cw {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
<div style="display: flex; justify-content: space-around;">
<div class="doghnutChartGroup displayInlineBlock" >
	<div class="circular-progress" data-percent="90" data-text="23+"></div><br>
	<div class="circular-text">HTML</div>
</div>
<div class="doghnutChartGroup displayInlineBlock">
	<div class="circular-progress" data-percent="90" data-text="23+"></div>
	<div class="circular-text">HTML</div>
</div>
<div class="doghnutChartGroup displayInlineBlock">
	<div class="circular-progress" data-percent="90" data-text="23+"></div>
	<div class="circular-text">HTML</div>
</div>
</div>
<script>

    // Draw Circle dashboard
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
</script> */}