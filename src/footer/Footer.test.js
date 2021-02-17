import ReactDOM from 'react-dom';
import Footer from './Footer';

it('Renders Footer component without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Footer />, div);

  ReactDOM.unmountComponentAtNode(div);
});
