import React, { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [messageList, setMessageList] = useState([]);
  const [usernames,setusernames]=useState('')
  return (
    <ChatContext.Provider
      value={{
        messageList, 
        setMessageList,
        usernames,
        setusernames
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;