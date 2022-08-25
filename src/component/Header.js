

function Header(){
    return(
        <div className="container mx-auto border-b-2 bg-gray-50">
            <div className=" w-10/12 grid grid-cols-2 gap-3 py-5 mx-auto">
                <div className="col-span-1 flex content-center p-2">
                    <a className="" href="/home"><h1>Estatery</h1></a>
                    <ul className="flex gap-2 ml-2">
                        <a href="/home"><li>Rent</li></a>
                        <a href="/home"><li>Buy</li></a>
                        <a href="/home"><li>Sell</li></a>
                        <a href="/home"><li>Manage Property</li></a>
                        <a href="/home"><li>Resources</li></a>
                    </ul>
                </div>
                <div className="col-span-1 flex justify-end gap-2 border-red-800">
                    <button className="border-2 border-blue-400 rounded p-2">Login</button>
                    <button className="border-2 border-blue-400 rounded p-2">Singn up</button>
                </div>
            </div>
        </div>
    )
}

export default Header;