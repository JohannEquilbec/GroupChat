import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
import { IsTyping,editMessage , sendMessage, deleteMessage } from 'react-chat-engine';

const ChatFeed = (props) => {
  var {creds, chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];
 //console.log(props)
 //console.log(chats)

 let root = document.documentElement;

 let root2 = document.documentElement;

 const handler = (event) => {
     if(event.key === '-'){
      console.log(event.key);
      aDown = true ;
     }
  };

  var aDown = false;

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
  
  root.addEventListener("mousemove", e => {
  //root.style.setProperty('--mouse-x', e.clientX - 480 + "px");
  //root.style.setProperty('--mouse-y', e.clientY + "px");
  //console.log(e.clientY, e.clientX);
  if (aDown === true){
  var text = "x : " + e.clientX + "/ y : " + e.clientY
  sendMessage(creds, chat.id, { text });
  aDown = false ;
  }
  });
 }

 const readReceipts = (message) => chat.people.map((person, index) =>
    {if (person.person.is_online === true && chat)
    {person.last_read = chat.last_message.id }
    return
    });
  
  const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        marginRight : isMyMessage ? '50px': '1px' ,  
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

  const startCall = () => {
    console.log("call");
  }

  const startVideoCall = () => {
    console.log("video");
  }


  var dateAjd = new Date();
  var dateMin = Number(dateAjd.getMinutes());
  var pingInfo;

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          {message.text.substring(0, 3) !== "x :" ? 
          <div className="message-block">
            {isMyMessage
              ? <MyMessage message={message} lastMessage={messages[lastMessageKey]} /> 
              : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
              }
              {//message.attachments.length > 0 ? <button onClick={() => handleClick(message)} type="button"> LIKE ! </button> : console.log ()
              }
          </div> :
          message.sender.username==="Johann" && Number(message.created.substring(14, 16)) === dateMin?
           [
            console.log( pingInfo = message.text.split('/')),
           // console.log(pingInfo),
            root.style.setProperty('--mouse-x', pingInfo[0].substring(3, 9) - 480 + "px"),
            root.style.setProperty('--mouse-y', pingInfo[1].substring(4, 8) + "px"),
            root.style.setProperty('--width1', 20 + "px"),
            root.style.setProperty('--height1', 20 + "px")
           ] 
           : message.sender.username==="Nicolas" && Number(message.created.substring(14, 16)) === dateMin? 
           [
            console.log(pingInfo = message.text.split('/')),
            root.style.setProperty('--mouse-x2', pingInfo[0].substring(3, 9) - 480  + "px"),
            root.style.setProperty('--mouse-y2', pingInfo[1].substring(4, 8)+ "px"),
            root.style.setProperty('--width2', 20 + "px"),
            root.style.setProperty('--height2', 20 + "px")
           ]
           : message.sender.username==="Camille" && Number(message.created.substring(14, 16)) === dateMin ?
           [
            console.log(pingInfo = message.text.split('/')),
            //console.log(pingInfo[0].substring(3, 9), pingInfo[1].substring(4, 8)),
            root.style.setProperty('--mouse-x3', pingInfo[0].substring(3, 9) - 480  + "px"),
            root.style.setProperty('--mouse-y3', pingInfo[1].substring(4, 8) + "px"),
            root.style.setProperty('--width3', 20 + "px"),
            root.style.setProperty('--height3', 20 + "px")
           ]
           : null//deleteMessage(props, chat.id, message.id) 
        }
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
   <div className="chat-feed" style={{  borderColor: test.length === online_nb? '#A7DF73' : null, borderStyle : 'solid', borderRadius: '30px' }} onKeyPress={(e) => handler(e)}>
  
     { //root.style.setProperty('--mouse-x', null),
       //root.style.setProperty('--mouse-y',null),
       root.style.setProperty('--width1' , 0 + "px"),
       root.style.setProperty('--height1', 0 + "px"),
       root.style.setProperty('--width2' , 0 + "px"),
       root.style.setProperty('--height2', 0 + "px"),
       root.style.setProperty('--width3' , 0 + "px"),
       root.style.setProperty('--height3', 0 + "px")}

      <div className="chat-title-container"style= { { backgroundColor: test.length === 4?'#008FFF' : test.length ===3? '#3CA3F3' :  test.length ===2? '#7DC4FB' : '#C8DDED' }}>
        <progress color="red" id="file" value={online_nb} max={test.length}> online_nb/test.length % </progress>
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
        <div className="chat-call-buttons">
          <button className="ce-call-button" type="button" onClick={() => startCall()}><img className="ce-call-icon" alt="Call" src="call-icon.png"></img></button>
          <button className="ce-call-button" type="button" onClick={() => startVideoCall()}><img className="ce-call-icon" alt="Video" src="video-icon.png"></img></button>
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
      <div class="mover "></div>
      <div class="mover2"></div>
      <div class="mover3"></div>
    </div>
  );
};

export default ChatFeed;

/*let call_buttons = ReactDOM.findDOMNode(document.getElementById('root')).getElementsByClassName('ce-call-button');/*document.querySelectorAll('.ce-call-button');
console.log(call_buttons);
call_buttons[0].onclick = function(){console.log("call");};
call_buttons[1].onclick = function(){console.log("video");};*/