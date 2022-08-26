import { useState,useEffect } from "react";
import rowData from "./data/listingsData"
import Card from "./Card";

function Hero(){
    const [data, setData] = useState([]);
    const [location, setLocation] = useState('');
    const [prices, setPrice] = useState(0);
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    let price = rowData.map((ele) => ele.price);
    let priceOption = [...new Set(price)];
    let property = rowData.map((ele) => ele.houseType);
    let properteTypes = [...new Set(property)]
    useEffect(()=>{
        filterData();
    },[location,prices,type,date,name]);
    let filterData = () => {
        let data = rowData;
        if(location){
            data = rowData.filter(ele => {
                return ele.state.includes(location);
            })
        }
        if(prices){
            data = rowData.filter(ele => {
                return ele.price === Number(prices);
            })
        }
        if(type){
            data = rowData.filter(ele => {
                return ele.houseType === type;
            })
        }
        if(date){
            data = rowData.filter(ele => {
                return ele.date === date;
            })
        }
        if(name){
            data = rowData.filter(ele => {
                return ele.owner.toUpperCase().includes(name.toUpperCase());
            }) 
        }
        setData(data);
    }
    return(
        <section className="container lg:w-10/12 sm:w-1/2 mx-auto">
            <div className="my-10">
                <div className="lg:flex xl:flex md:flex-wrap sm:flex-wrap sm:text-center sm:justify-items-center mx-auto">
                    <div className="text-left lg:w-1/2 sm:w-full sm:mb-4 mx-auto">
                        <h1 className="text-grey-700 text-3xl font-semibold">Search properties to rent</h1>
                    </div>
                    <div className="lg:w-1/2 sm:w-full sm:mt-4 mx-auto">   
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="text" id="search" onChange={event => setName(event.target.value)} className="block p-4 pl-10 w-full text-sm text-black font-semibold bg-slate-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search By Name" required=""/>
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex xl:flex md:flex-wrap sm:flex-wrap mx-auto  my-10 p-5 bg-gray-50 items-center text-center rounded shadow-lg">
                <div className="lg:w-1/4 sm:9/12 sm:border-2 sm:my-2 sm:py-2 md:border-2 xl:border-0 lg:border-0 mx-auto">
                    <input type="text" className="text-gray-900 bg-gray-50 text-center font-medium " placeholder="Location" value={location} onChange={event => setLocation(event.target.value)}/>
                </div>
                <div className="lg:w-1/4 sm:9/12 sm:border-2 sm:my-2 sm:py-2 md:border-2 xl:border-0 lg:border-0">
                    <input type="date" className=" bg-gray-50 text-center font-medium" value={date} placeholder="When" onChange={event => setDate(event.target.value)} />
                </div>
                <div className="lg:w-1/4 sm:9/12 sm:border-2 sm:my-2 md:border-2 xl:border-0 lg:border-0">
                    <select defaultValue={'defult'} className=" bg-gray-50  border-gray-900 text-center block w-full p-2.5 font-medium" value={prices} onChange={event => setPrice(event.target.value)} placeholder="Price">
                    <option value={'defult'}>Choose a Price</option>
                    {
                        priceOption.map((ele,i) => (
                            <option key={i} value={ele}>{ele}</option>
                        ))
                    }
                    </select>
                </div>
                <div className="lg:w-1/4 sm:9/12 sm:border-2 sm:my-2 md:border-2 xl:border-0 lg:border-0">
                    <select defaultValue={'default'} className=" bg-gray-50 border-gray-900 text-center block w-full p-2.5 font-medium" onChange={event => setType(event.target.value)} placeholder="Price">
                    <option value={'defult'} >Choose a Property Type</option>
                    {
                        properteTypes.map((ele,i) => (
                            <option key={i} value={ele}>{ele}</option>
                        ))
                    }
                    </select>
                </div>
            </div>
            <Card data={data}/>
        </section>
    )
}

export default Hero;