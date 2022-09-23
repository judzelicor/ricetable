import {
    useDocumentTitle
} from "../../hooks";

function LoginPage(): JSX.Element {
    useDocumentTitle("Log in | Ricetable")

    return (
        <>
            <div>This is the login page.</div>
        </>
    )
}

export default LoginPage;