import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import FrontPage from './Components/AppFrontPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import FullScreen from './Components/FullScreen';

function App() {
  return (
    <div className="App">
      
      <Router>
       
       <Switch>
         <Route path='/' exact component={FrontPage} />
         <Route path='/full' exact component={FullScreen} />
         
         
       </Switch>
       
     </Router>
    </div>
  );
}

export default App;
