import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
import { IsTyping,editMessage, getMessages } from 'react-chat-engine';

const ChatFeed = (props) => {
  var { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];
 console.log(props)
 //console.log(chats)

 let root = document.documentElement;

root.addEventListener("mousemove", e => {
root.style.setProperty('--mouse-x', e.clientX - 480 + "px");
root.style.setProperty('--mouse-y', e.clientY + "px");
console.log(e.clientY, e.clientX);
});

 if(chat!= null){
  //setCurrentChat(activeChat);
  //setActiveChat(chat.id);
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
   getMessages(props, chat.id);    
   //console.log("message", messages);
   //console.log("apres" , props)
   
   // setActiveChat(chat.id);
 }
 console.log(online);

 const readReceipts = (message) => chat.people.map((person, index) =>
    {if (person.person.is_online === true && chat)
    {person.last_read = chat.last_message.id }
    return 0
    });
  
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

  
  const handleClick = (message) => {
    var text = 0;
    if (message.text === ""){
      text = 1;
    }
    else {
      text = Number(message.text) + 1;
    }
    editMessage(props, chat.id, message.id,  { text });
   // deleteMessage(props, chat.id, message.id);
   //window.location.reload(false);
  }

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
              {message.attachments.length > 0 ? <button onClick={() => handleClick(message)} type="button"> LIKE ! </button> : console.log ()}
              
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            {readReceipts(message)}
            {renderReadReceipts(message, isMyMessage)}
          </div> 
        </div>
      );
    });
  };
  if (!chat) return <div />;
<img style={{objectPosition: "10px"}} id="object-position-1" src="https://mdn.mozillademos.org/files/12668/MDN.svg" alt="MDN Logo" />


  return (
   <div className="chat-feed" style={{  borderColor: test.length === online_nb? '#A7DF73' : null, borderStyle : 'solid', borderRadius: '30px' }}>
      <div className="chat-title-container"style= { { backgroundColor: test.length === 4?'#008FFF' : test.length ===3? '#3CA3F3' :  test.length ===2? '#7DC4FB' : '#C8DDED' }}>
        <progress color="red" id="file" value={online_nb} max={test.length}> online_nb/test.length % </progress>
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
        <div className="chat-call-buttons">
          <button class="ce-call-button" type="button"><img class="ce-call-icon" alt="Call" src="call-icon.png"></img></button>
          <button class="ce-call-button" type="button"><img class="ce-call-icon" alt="Video" src="video-icon.png"></img></button>
        </div>
      </div>
      <div className="chat-messages-container">
        {renderMessages()}
      </div>
      <div style={{ height: '10px' }} />
      <div className="message-form-container">
      <IsTyping />
      <MessageForm {...props} chatId={activeChat} />
      </div>
      <div class="mover"></div>
    </div>
  );
};

export default ChatFeed;