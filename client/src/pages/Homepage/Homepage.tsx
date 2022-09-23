import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks";

function HomePage(): JSX.Element {
    useDocumentTitle("Ricetable | Job Application Manager");

    return (
        <>
            <div>
                This is the homepage
                <div>
                    <ul className="flex items-center gap-21">
                        <li>
                            <Link to={ "/login" }>Log in</Link>
                        </li>
                        <li>
                            <Link to={ "/signup" }>Sign up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HomePage;