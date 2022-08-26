

function Header(){
    return(
        <div className="container mx-auto border-b-2 bg-gray-50">
            <div className=" w-10/12 sm:justify-items-center lg:flex sm:flex-wrap py-5 mx-auto">
                <div className="lg:w-1/2 sm:w-full mx-auto sm:text-center lg:text-left sm:mb-2 ">
                    <a className="text-blue-700 text-2xl font-semibold " href="/home"><h1>Estatery</h1></a>
                </div>
                <div className="flex lg:justify-end sm:justify-items-center mx-auto gap-2 border-red-800 sm:mt-2 lg:w-1/2 sm:w-36">
                    <button className="border-2 border-blue-400 text-sm font-medium rounded p-2">Login</button>
                    <button className="bg-blue-700 text-white text-sm font-medium rounded p-2">Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Header;