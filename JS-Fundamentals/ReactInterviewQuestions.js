/*********************** what are props in React? ***********************/
/*
    Props are inputs to a React component. They are single values or objects containing a set of values
     that are passed to React Components on creation using a naming convention similar to HTML-tag attributes.
      i.e, They are data passed down from a parent component to a child component.

    The primary purpose of props in React is to provide following component functionality:

        Pass custom data to your React component.
        Trigger state changes.
        Use via this.props.reactProp inside component's render() method.
*/

<Element reactProp = "1"/>

props.reactProp;

/********************** How to create refs in React? ***********************/
/*
    Refs are created using React.createRef() method and attached to React elements via the ref attribute.
     In order to use refs throughout the component, just assign the ref to the instance property with in constructor.
*/

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
    render() {
      return <div ref={this.myRef} />;
    }
}

class UserForm extends Component {
handleSubmit = () => {
    console.log("Input Value is: ", this.input.value)
}
render () {
    return (
    <form onSubmit={this.handleSubmit}>
        <input
            type='text'
            ref={(input) => this.input = input} /> 
        <button type='submit'>Submit</button>
    </form>
    )
}
}

/********************** What are higher order function in react ?***********************/
/*
    A higher-order component (HOC) is a function that takes a component and returns a new component. 
        Basically, it’s a pattern that is derived from React’s compositional nature We call them as “pure’ components” 
        because they can accept any dynamically provided child component but they won’t modify or copy any behavior 
        from their input components.

    HOC can be used for many use cases as below,

        --Code reuse, logic and bootstrap abstraction
        --Render High jacking
        --State abstraction and manipulation
        --Props manipulation
*/
const EnhancedComponent = higherOrderComponent(WrappedComponent);

import React, { useState } from 'react'
import {NavigationDots, SocialMedia} from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex" >
            <Component />

            <div className="copyright"> 
              <p className="p-text"> @2022 Ryan</p>
              <p className="p-text"> All rights reserved</p>
            </div>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap

//Calling it looks like this:
    
// export default AppWrap(
//     MotionWrap(Testimonials, 'app__testimonials'),
//     'testimonials',
//     "app__primarybg"
//   );

/********************** what are refs used for in react? ***********************/
/*
   Refs are an escape hatch which allow you to get direct access to a DOM element or an instance of a component. 
   In order to use them you add a ref attribute to your component whose value is a callback function which 
   will receive the underlying DOM element or the mounted instance of the component as its first argument.

   It’s often misconstrued that you need to use a class component in order to use refs, but refs can also be used with functional components by leveraging closures in JavaScript.
*/

class UnControlledForm extends Component {
    handleSubmit = () => {
      console.log("Input Value: ", this.input.value)
    }
    render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            ref={(input) => this.input = input} />
          <button type='submit'>Submit</button>
        </form>
      )
    }
}

//With functions:
function CustomForm ({handleSubmit}) {
    let inputElement
    return (
      <form onSubmit={() => handleSubmit(inputElement.value)}>
        <input
          type='text'
          ref={(input) => inputElement = input} />
        <button type='submit'>Submit</button>
      </form>
    )
  }

/********************** what are advantages of using react hooks? ***********************/
/*
  Primarily, hooks in general enable the extraction and reuse of stateful logic that is common
   across multiple components without the burden of higher order components or render props. 
   Hooks allow to easily manipulate the state of our functional component without needing to convert them into class components.

    Hooks don’t work inside classes (because they let you use React without classes). 
    By using them, we can totally avoid using lifecycle methods, such as componentDidMount, componentDidUpdate, componentWillUnmount. 
    Instead, we will use built-in hooks like useEffect
*/



/********************** what does it mean for a component to be mounted in react? ***********************/
/*
  It has a corresponding element created in the DOM and is connected to that.
*/


/********************** what is usestate in react? ***********************/
/*
  useState is one of build-in react hooks. useState(0) returns a tuple where the first parameter count is the current state
   of the counter and setCounter is the method that will allow us to update the counter's state.

    We can use the setCounter method to update the state of count anywhere - 
    In this case we are using it inside of the setCount function where we can do more things; 
    the idea with hooks is that we are able to keep our code more functional and avoid class based components if not desired/needed.
*/

const [count, setCounter] = useState(0);
//const [moreStuff, setMoreStuff] = useState(...);

const setCount = () => {
    setCounter(count + 1);
    //setMoreStuff(...);
    
};

/********************** differnce between state and props ***********************/
/*
   Both props and state are plain JavaScript objects. While both of them hold information that influences
    the output of render, they are different in their functionality with respect to component. i.e,

    --Props get passed to the component similar to function parameters
   -- State is managed within the component similar to variables declared within a function
*/

/********************** What is the purpose of using super constructor with props argument in React? ***********************/
/*
   A child class constructor cannot make use of this reference until super() method has been called. 
   The same applies for ES6 sub-classes as well. The main reason of passing props parameter to super() 
   call is to access this.props in your child constructors.
*/

//passing props
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);  // Prints { name: 'sudheer',age: 30 }
    }
}

// not passing props
class MyComponent extends React.Component {
    constructor(props) {
        super();
        console.log(this.props); // Prints undefined
        // But Props parameter is still available
        console.log(props); // Prints { name: 'sudheer',age: 30 }
    }

    render() {
        // No difference outside constructor
        console.log(this.props) // Prints { name: 'sudheer',age: 30 }
    }
}

/********************** Can you initialise state from a function? Provide and example? ***********************/
/*
    yes.
*/

const StateFromFn = () => {
    const [token] = useState(() => {
      let token = window.localStorage.getItem("my-token");
      return token || "default#-token#"
    })
  
    return <div>Token is {token}</div>
  }


/********************** Does React useState Hook update immediately? ***********************/
/*
    Problem:
        And how do you perform an action after useState hook has triggered?

    Answer:
        React useState and setState don’t make changes directly to the state object; 
        they create queues to optimize performance, which is why the changes don’t update immediately. 
        The process to update React state is asynchronous for performance reasons.

    To perform side effects after state has change, you must use the useEffect
*/


/********************** What are the lifecycle methods of ReactJS class components? ***********************/
/*
    --> componentWillMount: Executed before rendering and is used for App level configuration in your root component.

    --> componentDidMount: Executed after first rendering and here all AJAX requests, DOM or state updates, 
        and set up eventListeners should occur.

    --> componentWillReceiveProps: Executed when particular prop updates to trigger state transitions.

    --> shouldComponentUpdate: Determines if the component will be updated or not. By default it returns true.
        If you are sure that the component doesn't need to render after state or props are updated, 
        you can return false value. It is a great place to improve performance as it allows you to 
        prevent a rerender if component receives new prop.

    --> componentWillUpdate: Executed before re-rendering the component when there are pros & state changes 
        confirmed by shouldComponentUpdate which returns true.

    --> componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes.

    --> componentWillUnmount: It will be used to cancel any outgoing network requests, or remove all
        event listeners associated with the component.
*/