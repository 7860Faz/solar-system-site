

function Planets() {
    
    const Planets = [
        {name: "Planet X", radius: 1000, temperature: 273},
        {name: "Mars", radius: 5000, temperature: 253},
        {name: "Earth", radius: 3000, temperature: 280},
    ];

    const List = Planets.map(planet => 
        <li key={planet.name}>{planet.name}</li>
    );

    return(
        <ol>
            {List}
        </ol>
    );
}

export default Planets;