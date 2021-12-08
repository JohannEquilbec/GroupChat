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
         {dateMessage = dateAjd ? [Number(message.created.substring(10, 13) )+1,message.created.substring(13, 16) ]:dateMessage=message.created.substring(5, 10) }
        </p>,
        <p> {message.text}&nbsp;likes</p>
      ];
    }
  
    return [
      <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white',
       backgroundColor: dateMessage === dateAjd ?'#004c6d' : dateMessage+1 === dateAjd ? '#4c7999' :  '#85aac8'}}>
        {message.text}
      </div>,
      <p style={{ float: 'right', marginRight: '1px'}}>
        {dateMessage >= dateAjd ? [Number(message.created.substring(10, 13) )+1,message.created.substring(13, 16) ] :dateMessage=message.created.substring(5, 10) }
      </p>   
    ];
  };
  
  export default MyMessage;