import ReactDOM from 'react-dom';
import SaleEntryUpdate from './SaleEntryUpdate';

it('renders SaleEntryUpdate without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<SaleEntryUpdate />, div);

  ReactDOM.unmountComponentAtNode(div);
});
