
export default function PlanetCard(planetinfo) {
    let planet = planetinfo.planet;
    
    return(
        <div className="flex justify-center">
            <div className="flex justify-center flex-col  
                          bg-gray-950 m-6 p-2 w-fit rounded-5">

                <h1 className="bg-gray-900 w-full p-2 text-center
                              text-gray-300 font-black text-4xl">
                    Planet Card
                </h1>

                <img className='w-lg max-w-fit' 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/960px-The_Earth_seen_from_Apollo_17.jpg" 
                    alt="earth pic" />
            
                <section>
                    <Info type="Name" info={planet["Name"]}/>
                    <Info type="Temperature" info={planet["Temperature"]}/>

                </section>
            </div>
        </div>
    );
}

function Info(data) {
    return(
        <p className="text-xl text-center text-gray-300 bg-gray-900
                    p-2 mt-3">
            {data.type}: {data.info}
        </p>
    );
}