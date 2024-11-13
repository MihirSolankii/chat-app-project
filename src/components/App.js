import Login from "./Login";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../components/context/ContactProvider";
import { ConversationProvider } from "./context/ConversationProvider";
import { SocketProvider } from "./context/SocketProvider";

function App() {
  const[id,setId]=useLocalStorage('id')
  const dashboard=(
    <SocketProvider id={id}>
<ContactsProvider>
  <ConversationProvider id={id}>
    <Dashboard id={id}/>
    </ConversationProvider>
    </ContactsProvider> 
    </SocketProvider>
  )
  return (
   
  id ?dashboard:<Login onSubmit={setId}/>

  );
}

export default App;
