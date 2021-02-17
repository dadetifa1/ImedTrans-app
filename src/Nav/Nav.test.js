import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';

it('Nav component renders the App without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Nav />
    </Router>,
    div,
  );

  ReactDOM.unmountComponentAtNode(div);
});
