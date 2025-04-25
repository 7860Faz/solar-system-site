
export default function Form() {

    return(
        <div className="flex justify-center flex-nowrap">
            <form className="whitespace-nowrap bg-gray-950 m-6 w-fit h-fit
                            border-4 border-gray-950 rounded-xl">

                <input className="bg-gray-900 w-xl  rounded-l-xl p-2"
                        type="url" title="Enter your API key"
                        placeholder="Enter your API Key, ex:"/>

                <input className="bg-gray-900 ml-1 p-2 rounded-r-xl
                                    text-gray-300"
                        type="submit" id="sumbitBtn" />
            </form>
        </div>
    );
}