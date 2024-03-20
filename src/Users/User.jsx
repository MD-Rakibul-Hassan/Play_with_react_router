import { Link } from "react-router-dom";


const User = ({ user }) => {
    const { name, phone, address,id } = user;
    
    return (
        <div className="bg-slate-800 m-5 p-10 rounded-xl text-white">
            <h1 >Name : {name}</h1>
            <p className="my-3">Phone : {phone}</p>
            <Link to={`/user/${id}`} className="bg-amber-300 px-4 py-2 rounded-xl ">Show Details</Link>
        </div>
    )
}
export default User;