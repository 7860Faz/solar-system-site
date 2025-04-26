
export default function Footer() {

    return(
        <footer className="flex flex-col m-0 bg-gray-950 w-full mt-auto">
            <div className="bg-amber-600 h-2"></div>
            <div className="flex flex-col self-center p-3">
                <Link link="https://github.com/Adrian-rospx/solar-system-site"
                    name="GitHub Project link"/>
                <Link link='https://api.nasa.gov/' name='NASA image API' />
                <Link link='https://api.le-systeme-solaire.net/en/'
                    name="Solar system data API" />

            </div>
        </footer>

    );
}

function Link(data) {
    return(
        <p className="bg-gray-900 w-2xl m-1 p-1 text-gray-400">
            {data.name}: &nbsp;
            <a href={data.link} className="italic">
                {data.link}
            </a>
        </p>
    );
}