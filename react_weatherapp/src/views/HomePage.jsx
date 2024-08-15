import React, {useEffect, useState} from "react";
import axiosClient from "../AxiosClient";
import HomeComponets from "./components/HomeComponents";
const HomePage = () => {

    const cities = [
        { name: 'Tokyo', id: 'tokyo' },
        { name: 'Yokohama', id: 'yokohama' },
        { name: 'Kyoto', id: 'kyoto' },
        { name: 'Osaka', id: 'osaka' },
        { name: 'Sapporo', id: 'sapporo' },
        { name: 'Nagoya', id: 'nagoya' }
      ];

    const [form, setForm] = useState({
        search : "",
    })

    const [weather, setWeather] = useState([]); // store the data
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChangeEvent = (e) => {
        setForm({...form, [e.target.name] : e.target.value })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setLoading(true);
        axiosClient.get(`/weather/${form.search}`).then(({data}) => {
            setWeather(data);
            setLoading(false);
        }).catch(err => {
            const response = err.response;

            if(response && response.status === 422){
                console.log(response.data.errors);
            }
            setLoading(false);
        });
    }

    useEffect(() => {
        
        const fetchWeatherForAllCities = async () => {
            try {
                setLoading(true); // Set loading state before fetching
                const weatherPromises = cities.map(city => axiosClient.get(`/weather/${city.name}`));
                const responses = await Promise.all(weatherPromises);
                const data = responses.map(response => response.data);
                setWeatherData(data);
            } catch (err) {
                console.log(err) 
            } finally {
                setLoading(false);
            }
        }
        fetchWeatherForAllCities();

        if(form.search == ""){
            setWeather([]);
        }

        document.title = "Weather App";
        
    }, [form]);

    useEffect(() => {
        // Disable scroll
        if(loading){
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = '';
        };
        
    }, [loading]);

    return(
        <React.Fragment>
            <HomeComponets weatherData={weatherData} search={form.search} loading={loading} weather={weather} handleChangeEvent={handleChangeEvent} handleSubmitForm={handleSubmitForm} />
        </React.Fragment>
    )
}

export default HomePage;