import React, { useState } from 'react';
import { Field } from '../Components/Field';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const Home = () => {

    const [userName, setusername] = useState();
    const [password, setPassword] = useState();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const params = {
                userName, password
            }
            console.log(params);
            const { data } = await axios.post("https://a-react-backend-api-1.herokuapp.com/base/api/login", params)

            if (data.status === 200) {
                toast.success(data.message)
            }
        } catch (error) {
            if (error.response.data.status === 400) {
                toast.error(error.response.data.message)
            }
        }
    }


    return (
        <>
            <div className="grid grid-cols-6 gap-4 bg-black bg-cover ">
                <div className="col-start-2 col-span-4 ...">
                    <div className="min-h-screen flex items-center justify-center py-12 px-4 mt-4 sm:px-6 lg:px-8">
                        <div className=" max-w-md w-full space-y-7 -mt-24">
                            <div>
                                <img
                                    className="mx-auto h-12 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt="Workflow"
                                />
                                <h2 className="mt-6 text-center text-2xl font-extrabold text-blue-50">Login to your account</h2>

                            </div>
                            <form onSubmit={submit} className="mt-5 space-y-6" method="POST">

                                <div className="rounded-md shadow-sm">

                                    <Field type={"text"} setFunction={setusername} value={userName} PH={"username"} />

                                    <Field type={"password"} setFunction={setPassword} value={password} PH={"password"} />

                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Login
                                    </button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-sm">
                                        <p to="" className="font-bold text-white hover:text-yellow-200">
                                            Forgot your password ? <Link className="text-blue-500" to="#">Click here</Link>
                                        </p>
                                        <p className="text-white mt-5 text-center font-bold -ml-4">Don't have an acoount ? <Link className="text-blue-500" to="/signup">Signup</Link></p>
                                        <p className="text-white font-bold mt-5">Back to home ? <Link className="text-blue-500" to="/">Click here</Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;