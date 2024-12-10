
import { useEffect, useState } from 'react';
import Header from './Header';
import Superhero from './superheros';

function App() {


  let [data,setData]=useState([]);

  let [filterData,setFilterData]=useState([]);

  let [isLoading, setIsLoading] = useState(true);


function superheroFunc(value){
  setData(value)
}

useEffect(()=>{
  fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json").then((response)=>response.json()).then((data)=>{
    setData(data)
    setFilterData(data)
    console.log(data)
    setIsLoading(true)
  }).catch((err)=>{
    setIsLoading(false)
  })
},[])


  return (
    <div>
      <Header superheros={filterData} superheroFunc={superheroFunc}></Header>

{
  isLoading ? (
    <div className="loader">
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
    <p className="text-white font-bold pl-3">LOADING...</p>
</div>
   
  
  ):(
    <>
    { data.length > 0 ? ( 
      <div className="w-full  bg-black py-3 px-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {
          data.map((superhero)=>{
             return <Superhero key={superhero.id} superheros={superhero}></Superhero>
          })
        }
     </div>
      ):(<div className='w-full h-[500px] md:h-[850px] lg:h-[400px] bg-black flex justify-center items-center text-4xl font-bold text-white'>superhero not found</div>)
      }
      </>
  )
}


    </div>
  );
}

export default App;
