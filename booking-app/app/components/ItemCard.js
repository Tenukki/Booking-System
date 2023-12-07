import React from 'react'

function ItemCard() {
    return (
        <div id="card" className="relative flex flex-col mt-12 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                    src="https://www.perakarrysauna.fi/wp-content/uploads/2023/06/pk-promo-13500px.png"
                    alt="card-image" />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Peräkärrysauna
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    - 8 henkilö sauna
                </p>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    - Akku ja aurinkopaneeli valaistus
                </p>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    - Puukiuas
                </p>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    - 750 kg
                </p>
            </div>
            <div className="p-6 pt-0">
                <button
                    className="align-middle w-full select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    Valitse
                </button>
            </div>
        </div>
    )
}

export default ItemCard