import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

it('Renders the App without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    div,
  );

  ReactDOM.unmountComponentAtNode(div);
});
