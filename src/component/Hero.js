import { useState,useEffect } from "react";
import rowData from "./data/listingsData"

function Hero(){
    const [data, setData] = useState([]);
    const [location, setLocation] = useState('');
    const [prices, setPrice] = useState(0);
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    let price = rowData.map((ele) => ele.price);
    let PropertyType = rowData.map((ele) => ele.houseType)
    useEffect(()=>{
        filterData();
    },[location,prices,type,date]);
    let filterData = () => {
        let data = [];
        if(location){
            data = rowData.filter((ele,i) => {
                return ele.state === location.toUpperCase();
            })
        }
        if(prices){
            data = rowData.filter((ele,i) => {
                return ele.price === Number(prices);
            })
        }
        if(type){
            data = rowData.filter((ele,i) => {
                return ele.houseType === type;
            })
        }
        if(date){
            data = rowData.filter((ele,i) => {
                return ele.date === date;
            })
        }
        if(location && prices){
            data = rowData.filter((ele,i)=>{
                return ele.state.includes(location.toUpperCase()) && ele.price === Number(prices);
            })
        }
        if(location && type){
            data = rowData.filter((ele,i)=>{
                return ele.state.includes(location.toUpperCase()) && ele.houseType.includes(type);
            })
        }
        if(location && date){
            data = rowData.filter((ele,i)=>{
                return ele.state.includes(location.toUpperCase()) && ele.date === date;
            })
        }
        if(location && prices && type){
            data = rowData.filter((ele,i)=>{
                return ele.state.includes(location.toUpperCase()) && ele.price === Number(prices) && ele.houseType === type;
            })
        }
        if(location && type && date){
            data = rowData.filter((ele,i)=>{
                return ele.state.includes(location.toUpperCase()) && ele.houseType === type && ele.date === date;
            })
        }
        if(prices && type && date){
            data = rowData.filter((ele,i)=>{
                return ele.price === Number(prices) && ele.houseType === type && ele.date === date;
            })
        }
        if(prices && date){
            data = rowData.filter((ele,i) => {
                return ele.price === Number(prices) && ele.date === date;
            });
        }
        if(prices && type){
            data = rowData.filter((ele,i) => {
                return ele.price === Number(prices) && ele.houseType === type;
            });
        }
        if(date && type){
            data = rowData.filter((ele,i) => {
                return ele.date === date && ele.houseType === type;
            });
        }
        if(location && date && type && prices){
            data = rowData.filter((ele,i) => {
                return ele.date === date && ele.houseType === type && ele.state.includes(location.toUpperCase()) && ele.price === Number(prices)
            })
        }
        setData(data);
    }
    console.log(data);
    return(
        <section className="container w-10/12 mx-auto">
            <div className="my-10">
                <div className="flex justify-center mx-auto">
                    <div className="text-left w-1/2">
                        <h1 className="text-3xl">Search properties to rent</h1>
                    </div>
                    <div className="w-1/2">   
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="search" className="block p-4 pl-10 w-full text-sm text-black font-semibold bg-slate-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search" required=""/>
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex my-10 p-5 bg-gray-50 rounded shadow-lg">
                <input type="text" className="w-5/12 bg-gray-50 border border-gray-50 text-center" placeholder="Location" value={location} onChange={event => setLocation(event.target.value)}/>
                <input type="date" className="w-5/12 bg-gray-50  border-gray-900 text-center border-l-2" value={date} placeholder="When" onChange={event => setDate(event.target.value)} />
                <select defaultValue={'defult'} className="w-5/12 bg-gray-50  border-gray-900 text-center border-l-2 block w-full p-2.5" value={price} onChange={event => setPrice(event.target.value)} placeholder="Price">
                  <option value={'defult'}>Choose a Price</option>
                  {
                    price.map((ele,i) => (
                        <option key={i} value={ele}>{ele}</option>
                    ))
                  }
                </select>
                <select defaultValue={'default'} className="w-5/12 bg-gray-50 border-gray-900 text-center border-l-2 block w-full p-2.5" value={type} onChange={event => setType(event.target.value)} placeholder="Price">
                  <option value={'defult'} >Choose a Property Type</option>
                  {
                    PropertyType.map((ele,i) => (
                        <option key={i} value={ele}>{ele}</option>
                    ))
                  }
                </select>
                <div className="w-1/12 ml-10 text-center">
                    <button className="text-white bg-blue-700 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
               {
                    data.map((ele,i) => (
                        <div key={i} className="w-80 rounded overflow-hidden shadow-lg">
                            <img className="w-full h-30" src={ele.image} alt="homes"/>
                            <div className="px-6 py-4">
                              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                              <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                              </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        </div>
                    ))
               }
            </div>
        </section>
    )
}

export default Hero;