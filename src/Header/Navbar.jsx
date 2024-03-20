import { Link,NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between p-10 bg-slate-800 text-white ">
            <div>
                <h1>LOGO</h1>
            </div>
            <div className="px-10 flex gap-4 nav-bar">
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
            </div>
        </div>
    )
}
export default Navbar;