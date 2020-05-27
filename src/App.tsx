import React from "react";
import ChatsList from "./component/ChatsList";
import ChatsNavbar from "./component/ChatsNavbar";

const App: React.FC = () => (
  <div>
    <ChatsNavbar />
    <ChatsList />
  </div>
);

export default App;
