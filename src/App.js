import { Route, Switch } from 'react-router-dom'

import './App.css';
import Form from './Containers/Form/Form';
import Input from './Components/UI/Input/Input';
import Navbar from './Components/Navbar/Navbar'


function App() {
  return (
    <div className="App">
      <Route path="/" component={Navbar} />
      <Switch>
        <Route path="/add-contact" exact component={Form} />
        <Route path="/add" exact component={Input} />
      </Switch>
    </div>
  );
}

export default App;
