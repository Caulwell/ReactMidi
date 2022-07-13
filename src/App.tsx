import React from 'react';

import Keyboard from './components/Keyboard/Keyboard';




function App() {
  return (
    <div className="App" 
        style={{
          display: "flex", 
          width: "100vw", 
          height: "100vh", 
          justifyContent: "center", 
          alignItems: "flex-end", 
          backgroundColor: "#111",
          paddingBottom: "3rem"
          }}>
      <Keyboard/>
    </div>
  );
}

export default App;
