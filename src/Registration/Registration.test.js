import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Registration from './Registration';

it('Renders Registration component without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Registration />
    </Router>,
    div,
  );

  ReactDOM.unmountComponentAtNode(div);
});
