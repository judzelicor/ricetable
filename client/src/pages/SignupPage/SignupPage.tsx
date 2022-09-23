import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    useDocumentTitle
} from "../../hooks";
import "./SignupPage.css";

const INITIAL_STATE = {
    profileName: '',
    email: '',
    confirmEmail: '',
    password: '',
}

function SignupPage(): JSX.Element {
    const [user, setUser] = useState(INITIAL_STATE);

    // Change document title upon rendering the page
    useDocumentTitle("Sign up | Ricetable")

    const handleSubmit = (event: React.SyntheticEvent): void => {
        event.preventDefault();

        console.log(event.target)
    }

    const handleChange = (event: React.BaseSyntheticEvent): void => {
        const property = event.target.name;

        if (
            user.email === ""
        ) {
            return;    
        }

        setUser({ 
            ...user, 
            [property]: event.target.value 
        })
    }

    console.log(user)

    return (
        <>
            <div className="container__jH7i">
                <div className="homeButton__jH7i">
                    <div className="homeButtonIcon__jH7i">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.753 55.753">
                            <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
                        </svg>
                    </div>
                    <div className="text-sm font-[500]">
                        <Link to={"/"}>Home</Link>
                    </div>
                </div>
                <div className="signupPageColumn__jH7i">
                    <div className="signupLeftColumn__jH7i">
                        <div className="w-[500px] p-[25px]">
                            <div className="mb-7">
                                <img src={"/assets/ricetable-logo.svg"} />
                            </div>
                            <form className="mb-7" onSubmit={handleSubmit}>
                                <div className="formGroup">
                                    <div className="mb-2 text-sm font-bold">
                                        <label htmlFor={"profileName"}>How should we call you?</label>
                                    </div>
                                    <input 
                                        onChange={ handleChange } 
                                        id={"profileName"}
                                        name={"profileName"}
                                        className={"formGenericInput__jH7i"} 
                                        type={"text"} 
                                        placeholder={"Enter a profile name"}
                                        value={ user.profileName }
                                    />
                                </div>
                                <div className="formGroup">
                                    <div className="mb-2 text-sm font-bold">
                                        <label htmlFor={"emailAddress"}>What's your email address?</label>
                                    </div>
                                    <input 
                                        onChange={ handleChange } 
                                        id={"emailAddress"}
                                        name={"email"}
                                        className={"formGenericInput__jH7i"} 
                                        type={"email"} 
                                        placeholder={"Enter a your email address"} 
                                        value={user.email}
                                    />
                                </div>
                                <div className="formGroup">
                                    <div className="mb-2 text-sm font-bold">
                                        <label htmlFor={"confirmEmail"}>Confirm your email address</label>
                                    </div>
                                    <input 
                                        onChange={ handleChange } 
                                        id={"confirmEmail"}
                                        className={"formGenericInput__jH7i"} 
                                        type={"email"} 
                                        placeholder={"Enter your email address again"} 
                                    />
                                </div>
                                <div className="formGroup">
                                    <div className="mb-2 text-sm font-bold">
                                        <label htmlFor={"password"}>Secure your account.</label>
                                    </div>
                                    <input 
                                        onChange={ handleChange } 
                                        id={"password"} 
                                        name={"password"}
                                        className={"formGenericInput__jH7i"} 
                                        type={"password"}
                                        placeholder={"Enter a secure password"}
                                        value={user.password}
                                    />
                                </div>
                                <div>
                                    <button className="signupFormButton__jH7i">Sign up</button>
                                </div>
                            </form>
                            <div>
                                <p className="text-sm">Already a member? <Link to={ "/login" }><span className="underline">Log in</span></Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="signupPageRightColumn__jH7i">
                        <div className="p-7">
                            <h1 className="rightColumnTitle__jH7i">Take The Initiative and <br /> Shape Your Dream.</h1>
                            <p>Sign up for a free account and start tracking your job applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupPage;