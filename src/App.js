import React from "react";

import Sidebar from "Component/Sidebar";
import Chat from "Component/Chat";

import "assets/css/App.css";

function App() {
  return (
    <div className="app">
      <h1>Discord Clone</h1>
      <hr/>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
