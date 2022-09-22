import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <div>
                This is the homepage
                <Link to={ "/login" }>Log in</Link>
            </div>
        </>
    )
}

export default HomePage;