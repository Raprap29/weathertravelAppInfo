import React, {useEffect, useState} from "react";
import TravelersComponents from "./components/TravelersComponents";
import axiosClient from "../AxiosClient";
import { useParams } from 'react-router-dom';
const TravelersPage = () => {
    const { city } = useParams();
    const [loading, setLoading] = useState(false);
    const [travelData, setTravelData] = useState([]);
    
    useEffect(() => {
        setLoading(true);
        axiosClient.get(`/travel/${city}`).then(({data}) => {
            setLoading(false);
            setTravelData(data);
        }).catch(err => {
            const response = err.response;

            if(response && response.status === 422){
                console.log(response.data.errors);
            }
            setLoading(false);
        });

        document.title = "Travel Page";
    })

    return(
        <React.Fragment>
            <div className="">
                <TravelersComponents loading={loading} traveler={travelData} />
                <div className="w-full bg-gradient-to-b from-[#528ab4] to-blue-500 text-white mt-4 p-4 text-center">
                    © 2024 Copyright: <a href="/" className="hover:underline font-medium">Weather Travel Japan</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TravelersPage;