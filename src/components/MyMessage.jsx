const MyMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  if (message.created.substring(8, 9)=== "0"){
    var dateMessage = Number(message.created.substring(9, 10));
  }
  else {
    dateMessage = Number(message.created.substring(8, 10));
  }
  var dateAjd = new Date();
  dateAjd = Number(dateAjd.getDate());
  
    if (message.attachments && message.attachments.length > 0) {
      return [
        <div>
        {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ float: 'right', marginRight: '18px', borderStyle : 'solid', borderRadius: '30px' , borderColor:  message.sender.username==="Johann"? 'red':
          message.sender.username==="Nicolas"? 'green': 
          message.sender.username==="Camille"? 'palevioletred' : null,
          backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />
      )}
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' , marginRight: isFirstMessageByUser? '1px' : '59px'}}
        />
        <p style={{ float: 'right', marginRight: '1px'}}>
         {dateMessage = dateAjd ? [Number(message.created.substring(10, 13) )+1,message.created.substring(13, 16) ]:dateMessage=message.created.substring(5, 10) }
        </p>
        </div>
      ]; 
    }
  
    return [
      <div>
        {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ float: 'right', marginRight: '18px', borderStyle : 'solid', borderRadius: '30px' , borderColor:  message.sender.username==="Johann"? 'red':
          message.sender.username==="Nicolas"? 'green': 
          message.sender.username==="Camille"? 'palevioletred' : null,
          backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />
      )}
      <div className="message" style={{ float: 'right', marginRight: isFirstMessageByUser? '1px' : '59px', color: 'white',
       backgroundColor: dateMessage === dateAjd ?'#004c6d' : dateMessage+1 === dateAjd ? '#4c7999' :  '#85aac8'}}>
        {message.text}
      </div>
      <p style={{ float: 'right', marginRight: '1px'}}>
        {dateMessage >= dateAjd ? [Number(message.created.substring(10, 13) )+1,message.created.substring(13, 16) ] :dateMessage=message.created.substring(5, 10) }
      </p>  
      </div> 
    ];
  };
  
  export default MyMessage;