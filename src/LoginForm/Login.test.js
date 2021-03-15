import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Loginform from './Loginform';

it('Renders Loginform component without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Loginform />
    </Router>,
    div,
  );

  ReactDOM.unmountComponentAtNode(div);
});
