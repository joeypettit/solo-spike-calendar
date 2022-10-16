import './App.css';

function App() {
 
  const todaysDate = new Date();  // get today's date
  console.log('todays date', todaysDate);
  const startingDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), 1) // get first of this month
  console.log('first of the month', startingDate);

  // create rest week before 1st (to Moday before), startingDate of October 2022 is Monday Sept 26
  startingDate.setDate(startingDate.getDate() - (startingDate.getDay() - 1))
  console.log('Monday before 1st of month', startingDate);

  // create array of date objects for each day of this months view
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
        <div id="cal-holder">
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

      </header>
    </div>
  );
}

export default App;
