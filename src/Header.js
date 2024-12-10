function Header(props){
    return(
        <div className="w-full bg-black flex flex-col items-center p-2">
            <h1 id="logo" className="font-bold text-6xl text-white lg:text-8xl text-glow">SUPERHERO</h1>
            <p className="text-white text-3xl pt-2 font-medium lg:text-4xl">IMAGE GALLERY</p>
            <div className="flex justify-center  w-full p-4 ">
            <input id="inpVal" type="search" placeholder="search superhero" className="w-[90%] lg:w-[80%] p-2 outline-none rounded-lg focus:ring-4 focus:ring-red-400 focus:bg-blue-100 " onChange={(e)=>{
              let filterValue = props.superheros.filter((data)=>{
                return data.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
              })
              if(e.target.value !== ""){
              props.superheroFun(filterValue)
              }
              else{
                props.superheroFun(props.superheros)
              }
            }}></input>
            </div>
        </div>
    )
}

export default Header;