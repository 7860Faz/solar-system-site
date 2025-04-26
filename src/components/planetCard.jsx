
export default function PlanetCard(data) {
    const planet = data.planetInfo;
    const image = data.image;
    
    return(
        <div className="flex justify-center">
            <div className="flex justify-center flex-col  
                          bg-gray-950 m-6 p-2 w-fit rounded-5">

                <h1 className="bg-gray-900 w-full p-4 text-center
                              text-gray-300 font-black text-4xl">
                    Planet Card
                </h1>

                <img className='w-lg max-w-fit' 
                    src={image}
                    alt="earth pic" />
            
                <section>
                    <Info type="Name" info={planet.englishName}/>
                    <Info type="Temperature" info={`${planet.avgTemp} K`}/>
                    <Info type="Mass" 
                        info={`${planet.mass.massValue}e+${planet.mass.massExponent} Kg`} />
                    <Info type="Radius" info={`${planet.meanRadius} Km`} />

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