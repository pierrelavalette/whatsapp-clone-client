import React from "react";
import ChatsListScreen from "./component/ChatsListScreen";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import ChatRoomScreen from './component/ChatRoomScreen';

const App: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/chats" component={ChatsListScreen} />
            <Route exact parth="/chats/:chatId" component={ChatRoomScreen} />
        </Switch>
        <Route exact path="/" render={redirectToChats} />
    </BrowserRouter>
);

const redirectToChats = () => <Redirect to="/chats" />;

export default App;
