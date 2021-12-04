import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
import { IsTyping } from 'react-chat-engine';
import { ScrollDownBar } from 'react-chat-engine';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];
  console.log(props)

  console.log(chat)
  
 if(chat!= null){
  var test = chat.people.map((person, index) =>{
    return index
    });
  var online_nb = 0
   var online = chat.people.map((person) => {
    
      if (person.person.is_online === true){
        online_nb = online_nb+1;
      }
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
<img style={{objectPosition: "10px"}} id="object-position-1" src="https://mdn.mozillademos.org/files/12668/MDN.svg" alt="MDN Logo" />


  return (
   <div className="chat-feed" style={{  borderColor: test.length === online_nb? '#A7DF73' : null, borderStyle : 'solid' }}>
     
      <div className="chat-title-container"style= { { backgroundColor: test.length === 4?'#008FFF' : test.length ===3? '#3CA3F3' :  test.length ===2? '#7DC4FB' : '#C8DDED' }}>
      <progress id="file" value={online_nb} max={test.length}> online_nb/test.length % </progress>
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle" >
          {chat.people.map((person) => ` ${person.person.username}`)}
          {online_nb}
          {test.length}
        </div>
        <div className="chat-call-buttons">
          <button class="ce-call-button" type="button"><img class="ce-call-icon" alt="Call" src="call-icon.png"></img></button>
          <button class="ce-call-button" type="button"><img class="ce-call-icon" alt="Video" src="video-icon.png"></img></button>
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
      <IsTyping />
      <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;