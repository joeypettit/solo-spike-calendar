import './App.css';
import {useState} from 'react';
import CalNav from './CalNav';

function App() {
  const todaysDate = new Date();  // get today's date
  console.log('todays date', todaysDate);

  // display date is used to change months, it is set to a date in the middle of the month
  // so that when it is used to increment the month, it is on a day that every month has (not the 31st)
  // displayDate and setDisplayDate is passed to CalNav as a prop
  const [displayDate, setDisplayDate] = useState(todaysDate.setDate(14));

  
  const startingDate = new Date(displayDate.getFullYear(), displayDate.getMonth(), 1) // get first of this month

  // set startingDate to the Monday before the 1st of the month, (ex. startingDate of October 2022 is Monday Sept 26)
  startingDate.setDate(startingDate.getDate() - (startingDate.getDay() - 1))
  console.log('Monday before 1st of month', startingDate);

  // create array of date objects for each day of this months view (including full weeks on either side)
  const dates = []
  for (let i = 0; i < (6 * 7); i++) {
      const date = new Date(startingDate)
      dates.push({ date, events: 'add events here' })
      startingDate.setDate(startingDate.getDate() + 1)
  }
  console.log('dates array', dates);


  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calendar Spike</h1>
      </header>
      <div id>
        <CalNav displayDate={displayDate} setDisplayDate={setDisplayDate}/>
        <div id="cal-holder">
          <div className='dayname'>Monday</div>
          <div className='dayname'>Tuesday</div>
          <div className='dayname'>Wednesday</div>
          <div className='dayname'>Thursday</div>
          <div className='dayname'>Friday</div>
          <div className='dayname'>Saturday</div>
          <div className='dayname'>Sunday</div>
          {dates.map((date, index)=>{
            return(
              <div 
                key={index} 
                className={`cell-${date.date.getMonth()===todaysDate.getMonth() 
                            ?`thismonth`:`othermonth`}${
                              date.date.getDate() == todaysDate.getDate() ? 
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
