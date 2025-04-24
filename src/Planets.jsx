

function Planets(data) {

    const Planets = data.planets;

    const List = Planets.map(planet => 
        <li key={planet.id}>
            {planet.name}: {planet.radius} Km radius; {planet.temperature}K temperature
        </li>
    );

    return(
        <ol>
            {List}
        </ol>
    );
}

export default Planets;