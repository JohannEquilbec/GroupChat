const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  
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
            {message.created.substring(10, 16)}
            </p>
          ]
          : [
            <div className="message" style={{ float: 'left', backgroundColor: message.sender.is_online? '#FFFFFF' :  '#AAAAAA', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
              {message.text}
            </div>,
            <p style={{ marginRight: '1px'}}>
            {message.created.substring(10, 16)}
            {console.log(message.sender)}
            </p>
          ]}
      </div>
    );
  };
  
  export default TheirMessage;