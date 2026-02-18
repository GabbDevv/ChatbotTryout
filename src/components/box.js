import React,{ useState } from "react";

import Message from "./message";


function Box() {
  
  const [messageCount, setMessageCount] = useState(0);
  const [messageList, setMessageList] = useState([]);
  
  function incrementMessageCount() {
    setMessageCount(messageCount + 1);
  }
  function addMessage() {;
    setMessageList([...messageList, `Message ${messageCount}`]);
  }
  
  return (
    <div className="box">
        <h1>Box Component</h1>
        {messageList.map((message, index) => (
          <Message key={index} text={message} />
        ))}
        <a href="#" onClick={() => { incrementMessageCount(); addMessage(); }}>
          <h2>
            Send Message {messageCount}
          </h2>
          
        </a>
    </div>
    
  );
}

export default Box;