import './App.scss';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ItemView } from './views';

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route exact path="/" component={ItemView} />
    </Router>
  );
}

export default App;
