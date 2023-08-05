// //import logo from './logo.svg';
// // import './App.css';

// import React from 'react';
// class App extends React.Component{


//   constructor(){
//     super()
//   }
//   render(){

//     return(

//       <div>

//       <h1>Hello</h1>


//       </div>


//     )



//   }



// }


// export default App;
import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import "./App.css"
import { FiWind } from 'react-icons/fi'
import { BsFillCloudFill } from 'react-icons/bs'
import {WiHumidity} from 'react-icons/wi'
import {BiSun} from 'react-icons/bi'
import {CiLocationOn} from 'react-icons/ci'

// import 
export default function Home() {

    let [data, setdata] = useState([])

    let [input, setinput] = useState("")

    const getdata = () => {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://pro.openweathermap.org/data/2.5/weather?q=${input}&appid=3500aa8ab775cb0cb97ead2b9fc41866&units=metric`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data);
                setdata([response.data])
            })
            .catch((error) => {
                alert("Enter Valid City Name");
            });


    }
    // if(input.length>1){
    //   // button.removeattribute
    //   document.getElementById("button").removeAttribute("disabled")
    //   if(input.length==0){
    //     document.getElementById("button").setAttribute("disabled")
    //   }

    // }

    return (
        <>
            <div className="container" style={{ textAlign: "center" }}>
                <h1> <BsFillCloudFill style={{color:"white"}}/> Weather data <BsFillCloudFill style={{color:"white"}}/></h1>
            <CiLocationOn /> &emsp; <input type="text" name={input} id="sinput" onChange={(e) => setinput(e.target.value)} placeholder="Enter City Name" />
                <button id="button" onClick={getdata} >check</button>
            </div>
            {
                data == input ? <h1></h1>

                    :
                    data.map((v, i) => {
                        return (


                            // <div  style={{textAlign:"center"}}>

                            <div class="weather-card" style={{width:"100px"}}>

                                <div className="alldata">
                                    <div class="location">Results For <br /> {v.name}</div>
                                    {/* <h2> NAME:{v.name}</h2> */}
                                    <div className="container">
                                        <div className="sub1">

                                            <h2 className="temperature"><BiSun/> temp:{Math.round(v.main.temp)} <sup>o</sup>c </h2>
                                        </div>

                                    </div>
                                    {/* <h2 className="description">Degree:  {v.wind.deg} </h2> */}
                                    <h2 className="footer">Weather:{v.weather["0"].main}</h2>
                                    <h2 className="footer-item">Wind Speed:{Math.round(v.wind.speed)} <FiWind />km/h</h2>
                                    <h2 className="footer-item">Humidity:{Math.round(v.main.humidity)}<WiHumidity/> </h2>
                                    <h2 className="footer-item"> feels like{Math.round(v.main.feels_like)}<sup>o</sup>c</h2>

                                </div>

                            </div>
                        )
                    })
            }



        </>
    )
}


// css code
/*   body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.weather-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  max-width: 320px;
  width: 100%;
}

.location {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.temperature {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.description {
  font-size: 1.2rem;
  color: #666666;
  margin-bottom: 20px;
}

.icon {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.footer {
  display: flex;
  justify-content: space-between;
}

.footer-item {
  font-size: 1.2rem;
  color: #999999;
  padding: 5px;
}

@media (min-width: 576px) {
  .weather-card {
    max-width: 400px;
  }
} */