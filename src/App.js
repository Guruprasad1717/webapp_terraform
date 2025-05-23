/*import Chatbot from "./Components/Chatbot";
import background from './background.jpg'; 
import './App.css';
function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${background})` , height:'100vh'}}>
      <Chatbot />
    </div>
  );
}
export default App;*/

import React from 'react';
import Chatbot from './Components/Chatbot';
import background from './background.jpg';
import './App.css';

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Chatbot />
    </div>
  );
}

export default App;



