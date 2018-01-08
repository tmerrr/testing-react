import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import { TodoList } from './ToDoList';


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
  expect(app.find(TodoList).length).toEqual(1);
})
