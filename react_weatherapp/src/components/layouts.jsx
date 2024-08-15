import { Outlet } from "react-router-dom"
import { NavBar } from "./Navbar";

const Layouts = () => {
    return(
        <div>
            <NavBar /> {/* Navbar function */}
            <main><Outlet /></main>
        </div>
    )
}

export default Layouts;