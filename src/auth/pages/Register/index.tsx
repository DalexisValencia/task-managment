/*
This form handle data using controlled components.
*/

import { useState } from "react";
import { NavLink } from "react-router-dom";

function Register() {
    // First we initialize values
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex justify-center items-center p-4 bg-gray-400">
            <section className="my-4 bg-gray-800 managent-form w-full border-1.5 border-orange-500 border-solid py-10 px-6 sm:px-14">
                <nav className="flex justify-center items-center p-6">
                    <h2 className="text-4xl font-bold text-orange-500">REGISTER</h2>
                </nav>

                <form className="mt-4" onSubmit={handleSubmit}>
                    <label htmlFor="username" className="block text-sm/6 font-bold text-white">Username</label>
                    <div className="mt-1.5 mb-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block min-w-0 grow py-3 pr-3 pl-2 w-full bg-gray-600 text-white text-sm placeholder:text-gray-400 rounded focus:ring-0 focus:ring-offset-0"
                        />
                    </div>

                    <label htmlFor="lastname" className="block text-sm/6 font-bold text-white">Last Name</label>
                    <div className="mt-1.5 mb-3">
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            value={formData.lastname}
                            onChange={handleChange}
                            className="block min-w-0 grow py-3 pr-3 pl-2 w-full bg-gray-600 text-white text-sm placeholder:text-gray-400 rounded focus:ring-0 focus:ring-offset-0"
                        />
                    </div>

                    <label htmlFor="email" className="block text-sm/6 font-bold text-white">Email</label>
                    <div className="mt-1.5 mb-3">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block min-w-0 grow py-3 pr-3 pl-2 w-full bg-gray-600 text-white text-sm placeholder:text-gray-400 rounded focus:ring-0 focus:ring-offset-0"
                        />
                    </div>

                    <label htmlFor="phone" className="block text-sm/6 font-bold text-white">Phone</label>
                    <div className="mt-1.5 mb-3">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="block min-w-0 grow py-3 pr-3 pl-2 w-full bg-gray-600 text-white text-sm placeholder:text-gray-400 rounded focus:ring-0 focus:ring-offset-0"
                        />
                    </div>

                    <label htmlFor="password" className="block text-sm/6 font-bold text-white">Password</label>
                    <div className="mt-1.5 mb-3">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="block min-w-0 grow py-3 pr-3 pl-2 w-full bg-gray-600 text-white text-sm placeholder:text-gray-400 rounded focus:ring-0 focus:ring-offset-0"
                        />
                    </div>

                    <button type="submit" className="w-full mt-4 bg-orange-500 text-white py-2 px-4 rounded font-bold">
                        REGISTER
                    </button>

                    <p className="text-sm text-center sm:mt-2 mt-4 text-white">
                        Already have an account? <NavLink to="/login" className="text-orange-500">Login</NavLink>
                    </p>
                </form>
            </section>
        </div>
    )
}

export default Register;