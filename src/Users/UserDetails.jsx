import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const details = useLoaderData()
    const { id, name, username, email, address,phone } = details;
    const { street } = address;
    const navigate = useNavigate()
    const handleGoBack = () => {
      return   navigate('/users')
    }
    return (
        <div className="flex h-screen w-full  justify-center items-center ">
            <div className="bg-slate-600 p-20 rounded-lg">
                <h1 className="text-5xl my-3">Name : {name}</h1>
                <h2 className="text-2xl my-3">User Name : {username}</h2>
                <p>Email : {email}</p>
                <div>
                    <h4>Address : </h4>
                    <p>Street : {street}</p>
                    <p>Phone : {phone}</p>
                    <div className="my-3">
                        {/* <Link to={"/"} className="bg-green-700 px-4 py-2 rounded-xl">Go Home </Link> */}
                        <button onClick={handleGoBack}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserDetails;