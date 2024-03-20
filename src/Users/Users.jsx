import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                {
                    users.map(user => <User key={user.id} user={user} />)
                }
            </div>
        </div>
    )
}
export default Users;