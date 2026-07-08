/*
This form handle data using uncontrolled components.
*/

import { useRef } from "react"
import '../index.scss'
import { NavLink } from "react-router-dom";

function Login() {
    // Initialize form values
    const userName = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(userName.current?.value, password.current?.value);
    }
    return (
        <div className="flex justify-center items-center h-screen p-4 bg-gray-400">
            <section className="bg-gray-800 managent-form w-full border-1.5 border-orange-500 border-solid py-10 px-6 sm:px-14">
                <nav className="flex justify-center items-center p-6">
                    <h2 className="text-4xl font-bold text-orange-500">LOGIN</h2>
                </nav>

                <form className="mt-4" onSubmit={handleSubmit}>
                    <label htmlFor="username" className="block text-sm/6 font-bold text-white">Username</label>
                    <div className="mt-1.5 mb-3">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            ref={userName}
                            className="block min-w-0 grow py-3 pr-3 pl-2 w-full bg-gray-600 text-white text-sm placeholder:text-gray-400 rounded focus:ring-0 focus:ring-offset-0"
                        />
                    </div>
                    <label htmlFor="password" className="block text-sm/6 font-bold text-white">Password</label>
                    <div className="mt-1.5 mb-3">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            ref={password}
                            className="block min-w-0 grow py-3 pr-3 pl-2 w-full bg-gray-600 text-white text-sm placeholder:text-gray-400 rounded focus:ring-0 focus:ring-offset-0"
                        />
                    </div>
                    <button type="submit" className="w-full mt-4 bg-orange-500 text-white py-2 px-4 rounded font-bold">
                        LOGIN
                    </button>
                    <p className="text-sm text-center sm:mt-2 mt-4 text-white">
                        Don't have an account? <NavLink to="/register" className="text-orange-500">Register</NavLink>
                    </p>
                </form>
            </section>
        </div>
    )
}

export default Login