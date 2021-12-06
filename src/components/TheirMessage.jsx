const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    
  if (message.created.substring(8, 9)=== "0"){
    var dateMessage = Number(message.created.substring(9, 10));
  }
  else {
    var dateMessage = Number(message.created.substring(8, 10));
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
            <div className="message" style={{ float: 'left', backgroundColor: dateMessage === dateAjd ?'#3B2A50' : dateMessage+1 === dateAjd ? '#AAAAAA' :  '#AFFFFA'
            , marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
              {message.text}
            </div>,
            <p style={{ marginRight: '1px'}}>
             {dateMessage >= dateAjd ? message.created.substring(10, 16) :dateMessage=message.created.substring(5, 10) }
            {//console.log(message.sender)
            }
            </p>
          ]}
      </div>
    );
  };
  
  export default TheirMessage;