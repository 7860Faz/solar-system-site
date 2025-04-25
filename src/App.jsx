import { useState } from "react";
import Intro from "./intro.jsx";
import Form from "./form.jsx";
import PlanetCard from "./planetCard.jsx";


function App() {
    const Earth = {
        englishName: "Earth",
        avgTemp: 0,
        mass: {
            massExponent: 22,
            massValue: 7.346
        },
        meanRadius: 6371.0084
    }

    const [imageData, setImageData] = useState(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/960px-The_Earth_seen_from_Apollo_17.jpg"
    );
    const [data, setData] = useState(Earth);


    const fetchPlanetData = async (celestialBody) => {

        try{
            const result = await fetch (
                `https://api.le-systeme-solaire.net/rest/bodies/${encodeURIComponent(celestialBody)}` 
            );
            if(!result.ok)
                throw new Error("network response returned an error");
                
            const json = await result.json();
            setData(json);
        } catch (err) {
            console.error("fetching data from API failed");
        } finally {
            console.log(data);
        }
    }
    
    return(
        <>
            <Intro />
            <Form fetchData={fetchPlanetData}/>

            <PlanetCard planetInfo={data} image={imageData}/>

        </>
    );
}

export default App