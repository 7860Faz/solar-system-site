
export default function PlanetCard() {
    
    return(
        <div className="flex justify-center">
            <div className="flex justify-center flex-col 
                          bg-gray-950 m-6 p-2
                            w-fit border-8 border-gray-950">

                <h1 className="bg-gray-900 w-full p-2 text-center
                              text-gray-400 font-black text-4xl">
                    Planet Card
                </h1>

                <img className='w-lg max-w-fit' 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/960px-The_Earth_seen_from_Apollo_17.jpg" 
                    alt="earth pic" />
            
                <section className='bg-gray-900 p-3'>
                    <p>Name: Earth</p>

                </section>
            </div>
        </div>
    );
}