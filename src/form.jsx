import { useState } from "react";

export default function Form( {fetchData} ) {

    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        fetchData(input);

        setInput('');
    }

    return(
        <div className="flex justify-center flex-nowrap w-full">
            <form className="flex flex-nowrap bg-gray-950 m-6 w-full max-w-2xl
                            border-4 border-gray-950 rounded-xl"
                onSubmit={handleSubmit}>

                <input className="bg-gray-900 w-full rounded-l-xl p-2"
                    type="text" 
                    title="Enter planet"
                    value={input}
                    placeholder="Enter a celestial body, e.g. Moon, Jupiter, Titan"
                    onChange={e => setInput(e.target.value)}/>

                <input className="bg-gray-900 ml-1 p-2 rounded-r-xl
                                text-gray-300"
                    type="submit"/>
            </form>
        </div>
    );
}