import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <Outlet />
            </div>
        </div>
    )
}
export default App;