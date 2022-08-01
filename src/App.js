import React from "react";
import "./App.css";
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import Login from "./Login/Login";
import { useStateValue } from "./Utility/StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome to #SLACK</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;