import React from 'react';

function Summary() {
    return (
        <div className='flex flex-row justify-center flex-wrap-reverse'>
            <div className="relative flex flex-col text-gray-700 md:border-4 md:border-4 p-10 bg-transparent shadow-none rounded-xl bg-clip-border">
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Ostajan tiedot
                </h4>
                <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Tietoja käytetään toimituksen tekemiseen.
                </p>
                <div className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
                    <div className="flex flex-col gap-6 mb-1">
                        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            Ostaja
                        </h6>
                        <p className="relative h-11 w-full  min-w-[200px] p-3 rounded-md">
                            Esa Pekka Saari
                        </p>

                        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            Sähköposti
                        </h6>
                        <p className="relative h-11 w-full min-w-[200px] p-3 rounded-md">
                            esapekka@mail.com
                        </p>

                        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            Puhelinnumero
                        </h6>
                        <p className="relative  h-11 w-full min-w-[200px] p-3 rounded-md">
                            0045863374
                        </p>

                        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            Lisätiedot
                        </h6>
                        <p className="relative  h-20 w-full min-w-[200px] p-3 rounded-md">
                            
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative justify-between flex flex-col text-gray-700 md:border-4 p-10 bg-transparent shadow-none rounded-xl bg-clip-border">
                <div>
                    <h4 className="block font-sans text-2xl  antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Ostoskori
                    </h4>
                    <div className="max-w-screen-lg mt-3 w-80 sm:w-96">
                        <div className="flex flex-col bg-slate-100 gap-4 p-4  rounded-md">
                            <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                <span>1 x</span> 3 Päivää Peräkärrysauna
                            </h6>
                            <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                <span>1 x</span> Halkoja
                            </h6>
                            <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                <span>1 x</span> Kuljetus
                            </h6>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="block font-sans mt-5 text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Yhteenveto
                    </h4>
                    <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        
                    </p>
                    <div className="max-w-screen-lg mt-3 w-80 sm:w-96">
                        <div className="flex flex-col bg-slate-100 gap-4 p-4  rounded-md">
                            <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                Alv: 24%
                            </h6>
                            <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                Yhteensä: <span>300€</span>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Summary;
