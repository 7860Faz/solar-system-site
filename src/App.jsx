import Intro from "./intro.jsx";
import Form from "./form.jsx";
import PlanetCard from "./planetCard.jsx";

function App() {
    const Earth = {
        "Name": "Earth",
        "Temperature": "288 K",
        "Mass": 5.972e24
    }
    
    return(
        <>
            <Intro />
            <Form />

            <PlanetCard planet={Earth}/>

        </>
    );
}

export default App