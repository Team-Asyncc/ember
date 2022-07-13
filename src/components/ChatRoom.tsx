import {
  addDoc,
  collection,
  CollectionReference,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { db } from '../firebase';
import ChatMessage from './ChatMessage';

function ChatRoom() {
  const messagesRef = collection(db, 'messages') as CollectionReference<{
    body: string;
    createdAt: Date;
    userName: string;
  }>;
  const q = query(messagesRef, orderBy('createdAt', 'desc'), limit(25));
  const [messages] = useCollectionData(q);
  const [userInput, setUserInput] = useState('');
  const [userName, setUserName] = useState('');
  const [finalUserName, setFinalUserName] = useState('');

  const sendMessage = async (e: any) => {
    e.preventDefault();

    await addDoc(messagesRef, {
      body: userInput,
      userName: finalUserName,
      createdAt: serverTimestamp(),
    });

    setUserInput('');
  };

  return (
    <section className="mx-auto flex w-full max-w-xl flex-1 flex-col rounded-md bg-pink-600/40">
      <div className="scroll max-h-[70vh] w-full flex-1 overflow-y-auto px-4 pt-4">
        {messages &&
          messages
            .slice(0)
            .reverse()
            .map((msg, idx) => <ChatMessage key={idx} message={msg} />)}
      </div>

      <div>
        {finalUserName ? (
          <form onSubmit={sendMessage} className="flex flex-row px-3">
            <input
              value={userInput}
              className="mr-2 flex-1 rounded-md border-2 border-blue-500 px-2 outline-none transition-all focus:border-blue-700"
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="say something nice"
              autoComplete="off"
            />
            <button
              type="submit"
              className="rounded-md bg-orange-500 px-2 text-sm"
              disabled={!userInput}>
              Send 🔥
            </button>
          </form>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setFinalUserName(userName);
              setUserName('');
            }}
            className="flex flex-col border-2 border-blue-400">
            <label htmlFor="userName">Enter your name</label>
            <input
              name="userName"
              id="userName"
              value={userName}
              className="mr-2 flex-1 rounded-md border-2 border-blue-500 px-2 outline-none transition-all focus:border-blue-700"
              onChange={(e) => setUserName(e.target.value)}
              autoComplete="off"
              placeholder="username"
            />
            <button
              type="submit"
              className="rounded-md bg-orange-500 px-2 text-sm"
              disabled={!userName}>
              OK 🔥
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ChatRoom;
