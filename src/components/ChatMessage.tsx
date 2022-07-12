import React from 'react';

import { auth } from '../Firebase';
function ChatMessage(props: any) {
  const { text, uid, photoURL } = props.message;
  const isCurrentUser = uid === auth.currentUser?.uid;
  const messageClass = isCurrentUser ? 'sent' : 'received';
  console.log(props);

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          className="h-6 w-8"
          src={photoURL || 'https://avatars.dicebear.com/api/male/cat.svg'}
          referrerPolicy="no-referrer"
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default ChatMessage;
