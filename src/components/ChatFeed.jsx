import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
import { IsTyping } from 'react-chat-engine';
import { ScrollDownBar } from 'react-chat-engine';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  
 if(chat!= null){
  var test = chat.people.map((person, index) =>{
    return index
    });
  var online_nb = 0
   var online = chat.people.map((person) => {
    
      console.log(person.person.is_online)
      if (person.person.is_online === true){
        online_nb = online_nb+1;
      }
      console.log(online_nb)
      return online_nb
    });
 }
  
  const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage
              ? <MyMessage message={message} />
              : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
              
              }
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
          </div> 
        </div>
      );
    });
  };
  if (!chat) return <div />;

  return (
   <div className="chat-feed" style= { { backgroundColor: test.length === 3? '#0080ff' :  test.length ===2? '#AAAAAA' : '#FFFFFF' }}>
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
          {online_nb}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
      <IsTyping />
      <ScrollDownBar chat={chat} />
      <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;