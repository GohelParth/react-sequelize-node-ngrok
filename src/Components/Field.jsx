import React from 'react';


const Field = (props) => {

    return (
        <>
            <div className="mb-5">

                <input
                    type={props.type}
                    autoComplete="text"
                    onChange={(e) => props.setFunction(
                        e.target.value
                    )}
                    value={props.value}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={props.PH}
                />
            </div>
        </>
    )
}

export { Field }