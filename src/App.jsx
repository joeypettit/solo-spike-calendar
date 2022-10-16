import './App.css';
import {useState, useEffect} from 'react';
import CalNav from './CalNav';

function App() {

  //~~~~~~~~~~~~~~~ STATE AND VARIABLES~~~~~~~~~~~~~~~~~~~~
  // get today's date
  const todaysDate = new Date();
  console.log('todays date is', todaysDate);
  console.log('todays date getDate', todaysDate.getDate());

  // display date is used to change months, it is set to a date in the middle of the month
  // so that when it is used to increment the month, it is on a day that every month has (not the 31st for example)
  // displayDate and setDisplayDate is passed to CalNav as a prop
  const [displayDate, setDisplayDate] = useState(new Date());

  // array of all date objects in current month view => {date: ... , events: ... }
  const [allDates, setAllDates] = useState([]);

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



  // this function will get the first day the calendar should display for the displayed month, and
  // create an array of date objects for each day. (unless, sunday === the first day of month)
  function createCalendar(){
      // get the first day of displayed month
      const firstOfMonth = new Date(displayDate.getFullYear(), displayDate.getMonth(), 1);
      // get Sunday before the 1st of the month, (ex. for October 2022 => Sunday Sept 25)
      const SundayBeforeTheFirst = new Date(firstOfMonth.setDate(firstOfMonth.getDate() - (firstOfMonth.getDay())));

      // create array of date objects for each day of this months view (including full weeks on either side)
      const datesInView = [];
      for (let i = 0; i < (6 * 7); i++) {
        // conditional checks to see if last sunday in month view belongs to current month,
        // if it does not, then don't render first week of next month (with no dates from current month)
        if(SundayBeforeTheFirst.getDay()===0 
            && SundayBeforeTheFirst.getMonth() !== displayDate.getMonth() 
            && SundayBeforeTheFirst.getTime()>displayDate.getTime()){
              break;
            } else{
              const date = new Date(SundayBeforeTheFirst);
              datesInView.push({ date, events: 'add events here' });
              SundayBeforeTheFirst.setDate(SundayBeforeTheFirst.getDate() + 1);
            }
        
      }
      console.log('dates in view  array', datesInView);
      // set array to allDates in state
      setAllDates(datesInView);
      }
  


  useEffect(()=>createCalendar(),[ displayDate]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calendar Spike</h1>
      </header>
      <div id>
        <CalNav displayDate={displayDate} setDisplayDate={setDisplayDate}/>
        <div id="cal-holder">
          <div className='dayname'>Sunday</div>
          <div className='dayname'>Monday</div>
          <div className='dayname'>Tuesday</div>
          <div className='dayname'>Wednesday</div>
          <div className='dayname'>Thursday</div>
          <div className='dayname'>Friday</div>
          <div className='dayname'>Saturday</div>
          {allDates. map((date, index)=>{
            return(
              <div 
                key={index} 
                className={`cell-${date.date.getMonth()=== displayDate.getMonth() 
                            ?`thismonth`:`othermonth`}${
                              date.date.getDate() === todaysDate.getDate() && date.date.getMonth() === todaysDate.getMonth() && date.date.getFullYear() === todaysDate.getFullYear()? 
                              " currentday" : ""}`}
                >
                <div className="date">
                  {date.date.getDate()}
                </div>
                <div>
                  <p>{date.events}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      
    </div>
  );
}

export default App;
