import { useState } from "react";
import Intro from "./intro.jsx";
import Form from "./form.jsx";
import PlanetCard from "./planetCard.jsx";


function App() {

    const [data, setData] = useState(null);

    const Earth = {
        "Name": "Earth",
        "Temperature": "288 K",
        "Mass": 5.972e24
    }

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

            <PlanetCard planet={Earth} />

        </>
    );
}

export default App