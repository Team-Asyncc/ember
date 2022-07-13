import { getKeyword } from '../utils';

type PropTypes = {
  message: {
    body: string;
    createdAt: Date;
    userName: string;
  };
};

function ChatMessage(props: PropTypes) {
  const { body, userName } = props.message;

  return (
    <>
      <div>
        <div className="flex space-x-2 py-2">
          <img
            className="h-6 w-8"
            src={`https://avatars.dicebear.com/api/${getKeyword()}/cat.svg`}
            referrerPolicy="no-referrer"
          />
          <span className="text-red-600">{userName || 'noob'}</span>
        </div>
        <p>{body}</p>
      </div>
    </>
  );
}

export default ChatMessage;
