import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Register = () => {

    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [password, setPassword] = useState();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const params = {
                fullName, email, contact, password
            }
            console.log(params);
            const { data } = await axios.post("base/api/insert", params)

            console.log("data : ", data.status);

            if (data.status === 200) {
                toast.success(data.message)
            }
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <>
            <div className="flex ...">
                <div className="w-1/3 ... bg-gradient-to-r from-gray-800 to-gray-900 h-screen">
                    <h1 className="text-3xl mx-52 mt-48 font-bold antialiased text-white">Signup Here!</h1>

                    <div className="w-full max-w-xs mx-36 mt-9 ">
                        <form onSubmit={submit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    onChange={(e) => setFullName(
                                        e.target.value
                                    )}
                                    value={fullName}
                                    type="text"
                                    placeholder="Username" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    onChange={(e) => setEmail(
                                        e.target.value
                                    )}
                                    value={email}
                                    type="email"
                                    placeholder="email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Contact
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="integer"
                                    onChange={(e) => setContact(
                                        e.target.value
                                    )}
                                    value={contact}
                                    placeholder="Contact" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password"
                                    type="password"
                                    onChange={(e) => setPassword(
                                        e.target.value
                                    )}
                                    value={password}
                                    placeholder="******************" />
                                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    SignUp
                                </button>
                                <Link to="/" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                                    Forgot Password?
                                </Link>
                            </div>
                        </form>
                        <p className="text-center text-gray-500 text-xs">
                            &copy;2020 Acme Corp. All rights reserved.
                        </p>
                    </div>
                </div>
                <div className="w-2/3 bg-hero-pattern bg-cover">

                    <div className="animate-bounce font-serif text-4xl mt-96 font-bold text-center">
                        <p className="text-red-400">Hey! Register</p>
                        <p className="mt-3 text-yellow-400">Welcome to our site!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Register };

// Github link for landing page tailwind css
//https://github.com/cruip/tailwind-landing-page-template