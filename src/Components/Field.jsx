import React from 'react';


const Field = (props) => {

    return (
        <>
            <div className="mb-5 border-b">

                <input
                    type={props.type}
                    autoComplete="text"
                    onChange={(e) => props.setFunction(
                        e.target.value
                    )}
                    value={props.value}
                    required
                    className="appearance-none bg-transparent relative block w-full px-3 py-2  placeholder-yellow-200 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={props.PH}
                />
            </div>
        </>
    )
}

export { Field }