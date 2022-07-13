import ChatRoom from './components/ChatRoom';
import Navbar from './Navbar';

function App() {
  return (
    <div className="flex h-screen w-screen flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-poppins ">
      <Navbar />
      <section className="my-4 mt-6 flex min-h-min w-full flex-1 flex-col px-4">
        <ChatRoom />
      </section>
    </div>
  );
}

export default App;
