import { useState } from "react";
import Header from "./Header.jsx";
import Intro from "./intro.jsx";
import Form from "./form.jsx";
import PlanetCard from "./planetCard.jsx";


function App() {
    const Earth = {
        englishName: "Earth",
        avgTemp: 288,
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
            console.error("fetching physical data from API failed");
        } finally {
            console.log(data);
        }
    }
    
    const fetchImageData = async (celestialBody) => {
        try{
            const result = await fetch (
                `https://images-api.nasa.gov/search?q=${encodeURIComponent(celestialBody)}&media_type=image&page_size=5` 
            );
            if(!result.ok)
                throw new Error("network response returned an error");
                
            const json = await result.json();
            console.log(json);
            const item = json.collection.items[0];
            setImageData(item.links[0].href);

        } catch (err) {
            console.error("fetching image data from NASA API failed");
        } finally {
            console.log(imageData);
        }
    }

    return(
        <>
            <Header />
            <Intro />
            <Form fetchData={fetchPlanetData} 
                fetchImage={fetchImageData}/>

            <PlanetCard planetInfo={data} 
                        image={imageData}/>

        </>
    );
}

export default App