// We can run the npm scripts instead of giving whole commands .
// Open package.json inside scripts object , following commands are added

"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
}


// for dev build , we can simply give **npm run start or npm start**
// for production build , we can simple give **npm run build(only npm build won’t work always give npm run build)**
// So , to run any project in any company , always go to the package.json of your project and find the script object , there you have all your npm commands .
// Now BYE BYE to all big commands 

// React element is an object , its not equivalent to HTML element , when the react element is rendered on the DOM then it becomes a HTML element.
// This way is very clumsy with creatElement or createRoot (This is core React) etc etc , so we will write JSX .
// NOTE: React cannot be written without JSX , this is not true m this in a myth , JSX is just developer friendly that’s why we use JSX , JSX is a part of React , JSX is not React 

// **JSX**
// JSX is a convention where we merge HTML with Javascript.
// **JSX is not HTML. JSX is a HTML like or XML like syntax.**

const jsxHeading = <h1>Hello React using JSX</h1>;

//this h1 element on execution becomes react element and on rendering in DOM becomes HTML element
const heading = React.createElement("h1", {id: 'heading'},'Hello React');
// JSX
const jsxHeading1 = <h1>Hello React using JSX</h1>;

// Both these heading and jsxHeading are same but jsxHeadng looks more cleaner than heading.
// That’s why we use JSX.
// **Js engine & browsers will not understand JSX because according to him its not a valid javascript code then how its working ?**
// Answer: Parcel is doing the job behind the scenes. This JSX code is transpiled before it goes to JS engine and then JS engine receives the transpiles actual valid JS code.
// In reality , **Parcel** is the manager , **Babel** is the package which actully do transpiling.
// **Babel is the JS transpiler.**
// JSX ⇒ React.createElement ⇒ React.createElement object ⇒ HTML Element (render)

// **JSX**
// in Jsx , we have to use **className** not class .
const jsxHeading2 = <h1 className="heading">Hello React using JSX</h1>;

// that’s why its HTML like syntax not HTML
// **NOTE 1**: if adding attributes to **jsx** , always use **camelCase like tabindex in HTML but its tabIndex in JSX , className in JSX.*
// **NOTE**: 2 if you have single like jsx then its fine like

const jsxHeading3 = <h1 className="heading">Hello React using JSX</h1>;

//but if its in multiple line then wrap the JSX in parantheses
const jsxHeading4 = (<h1 className="heading">Hello React using JSX</h1>);

// ---------------------------------------------------------------

// ### React Component:

// Everything is component in React - TRUE Statement

// There are two types of components :

// 1. **Class Based** components - old way of writing the code, uses Javascript classes
// 2. **Functional Components**- new way of writing the code , uses Javascript functions

// ### Function Components

// 1. Its a normal Javascript function. 
// 2. **Always Name the function with capital letter**
// 3. It will always return some piece of JSX

const HeadingComponent = () => {
    return <h1>This is heading function react component</h1>
    }

// 4. When its a one line jsx then dont use curly braces or return keyword just like an arrow function 
const Heading = () => <h1>This is heading</h1>
// or
const heading1 = () => (
    <h1>This is heading</h1>
   )

// React Element
const heading2 = (
    <h1 className="heading">
        Hello React using JSX
    </h1>
);

// React Component
const HeadingComponent1 = () => (
    <h1>This is react functional component</h1>
)

// this is how you render a component
const HeadingComponent2 = () => (
    <h1>This is react functional component</h1>
)
const root = ReactDOM.createElement(document.getElementById('root'));
root.render(<HeadingComponent2/>);

// Nested Functional Components:
