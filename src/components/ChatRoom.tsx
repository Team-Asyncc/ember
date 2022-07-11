import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
  addDoc,
  collection,
  getFirestore,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { auth } from '../Firebase';
import ChatMessage from './ChatMessage';

function ChatRoom() {
  const db = getFirestore();

  const messageInput = useRef();
  const messagesRef = collection(db, 'messages');
  const q = query(messagesRef, orderBy('createdAt', 'desc'), limit(25));
  const [messages] = useCollectionData(q);
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e: any) => {
    e.preventDefault();

    // const user = auth.currentUser;

    // if (user) {
    //   const { uid, photoURL } = user;

    await addDoc(messagesRef, {
      // uid,
      // photoURL,
      messages: formValue,
      createdAt: serverTimestamp(),
    });

    // messageInput.current.focus();
    setFormValue('');
    // }
  };

  return (
    <>
      <main>
        {messages &&
          messages
            .slice(0)
            .reverse()
            .map((msg, idx) => <ChatMessage key={idx} message={msg} />)}
      </main>
      <form onSubmit={sendMessage}>
        {' '}
        <input
          // ref={messageInput}
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />
        <button type="submit" disabled={!formValue}>
          Send🕊️
        </button>
      </form>
    </>
  );
}

export default ChatRoom;

export function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  );
}
