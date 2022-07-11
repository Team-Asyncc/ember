import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import ChatRoom, { SignIn } from './components/ChatRoom';
import { auth } from './Firebase';
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
