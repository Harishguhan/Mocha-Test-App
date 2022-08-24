import 'jsdom-global/register';
import React from 'react';
import { configure,shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Home from './Home';
import LoginForm from './LoginForm';

configure({
  adapter: new Adapter(),
});
describe("Testing <App/> Component", () => {
  it("App renders a message", () => {
     const wrapper = shallow(<App />);
     const message = <h2>Welcome to React</h2>;
     const msg = <p>Hello World!</p>
     expect(wrapper).to.contain(message);
     expect(wrapper).to.contain(msg);
  });
  chai.use(chaiEnzyme());
});

describe("Testing <Home /> Component", () => {
  it("Home renders a message", () => {
     const demo = shallow(<Home />);
     const message = <h1>Welcome Home</h1>;
     expect(demo).to.contain(message);
     const button = demo.find('.btn');
     expect(button.text()).to.be.eql('Click Me');
  });
  chai.use(chaiEnzyme());
});

describe('Testing <LoginForm> Component',() =>{
  it('Testing form elemements',() => {
    const loginform = shallow(<LoginForm />);
    const button1 = loginform.find('.log-btn');
    expect(button1.text()).to.be.eql('Log In');
    const email = loginform.find('#email');
    expect(email.type()).to.be.eql('input');
    expect(email.getElement().props.type).to.be.eql('email');
    const password = loginform.find('#password');
    expect(password.type()).to.be.eql('input');
    expect(password.getElement().props.type).to.be.eql('password');
  });
  chai.use(chaiEnzyme());
});