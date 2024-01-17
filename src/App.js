
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import {action,comedy} from './url'
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={comedy} title='Comedy'/>
      <RowPost url={action} title='Action' isSmall />
      
    </div>
  );
}

export default App;
