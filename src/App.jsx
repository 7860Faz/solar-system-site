import Header from './Header.jsx';
import Planets from './Planets.jsx';

function App() {
    
    const rockyPlanets = [
        {id:1, name: "Venus", radius: 1000, temperature: 450},
        {id:3, name: "Earth", radius: 3000, temperature: 280},
        {id:2, name: "Mars", radius: 5000, temperature: 253},
    ];

    const gasPlanets = [
        {id:4, name: "Jupiter", radius: 20000, temperature: 200},
        {id:5, name: "Saturn", radius: 18000, temperature: 180},
    ]

    return(
        <>
            <Header/>
            
            <p>Rocky planets:</p>
            <Planets planets={rockyPlanets} />

            <p>Gas planets:</p>
            <Planets planets={gasPlanets} />
        </>
    );
}

export default App