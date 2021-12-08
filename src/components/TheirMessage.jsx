const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    
  if (message.created.substring(8, 9)=== "0"){
    var dateMessage = Number(message.created.substring(9, 10));
  }
  else {
     dateMessage = Number(message.created.substring(8, 10));
  }
  var dateAjd = new Date();
  dateAjd = Number(dateAjd.getDate());

    return (
      <div className="message-row">
        {isFirstMessageByUser && (
          <div
            className="message-avatar"
            style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
          />
        )}
        {message.attachments && message.attachments.length > 0
          ? [
            <img
              src={message.attachments[0].file}
              alt="message-attachment"
              className="message-image"
              style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
            />,
            <p style={{ marginRight: '1px'}}>
             {dateMessage >= dateAjd ? message.created.substring(10, 16) : dateMessage=message.created.substring(5, 10) }
            </p>,
            <br />,
            <p> {message.text}&nbsp;likes</p>
          ]
          : [
            <div className="message" style={{ float: 'left', backgroundColor: dateMessage === dateAjd ?'#488f31' : dateMessage+1 === dateAjd ? '#7eaa6b' :  '#afc5a4'
            , marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
              {message.text}
            </div>,
            <p style={{ marginRight: '1px'}}>
             {dateMessage >= dateAjd ? [Number(message.created.substring(10, 13) )+1,message.created.substring(13, 16) ] :dateMessage=message.created.substring(5, 10) }
            {//console.log(message.sender)
            }
            </p>
          ]}
      </div>
    );
  };
  
  export default TheirMessage;