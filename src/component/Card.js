

function Card(props){
    return(
        <div className="flex flex-wrap justify-center gap-6">
               {
                    props.data.length ? 
                        props.data.map((ele,i) => (
                            <div key={i} className="w-80 rounded overflow-hidden shadow-lg">
                                <img className="w-full h-36" src={ele.image} alt="homes"/>
                                <div className="px-6 py-4">
                                  <div className="font-bold text mb-2"><i class="fa-solid fa-dollar-sign text-blue-700 mr-1"></i>{ele.price}</div>  
                                  <div className="font-bold text-xl mb-2">{ele.owner}</div>
                                  <p className="text-gray-700 text-base"><i class="fa-solid fa-location-dot text-blue-700 mr-2"></i>{ele.address}</p>
                                </div>
                                <hr/>
                                <div className="px-6 pt-4 pb-2">
                                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><i className="fa-solid fa-bed text-blue-700 mr-3"></i> {ele.rooms}</span>
                                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><i class="fa-solid fa-bath text-blue-700 mr-3"></i> {ele.bath}</span>
                                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><i class="fa-solid fa-square text-blue-700 mr-3"></i> {ele.floorSpace}</span>
                                  {ele.two_car_garage ?<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><i class="fa-solid text-blue-700 fa-car"></i></span> : " "}
                                </div>
                            </div>
                        )) : <p className="text-red-500 font-bold text-2xl">Items Not Found </p>
               }
        </div>
    )
}

export default Card;