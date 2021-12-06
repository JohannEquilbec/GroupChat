const MyMessage = ({ message }) => {

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
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' }}
        />,
        <p style={{ float: 'right', marginRight: '1px'}}>
         {dateMessage = dateAjd ? message.created.substring(10, 16) :dateMessage=message.created.substring(5, 10) }
        </p>,
        <p> {message.text}&nbsp;likes</p>
      ];
    }
  
    return [
      <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white',
       backgroundColor: dateMessage === dateAjd ?'#3B2A50' : dateMessage+1 === dateAjd ? '#AAAAAA' :  '#AFFFFA'}}>
        {message.text}
      </div>,
      <p style={{ float: 'right', marginRight: '1px'}}>
        {dateMessage >= dateAjd ? message.created.substring(10, 16) :dateMessage=message.created.substring(5, 10) }
        {}
      </p>
    ];
  };
  
  export default MyMessage;