"use client"
import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import { useRouter,usePathname } from 'next/navigation'

const Navbar = () => {
    const urls = ["/", "/extra","/form", "/summary"]
    const [route, setRoute] = useState(0)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const index = urls.indexOf(pathname)
        setRoute(index)
    }, [])
    

    const next = () => {
        if (route < urls.length - 1) {
            const nextRoute = route + 1;
            setRoute(nextRoute);
            router.push(urls[nextRoute]);
        }
    };

    const previous = () => {
        if (route > 0) {
            const prevRoute = route - 1;
            setRoute(prevRoute);
            router.push(urls[prevRoute]);
        }
    };

    return (
        <div className='flex w-full flex-row fixed bottom-0'>
            {route != 0 && <div onClick={previous} className='flex-row cursor-pointer flex-1 p-4 bg-slate-200 hover:bg-slate-300 text-center font-semibold'>
                {route != 0 ? "Takaisin" : ""}
            </div>}
            <div onClick={next} className='flex-row flex-1 p-4 cursor-pointer bg-gray-900 text-white hover:bg-gray-700 text-center font-semibold' >
                Seuraava
            </div>
        </div>
    )
}

export default Navbar