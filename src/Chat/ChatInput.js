import React, { useState } from "react";
import "./ChatInput.css";
// import db from "../Firebase/firebase";
// import firebase from "firebase";
// import { useStateValue } from "../Utility/StateProvider";

function ChatInput() {


  return (
    <div className="chatInput">
      <form>
        <input/>
        <button type="submit" >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;