import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it ('has an add function', () => {
  const app = shallow(<App />)
  expect(app.instance().add()).toEqual(3);
})

it ('renders the header', () => {
  const app = shallow(<App />)
  const headerText = <h1>To Do List</h1>
  expect(app.contains(headerText)).toEqual(true);
})
