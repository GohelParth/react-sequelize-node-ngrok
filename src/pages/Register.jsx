import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Field } from '../Components/Field';
import { Link } from 'react-router-dom';

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
            const { data } = await axios.post("https://a-react-backend-api-1.herokuapp.com/base/api/insert", params)

            console.log("data : ", data.status);

            if (data.status === 200) {
                toast.success(data.message)
            }
        } catch (error) {
            if (error.response.data.status === 400) {
                toast.error(error.response.data.message)
            }
            console.log(error.response.data.message);
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 bg-black bg-cover">
                <div className="">

                    <div className="min-h-screen flex items-center justify-center py-12 px-4 mt-5 sm:px-6 lg:px-8">
                        <div className=" max-w-md w-full space-y-7 -mt-24">
                            <div>
                                <img
                                    className="mx-auto h-12 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt="Workflow"
                                />
                                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Signup for new account</h2>

                            </div>
                            <form onSubmit={submit} className="mt-8 space-y-6" method="POST">

                                <div className="rounded-md shadow-sm">

                                    <Field type={"text"} setFunction={setFullName} value={fullName} PH={"Username"} />

                                    <Field type={"email"} setFunction={setEmail} value={email} PH={"email"} />

                                    <Field type={"integer"} setFunction={setContact} value={contact} PH={"contact"} />

                                    <Field type={"password"} setFunction={setPassword} value={password} PH={"password"} />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Signup
                                    </button>
                                </div>
                                <p className="text-white mt-5 font-bold">Already have an account ? <Link className="text-blue-500" to="/login">Login</Link></p>
                                <p className="text-white font-bold">Back to home ? <Link className="text-blue-500" to="/">Click here</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 bg-bckfood bg-cover">
                    <div className="animate-bounce font-serif text-4xl mt-96 font-bold text-center ">
                        <p className="text-red-500">Hey! Register</p>
                        <p className="mt-3 text-gray-800">Welcome to our site!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;

