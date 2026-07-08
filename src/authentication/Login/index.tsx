/*
This form handle data using uncontrolled components.
*/

import { useRef } from "react";

function Login() {
    // Initialize form values
    const userName = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(userName.current?.value, password.current?.value);
    }
    return (
        <div>
            <section className="w-300 md:w-full">
                <nav>
                    <img src="" alt="" />
                    <h2>Login</h2>
                </nav>

                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" ref={userName} />
                    <input type="password" name="password" placeholder="Password" ref={password} />
                    <button type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}

export default Login