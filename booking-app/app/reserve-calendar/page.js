"use client"
import React, { useState } from "react";
import Image from 'next/image'
import Navbar from '../components/Navbar'
import RentalPicker from '../components/RentalPicker'
import ExtraCard from '../components/ExtraCard'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

function ReserveCalendar() {
    const defaultFrom = {
        year: 2023,
        month: 12,
        day: 5,
    };
    const defaultTo = {
        year: 2023,
        month: 12,
        day: 12,
    };
    const defaultValue = {
        from: defaultFrom,
        to: defaultTo,
    };
    const [selectedDayRange, setSelectedDayRange] = useState(
        defaultValue
    );

    const myCustomLocale = {
        // months list by order
        months: [
            'Tammikuu',
            'Helmikuu',
            'Maaliskuu',
            'Huhtikuu',
            'Toukokuu',
            'Kesäkuu',
            'Heinäkuu',
            'Elokuu',
            'Syyskuu',
            'Lokakuu',
            'Marraskuu',
            'Joulukuu'
        ],

        weekDays: [
            {
                name: 'Maanantai',
                short: 'Ma',
            },
            {
                name: 'Tiistai',
                short: 'Ti',
            },
            {
                name: 'Keskiviikko',
                short: 'Ke',
            },
            {
                name: 'Torstai',
                short: 'To',
            },
            {
                name: 'Perjantai',
                short: 'Pe',
            },
            {
                name: 'Lauantai',
                short: 'La',
                isWeekend: true,
            },
            {
                name: 'Sunnuntai', // käytetään saavutettavuuden kannalta
                short: 'Su', // näytetään päivien rivien yläosassa
                isWeekend: true, // onko virallinen viikonloppu vai ei
            },
        ],

        // just play around with this number between 0 and 6
        weekStartingIndex: 6,

        // return a { year: number, month: number, day: number } object
        getToday(gregorainTodayObject) {
            return gregorainTodayObject;
        },

        // return a native JavaScript date here
        toNativeDate(date) {
            return new Date(date.year, date.month - 1, date.day);
        },

        // return a number for date's month length
        getMonthLength(date) {
            return new Date(date.year, date.month, 0).getDate();
        },

        // return a transformed digit to your locale
        transformDigit(digit) {
            return digit;
        },

        // texts in the date picker
        nextMonth: 'Next Month',
        previousMonth: 'Previous Month',
        openMonthSelector: 'Open Month Selector',
        openYearSelector: 'Open Year Selector',
        closeMonthSelector: 'Close Month Selector',
        closeYearSelector: 'Close Year Selector',
        defaultPlaceholder: 'Select...',

        // for input range value
        from: 'from',
        to: 'to',

        // used for input value when multi dates are selected
        digitSeparator: ',',

        // if your provide -2 for example, year will be shown as 1398
        yearOffset: 0,
    };

    const disabledDays = [
        {
            year: 2023,
            month: 12,
            day: 23,
        },
        {
            year: 2023,
            month: 12,
            day: 24,
        }, {
            year: 2023,
            month: 12,
            day: 25,
        }, {
            year: 2023,
            month: 12,
            day: 31,
        },
    ];

    return (
        <main className="flex min-h-screen mt-5 items-center flex-col">
            <h2 className="block m-2 text-center md:text-left antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-inherit">
                Valitse vuokrauksen kesto
            </h2>
            <div className="mt-10">
                <Calendar
                    value={selectedDayRange}
                    onChange={(e)=> {
                        console.log(e)
                        setSelectedDayRange({
                            ...e,
                            to: {
                                year: e.from.year,
                                month: e.from.month,
                                day: e.from.day +1,
                            }
                        })
                    }}
                    colorPrimary="black" // added this
                    colorPrimaryLight="white" // and this
                    locale={myCustomLocale}
                    disabledDays={disabledDays}
                />
            </div>
            <div>{console.log(selectedDayRange)}</div>
        </main>
    )
}

export default ReserveCalendar