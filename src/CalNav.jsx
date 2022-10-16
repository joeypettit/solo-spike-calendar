import {useEffect, useState} from 'react';

function CalNav({displayDate, setDisplayDate}){

    const [thisMonth, setThisMonth] = useState('');
    const [thisYear, setThisYear] = useState('');

    // this array is used to assign the month name in displayMonthString
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
    
    
    
    function displayMonthYear(){
        let newMonth = new Date(displayDate);
        // getMonth() returns indexed month, use this to pull month name from monthNames
        let monthName = monthNames[newMonth.getMonth()];
        setThisMonth(monthName);

        //
        let newYear = new Date(displayDate);
        setThisYear(newYear.getFullYear());

    }

    useEffect(()=>displayMonthYear());

    return(
        <div className="cal-nav-bar">
            {/* newDate grabs display date, which is set to a day in the middle of the month
            to avoid issues of grabbing the wrong month due to days that don't exist in each month */}
            <button className="back-btn" onClick={()=>{
                const newDate = new Date(displayDate);
                newDate.setMonth(newDate.getMonth()-1);
                setDisplayDate(newDate);
            }}>⬅️</button>

            <h1>{displayDate ? thisMonth + thisYear  : 'no month'}</h1>

            <button className="next-month-btn" onClick={()=>{
                const newDate = new Date(displayDate);
                newDate.setMonth(newDate.getMonth()+1);
                setDisplayDate(newDate);}}>➡️</button>
        </div>
    )

}

export default CalNav;