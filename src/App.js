import './App.css';
import DataTable from './screens/DataTable';
import Form from './screens/Form';
import { Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/' component={Form} />
        <Route exact path='/dataTable' component={DataTable} />
      </Switch>
    </div>
  );
}

export default App;
