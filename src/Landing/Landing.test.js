import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './Landing';

it('Renders Landing component without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Landing />
    </Router>,
    div,
  );

  ReactDOM.unmountComponentAtNode(div);
});
