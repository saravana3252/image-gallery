import { useEffect, useState } from 'react';

function Header(props) {
  const [text, setText] = useState('SUPERHERO');

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => (prevText === 'SUPERHERO' ? 'VILLAIN' : 'SUPERHERO'));
    }, 3000); 

    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black flex flex-col pt-2 items-center">
      <h1 id="logo" className="font-bold text-6xl text-white md:text-9xl">{text}</h1>
      <p className="text-white text-3xl pt-1 font-medium md:text-5xl">IMAGE GALLERY</p>
      {/* <p className="italic text-yellow-100 pt-2">An Epic Gallery of Superheroes and Villains</p> */}
      <div className="flex justify-center w-full p-3 md:p-4 ">
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
