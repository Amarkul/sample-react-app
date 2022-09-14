import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import Greet from './Learnings/Greet';
import { Button } from 'bootstrap';
import Message from './Learnings/Message';
import Form from './components/Form';

function App() {
  return (
    
    <div>
      <Form />
    </div>
    
    /* <div>
      <PostList />
    </div>
    
    
   <div>
      <Message />
    </div>
    
    <div className="App">
     <Greet name='amar' lname='kulkanri'>
       <p>This is children props</p>
     </Greet>
     <Greet name='aniket' lname='raut'>
       <button>submit</button>
     </Greet>
     <Greet name='pragati' lname='nimdeo'>
      <button>exit</button>
     </Greet>
    </div> */
    
  ); 
}

export default App;
