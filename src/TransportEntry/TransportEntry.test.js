import ReactDOM from 'react-dom';
import TransportEntry from './TransportEntry';

it('renders SalesEntery without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<TransportEntry />, div);

  ReactDOM.unmountComponentAtNode(div);
});
