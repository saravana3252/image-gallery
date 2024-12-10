
import { useEffect, useState } from 'react';
import Header from './Header';
import Superhero from './superheros';

function App() {


  let [data,setData]=useState([])

  let [filterData,setFilterData]=useState([])


function superheroFun(value){
  setData(value)
}

useEffect(()=>{
  fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json").then((response)=>response.json()).then((data)=>{
    setData(data)
    setFilterData(data)
    console.log(data)
  })
},[])


  return (
    <div>
      <Header superheros={filterData} superheroFun={superheroFun}></Header>
      <div className="w-full  bg-black p-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {
          data.map((superhero)=>{
             return <Superhero superheros={superhero}></Superhero>
          })
        }
    
     

     </div>
     
    </div>
  );
}

export default App;
