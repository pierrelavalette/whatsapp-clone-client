import React from "react";
import ChatsListScreen from "./component/ChatsListScreen";
import {
  BrowserRouter,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import ChatRoomScreen from "./component/ChatRoomScreen";
import AnimatedSwitch from "./component/AnimatedSwitch";

const App: React.FC = () => (
  <BrowserRouter>
    <AnimatedSwitch>
      <Route exact path="/chats" component={ChatsListScreen} />
      <Route
        exact
        path="/chats/:chatId"
        component={({ match, history }: RouteComponentProps<{ chatId: string }>) => (
          <ChatRoomScreen chatId={match.params.chatId} history={history} />
        )}
      />
    </AnimatedSwitch>
    <Route exact path="/" render={redirectToChats} />
  </BrowserRouter>
);

const redirectToChats = () => <Redirect to="/chats" />;

export default App;
