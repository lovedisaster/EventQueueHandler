import logo from './logo.svg';
import './App.css';
import { useState,useRef } from 'react';
import {EventQueueHandler} from './EventQueueHandler/EventQueueHandler';
function App() {
  const button1 = useRef(null);
  const button2 = useRef(null);
  const button3 = useRef(null);

  let [showIcon, setShowIcon] = useState(true);

  const eventList = [
    () => {button1.current.click()},
    () => {button2.current.click()},
    () => {button3.current.click()},
    () => setShowIcon(false)
  ]

  return (
    <div className="App">
      <header className="App-header">

         <div className="row">
          <input type="button" value="Start Event Queue" onClick={()=> {
            const eventQueueGenerator = EventQueueHandler(eventList);
            eventList.forEach(e => {
              eventQueueGenerator.next();
            })
          }}/>

        </div>
          <br/>
        <div className="row">
          <input type="button" ref={button1} value="button1" onClick={()=> {console.log("Button 1 clicked")}}/>
          <input type="button" ref={button2} value="button2" onClick={()=> {console.log("Button 2 clicked")}}/>
          <input type="button" ref={button3} value="button3" onClick={()=> {console.log("Button 3 clicked")}}/>
        </div>

        {showIcon && <img src={logo} className="App-logo" alt="logo" />}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
