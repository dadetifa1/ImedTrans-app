import ReactDOM from 'react-dom';
import SaleEntry from './SaleEntry';

it('renders SalesEntery without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<SaleEntry />, div);

  ReactDOM.unmountComponentAtNode(div);
});
