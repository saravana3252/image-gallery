function Superhero(props){
    return (
        <div >
            <div className="relative overflow-hidden group">
                <div id="overlay" className="w-full h-full flex flex-col gap-1 lg:gap-2 justify-center  items-center lg:justify-center bg-black bg-opacity-0 absolute top-0 transition-all duration-500 cursor-pointer group-hover:bg-opacity-50 ">
                    <h1 className="opacity-0 transition-all duration-500 text-white text-xl lg:text-3xl font-bold group-hover:opacity-100">POWERSTATS</h1>
                    <p className="opacity-0 transition-all duration-500 text-white text-md lg:text-2xl group-hover:opacity-100">intelligence : {props.superheros.powerstats.intelligence}</p>
                    <p className="opacity-0 transition-all duration-500 text-white text-md lg:text-2xl  group-hover:opacity-100">strength : {props.superheros.powerstats.strength}</p>
                    <p className="opacity-0 transition-all duration-500 text-white text-md lg:text-2xl group-hover:opacity-100">speed : {props.superheros.powerstats.speed}</p>
                    <p className="opacity-0 transition-all duration-500 text-white text-md lg:text-2xl group-hover:opacity-100">durability : {props.superheros.powerstats.durability}</p>
                    <p className="opacity-0 transition-all duration-500 text-white text-md lg:text-2xl group-hover:opacity-100">power : {props.superheros.powerstats.power}</p>
                    <p className="opacity-0 transition-all duration-500 text-white text-md lg:text-2xl group-hover:opacity-100">combat : {props.superheros.powerstats.combat}</p>
                </div>
                <img src={props.superheros.images.md} alt="superheroImg"></img>
                </div> 
                <div>
                <p className="font-bold text-center text-2xl p-2 text-white">{props.superheros.name}</p>
                </div>
        </div>
    )
}

export default Superhero;