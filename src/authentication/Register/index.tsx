/*
This form handle data using controlled components.
*/

import { useState } from "react";

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
        <div>
            <section className="w-300 md:w-full border-2 border-white border-dashed">
                <nav>
                    <img src="" alt="" />
                    <h2>Register</h2>
                </nav>

                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                    <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                    <button type="submit">Register</button>
                </form>
            </section>
        </div>
    )
}

export default Register;