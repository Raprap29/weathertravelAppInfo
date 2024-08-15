import { useEffect, useState } from "react"

export const NavBar = () => {
    
    const [date, setDate] = useState(() => new Date().toLocaleString()); // The current Date

    useEffect(() => {
        const updateDate = () => {
            setDate(new Date().toLocaleString());
        }

        const intervalId = setInterval(updateDate, 1000); // Update date every second

        return () => clearInterval(intervalId); 
    }, []);

    return(
        <div className="z-[4] fixed w-full justify-between bg-gradient-to-b from-[#528ab4] to-blue-500 text-white shadow-lg">
            <div className="container flex items-center justify-between mx-auto">
                <div className="flex items-center navbar-start">
                    <a href="/" className="btn btn-ghost font-bold text-[14px]">Weather & Travel Japan</a>
                </div>
                <div className="pr-3">
                   <p className="text-[14px]">{date}</p>
                </div>
            </div>
        </div>
    )
}