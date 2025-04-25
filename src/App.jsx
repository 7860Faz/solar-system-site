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

    const [data, setData] = useState(Earth);


    const fetchFromApi = async (celestialBody) => {

        try{
            const result = await fetch(
                `https://api.le-systeme-solaire.net/rest/bodies/${encodeURIComponent(celestialBody)}` 
            );
            if(!result.ok)
                throw new Error("network response was not ok");
                
            const json = await result.json();
            setData(json);
        }
        catch (err){
            console.error("fetching data from API failed");
        }
        console.log(data);
    }
    
    return(
        <>
            <Intro />
            <Form fetchData={fetchFromApi}/>

            <PlanetCard planetInfo={data} />

        </>
    );
}

export default App