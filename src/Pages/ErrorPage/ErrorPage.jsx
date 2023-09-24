import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
           <div className="text-center">
           <h3 className="text-5xl text-red-700 font-bold">Error Page!!</h3> 
           <h3 className="text-4xl font-bold">404</h3>
           <Link className="btn btn-primary" to='/'>Go Home</Link>
           </div>
        </div>
    );
};

export default ErrorPage;