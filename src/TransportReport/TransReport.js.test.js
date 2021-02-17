import ReactDOM from 'react-dom';
import SalesCollection from './SalesCollection';

it('renders SalesCollection without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<SalesCollection />, div);

  ReactDOM.unmountComponentAtNode(div);
});
