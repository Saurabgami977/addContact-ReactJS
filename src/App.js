import { Route, Switch } from 'react-router-dom'

import './App.css';
import Form from './Containers/Form/Form';
import Navbar from './Components/Navbar/Navbar'
import FavouriteContact from './Containers/Favourite Contact/FavouriteContact';
import AllContact from './Containers/Alll Contact/AllContact';


function App() {
  return (
    <div className="App">
      <Route path="/" component={Navbar} />
      <Switch>
        <Route path="/add-contact" exact component={Form} />
        <Route path="/favourite-contact" exact component={FavouriteContact} />
        <Route path="/all-contact" exact component={AllContact} />
      </Switch>
    </div>
  );
}

export default App;
