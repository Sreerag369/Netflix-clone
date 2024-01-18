
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import {action,comedy,adventure,drama,crime,family,fantasy,history,horror} from './url'
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={comedy} title='Comedy'/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={adventure} title='Adventure' isSmall />
       <RowPost url={drama} title='Drama' isSmall />
       <RowPost url={crime} title='Crime' isSmall />

      <RowPost url={family} title='Family' isSmall /> 
      <RowPost url={fantasy} title='Fantasy' isSmall /> 
      <RowPost url={history} title='History' isSmall /> 
      <RowPost url={horror} title='Horror' isSmall /> 
      
    </div>
  );
}

export default App;
