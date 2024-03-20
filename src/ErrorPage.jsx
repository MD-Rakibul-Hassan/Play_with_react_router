import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate("/home")
    }
    return (
        <div>
            <h1>Opps ! 404 not found  {error.data} {error.status} {error.statusText} </h1>
            <button onClick={handleGoHome} className="text-blue-500">Go to home </button>
        </div>
    )
}
export default ErrorPage;