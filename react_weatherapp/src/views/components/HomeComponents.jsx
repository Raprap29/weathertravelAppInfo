import PropTypes from 'prop-types';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { FaCloudSun, FaSun, FaSnowflake, FaCloudRain} from 'react-icons/fa';
import { convertDate, Sentence } from '../../library/components';
import LoadingSubmit from '../../components/Loading';


const HomeComponents = ({ handleSubmitForm, handleChangeEvent, weather, loading, weatherData, search }) => {
  // Icons
    const WeatherIcon = (weatherCondition) => {
        switch (weatherCondition) {
          case 'Rain':
            return <FaCloudRain size={40} />;
          case 'Clear':
            return <FaSun size={40} />;
          case 'Snow':
            return <FaSnowflake size={40} />;
          case 'Clouds':
            return <FaCloudSun size={40} />;
          default:
            return <FaSun size={40} />; // Default icon if no condition matches
        }
      };


    const WeatherMain = (weatherCondition) => {
        switch (weatherCondition) {
          case 'Rain':
            return <FaCloudRain size={80} />;
          case 'Clear':
            return <FaSun size={80} />;
          case 'Snow':
            return <FaSnowflake size={80} />;
          case 'Clouds':
            return <FaCloudSun size={80} />;
          default:
            return <FaSun size={80} />;
        }
      };


  return (
    <>
    {loading ? <LoadingSubmit /> : "" }
    <div
      className="hero min-h-screen pb-4"
      style={{
        backgroundImage: `url('https://get.wallhere.com/photo/Japan-street-snow-winter-rain-road-Tokyo-day-weather-urban-area-538861.jpg')`,
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="flex-col items-center">
        <div className="flex"> 
          <div className="mt-16 flex flex-col items-center">
            <div className="card px-5 pt-7 h-full pb-3 backdrop-blur-lg border border-[#6c6c6c] text-white shadow-lg w-full lg:w-72">
              <form onSubmit={handleSubmitForm} className="relative w-full">
                <input
                  onChange={handleChangeEvent}
                  name="search"
                  className="px-4 py-3 rounded-[10px] outline-none w-full bg-transparent border text-white pr-14 border-white placeholder:text-white placeholder:font-medium"
                  placeholder="Enter City of Japan..."
                  type="text"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 right-0 bg-transparent border-none cursor-pointer"
                >
                  <PiMagnifyingGlassBold size={30} />
                </button>
              </form>
                <div className="pb-2">
                    <div className="flex justify-center mt-5">
                        {weather.weather?.list.length <= 0 || weather.weather?.list == undefined ?
                        <></> : 
                        <>
                          {WeatherMain(weather.weather?.list[0].weather[0].main)}
                        </>}
                    </div>
                    {weather.weather?.list.length < 0 || weather.weather?.list === undefined ?
                        <></> : 
                        <>
                            <div>
                                <p className="text-white text-[40px] font-bold text-center">{weather.weather?.list[0].wind.deg} F° </p>
                            </div>
                            <div>
                                <p className="text-white text-[14px] font-bold text-center">{Sentence(weather.weather?.list[0].weather[0]?.main)}</p>
                            </div>
                            <div className='flex justify-center mt-5'><a href={`/travelers/${search}`} className='bg-blue-800 px-5 shadow-lg font-medium py-2 rounded-sm'>GO TO DESTINATION</a></div>
                        </>
                    }
                  
                </div>
            </div>
            <div className="grid gap-x-6 gap-y-3 mt-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
              {weather.weather?.list.length <= 0 || weather.weather?.list === undefined || search == "" ? 
              <>
                {weatherData?.map((cityWeather, cityIndex) => (
                    cityWeather.weather.list?.slice(0, 1).map((forecast, index) => (
                    <a href={`/travelers/${cityWeather.weather.city.name}`}
                        key={`${cityIndex}-${index}`}
                        className="px-3 transition duration-300 ease-in-out scale-100 hover:scale-105 backdrop-blur-lg border border-[#6c6c6c] text-white shadow-lg text"
                    >
                        <div className='text-center mt-3 font-bold'>{cityWeather.weather.city.name}, Japan</div>
                        <div className="p-5">
                        <div className="flex justify-center">
                            {WeatherIcon(forecast.weather[0].main)}
                        </div>
                        <div>
                            <p className="text-white text-[14px] font-bold text-center">
                            {Math.round(forecast.wind.deg)}° F
                            </p>
                        </div>
                        <div>
                            <p className="text-white text-[14px] font-bold text-center">
                            {forecast.weather[0].main}
                            </p>
                        </div>
                        <div className="mt-2">
                            <p className="text-white text-[14px] font-bold text-center">
                            {Sentence(forecast.weather[0].description)}
                            </p>
                        </div>
                        <div className="mt-2">
                            <p className="text-white text-[14px] font-bold text-center">
                            {convertDate(forecast.dt_txt)}
                            </p>
                        </div>
                        </div>
                    </a>
                    ))
                ))}
              </>
              : 
              <>
                {weather.weather?.list.slice(0,5).map((_, index) => (
                <div key={index} className="px-3 backdrop-blur-lg border border-[#6c6c6c] text-white shadow-lg text">
                  <div className="p-5">
                    <div className="flex justify-center">
                        {WeatherIcon(_.weather[0].main)}
                    </div>
                    <div><p className="text-white text-[14px] font-bold text-center">{_.wind.deg} F°</p></div>
                    <div><p className="text-white text-[14px] font-bold text-center">{_.weather[0].main}</p></div>
                    <div className="mt-2"><p className="text-white text-[14px] font-bold text-center">{Sentence(_.weather[0].description)}</p></div>
                    <div className="mt-2"><p className="text-white text-[14px] font-bold text-center">{convertDate(_.dt_txt)}</p></div>
                  </div>
                </div>
              ))}
              </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

// Prop types

HomeComponents.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
  handleChangeEvent: PropTypes.func.isRequired,
  weather: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  weatherData: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
};

export default HomeComponents;
