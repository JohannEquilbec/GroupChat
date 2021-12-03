const MyMessage = ({ message }) => {
    if (message.attachments && message.attachments.length > 0) {
      return [
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' }}
        />,
        <p style={{ float: 'right', marginRight: '1px'}}>
        {message.created.substring(10, 16)}
        </p>
      ];
    }
  
    return [
      <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
        {message.text}
      </div>,
      <p style={{ float: 'right', marginRight: '1px'}}>
        {message.created.substring(10, 16)}
      </p>
    ];
  };
  
  export default MyMessage;