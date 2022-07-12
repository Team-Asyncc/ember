import { useAuthState } from 'react-firebase-hooks/auth';

import ChatRoom, { SignIn } from './components/ChatRoom';
import { auth } from './Firebase';
import Navbar from './Navbar';
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <header>
        <h1>⚛️🔥💬</h1>
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>

      <Navbar />
    </div>
  );
}

export default App;
