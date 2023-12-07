import React from 'react'

function TopBar() {
    return (
        <nav
            className="block w-full px-4 py-2 bg-white border shadow-md border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
            <div className="flex flex-row justify-between items-center mx-auto text-blue-gray-900">
                <h5 className="block font-sans m-2 text-xl text-center antialiased font-semibold leading-snug text-blue-gray-900">
                    Tuotteet
                </h5>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </div>
        </nav>
    )
}

export default TopBar