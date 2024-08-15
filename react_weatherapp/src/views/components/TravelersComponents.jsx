import React from "react";
import PropTypes from 'prop-types';

const TravelersComponents = ({traveler}) => {
    console.log(traveler)
    return (
        <React.Fragment>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://res-2.cloudinary.com/jnto/image/upload/w_750,h_1100,c_fill,f_auto,fl_lossy,q_auto/v1514183578/niigata/Niigata1821_7)",
                }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 sm:text-md lg:text-2xl font-bold text-center">DISCOVER JAPAN</h1>
                    <p className="mb-5 sm:text-2xl lg:text-5xl font-bold text-center">
                        DESTINATIONS
                    </p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="container flex flex-col items-center mx-auto pb-5 mt-5">
                    <div className="flex items-center flex-col">
                        <div><p className="font-medium text-2xl">Country of Japan</p></div>
                        <div><p className="font-medium mt-2">Destinations</p></div>
                    </div>
                        {traveler.travel == undefined ?
                        <><p className="text-center text-l lg:text-2xl mt-5">Loading...</p></> 
                        : 
                        <>
                            <div className="grid gap-y-4 gap-x-4 grid-cols-1 lg:grid-cols-3 mt-5">
                                {traveler.travel.features?.map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-96 h-full p-4 rounded-[5px] shadow-lg bg-white border">
                                            <p className="font-medium text-lg text-center mb-3">{item.properties.formatted}</p>            
                                            <p className="font-medium text-md">Category: {item.properties.category}</p>            
                                            <p className="font-medium text-md">County: {item.properties.county}</p>            
                                        </div>
                                    </div>
                                ))}
                            </div>          
                        </>
                        }
                        
                </div>
            </div>
        </React.Fragment>
    )
}

TravelersComponents.propTypes = {
    traveler: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default TravelersComponents;