import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1 className="text-3xl text-center font-bold pt-4">404: Not Found</h1>
            <Link to="/dictionary">Search another word</Link>
        </div>
    );
}