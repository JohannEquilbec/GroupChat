import { ChatCard} from 'react-chat-engine';
import { NewChatForm } from 'react-chat-engine';

const ChatListaa = (props) => {
    const { chats} = props;
   // console.log(props);
    
    if (chats != null){
        var listChat = Object.entries(chats);

       // setActiveChat(chats[listChat[1][1].id]);
        // getMessages(props, chat.id);  
        // console.log(chats[1])
        // console.log(listChat[0][1].id)
        // chats.forEach(element => console.log(element));
        // listChat.forEach(element => console.log(element[0]));
    }
    
      if (!chats) return <div />;
    return (
        <div>
            <div style= {{ backgroundColor:'#008FFF'  }}>
            <ChatCard {...props} chat={chats[listChat[0][1].id]} />
            </div>
            
            <ChatCard onClick={() => console.log(props)} {...props} chat={chats[listChat[1][1].id]} />
            <ChatCard {...props} chat={chats[listChat[2][1].id]} />
            <ChatCard {...props} chat={chats[listChat[3][1].id]} />
            <ChatCard {...props} chat={chats[listChat[4][1].id]} />
            <ChatCard {...props} chat={chats[listChat[5][1].id]} />
            <NewChatForm {...props} />
        </div>
        
        
        );
};
export default ChatListaa;