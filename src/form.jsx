
export default function Form() {

    return(
        <div className="flex justify-center flex-nowrap w-full">
            <form className="flex flex-nowrap bg-gray-950 m-6 w-full max-w-2xl
                            border-4 border-gray-950 rounded-xl">

                <input className="bg-gray-900 w-full rounded-l-xl p-2"
                        type="text" title="Enter planet"
                        placeholder="Enter a celestial body, e.g. Moon"/>

                <input className="bg-gray-900 ml-1 p-2 rounded-r-xl
                                    text-gray-300"
                        type="submit" id="sumbitBtn" />
            </form>
        </div>
    );
}