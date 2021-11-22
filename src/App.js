import { ChatEngine} from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    
    return (
        <ChatEngine
        height ="100vh"
        projectID="52a7716a-322b-49a1-b01f-15adbc52727c"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed{... chatAppProps}/>}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />)
}

export default App;
