import React from 'react'
import ExtraCard from './ExtraCard'

//rfce
function RentalPicker({title, children}) {
    return (
        <div className="p-3 md:p-8">
            <div id="item-picker-container" className='flex flex-row flex-wrap justify-center md:justify-normal'>
                {children}
            </div>
            <div className='mt-20'></div>
        </div>
    )
}

export default RentalPicker