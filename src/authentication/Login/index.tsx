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
        <div className="flex justify-center items-center h-screen p-4">
            <section className="managent-form w-full border border-blue-500 border-dashed py-10 px-14">
                <nav className="flex justify-center items-center p-6">
                    <img src="" alt="" />
                    <h2 className="text-3xl font-bold">LOGIN</h2>
                </nav>

                <form className="mt-4" onSubmit={handleSubmit}>
                    <label htmlFor="username" className="block text-sm/6 font-bold">Username</label>
                    <div className="mt-1.5 mb-3">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            ref={userName}
                            className="block min-w-0 grow py-3 pr-3 pl-2 w-full bg-gray-600 text-white text-sm placeholder:text-gray-400 rounded focus:ring-0 focus:ring-offset-0"
                        />
                    </div>
                    <label htmlFor="password" className="block text-sm/6 font-bold">Password</label>
                    <div className="mt-1.5 mb-3">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            ref={password}
                            className="block min-w-0 grow py-3 pr-3 pl-2 w-full bg-gray-600 text-white text-sm placeholder:text-gray-400 rounded focus:ring-0 focus:ring-offset-0"
                        />
                    </div>
                    <button type="submit" className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                        LOGIN
                    </button>
                    <p className="text-sm mt-2 text-center mt-2">
                        Don't have an account? <NavLink to="/register" className="text-blue-500">Register</NavLink>
                    </p>
                </form>
            </section>
        </div>
    )
}

export default Login