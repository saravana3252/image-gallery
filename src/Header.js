
function Header(props) {


  return (
    <div className="w-full bg-black flex flex-col pt-2 items-center">
     
      <h1 id="logo"  className="font-bold text-8xl text-white  md:text-8xl lg:text-9xl">
        EPIC
      </h1>
     
      <p className="text-white text-3xl pt-1 font-medium sm:text-3xl md:text-4xl lg:text-5xl">
        IMAGE GALLERY
      </p>
      
      <div className="flex justify-center w-full p-3 md:p-4">
        <input
          id="inpVal"
          type="search"
          placeholder="Find Your Favourite Hero or Villain"
          className="w-[90%] lg:w-[80%] p-2 outline-none rounded-lg focus:ring-4 focus:ring-red-400 focus:bg-blue-100"
          onChange={(e) => {
            let filterValue = props.superheros.filter((data) => {
              return data.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
            });
            if (e.target.value !== '') {
              props.superheroFunc(filterValue);
            } else {
              props.superheroFunc(props.superheros);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Header;
