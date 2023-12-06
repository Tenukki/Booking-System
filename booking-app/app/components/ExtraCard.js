"use client"
import React, { useState } from 'react'
import classNames from 'classnames';

function ExtraCard({ title, type, set = false }) {
    const [selected, setSelected] = useState(set)
    const [amount, setAmount] = useState(0)

    const increase = () => {
        setAmount(amount + 1)
        setSelected(true)
    }

    const decrease = () => {
        if ((amount - 1) <= 0) {
            setSelected(false)
            setAmount(0)
            return
        }
        setAmount(amount - 1)
        setSelected(true)
    }

    const variationButton = () => {
        if (type == "default") {
            return (
                <div class="pt-0">
                    <h5 class="block font-sans m-4 text-xl text-center antialiased font-semibold leading-snug text-blue-gray-900">
                        asiakaspalvelu@perakarrysauna.fi
                    </h5>
                </div>
            )
        } else if (type == "count") {
            return (
                <div class="flex border-slate-800 cursor-pointer border-1 flex-row pt-6">
                    <div className='flex w-6/12 flex-row'>
                        <h5 class="block font-sans m-4 text-xl antialiased font-semibold leading-snug text-blue-gray-900">
                            19,90 €
                        </h5>
                    </div>
                    <div className='flex w-6/12 flex-row-reverse'>
                        <button
                            onClick={increase}
                            class="align-middle cursor-pointer select-none p-4 font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </button>
                        <h5 class="block font-sans m-4 text-xl antialiased font-semibold leading-snug text-blue-gray-900">
                            {amount}
                        </h5>
                        <button
                            onClick={decrease}
                            class="align-middle p-4 cursor-pointer select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg>

                        </button>
                    </div>
                </div>
            )
        } else if (type == "unit") {
            return (
                <div class="flex border-slate-800 border-1 flex-row pt-6">
                    <div className='flex w-6/12 flex-row'>
                        <h5 class="block font-sans m-4 text-xl antialiased font-semibold leading-snug text-blue-gray-900">
                            19,90 €
                        </h5>
                    </div>
                    <div className='flex w-6/12 items-center flex-row-reverse'>
                        <button
                            onClick={() => setSelected(!selected)}
                            className="align-middle h-12 w-36 cursor-pointer select-none pr-10 pl-10 font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button">
                            {selected ? "Poista" : "Valitse"}
                        </button>
                    </div>
                </div>
            )
        }

    }

    return (
        <div id="card" class={classNames("md:mr-6 p-6 flex flex-col border-4 max-w-lg w-full  mt-8 md:mt-6 text-gray-700 bg-white shadow-md rounded-xl", {
            "border-4": selected,
            "border-slate-800": selected
        })}>
            <div className='flex flex-row'>
                <div>
                    <img
                        style={{ width: "150px", borderRadius: 100 }}
                        src="https://www.perakarrysauna.fi/wp-content/uploads/2023/06/pk-promo-13500px.png"
                        alt="card-image" />
                </div>
                <div class="pl-6">
                    <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-inherit">
                        {title}
                    </h4>

                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        - 8 henkilö sauna
                    </p>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        - Akku ja aurinkopaneeli valaistus
                    </p>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        - Puukiuas
                    </p>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        - 750 kg
                    </p>
                </div>
            </div>
            {variationButton()}

        </div>
    )
}

export default ExtraCard