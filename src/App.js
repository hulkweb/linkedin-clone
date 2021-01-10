import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
 const [{user},dispatch]=useStateValue();
  return (
    <div className="App">
      {user?<>
        <Header user={user}/>
      
        <Body/>
      </>
      : <Login/>}
    </div>
  );
}

export default App;
