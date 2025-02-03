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
const Title = ()=> (
    <h1 className="heading">
        This is Title component
    </h1>
);

// React component
const HeadingComponent4 = () => (
<div>
    <h1>This is React functional component</h1>
    <Title />
</div>
)

const root1 = ReactDOM.createRoot(document.getElementById('root'));

root1.render(<HeadingComponent4/>);
// this above is also called component composition

// fetching js variable inside jsx using curly braces{}
const number = 233;
const HeadingComponent4 = () => (
    <div>
        <h1>This is React functional component</h1>
       {number}
    </div>
    )

// we can write any javascript expression inside JSX using {} and it will work
const number = 233;
const HeadingComponent4 = () => (
    <div>
        <h1>This is React functional component</h1>
       {number}
       {45+45}
       {console.log(number)} 
    </div>
    )
    // This is React functional component -- screen pr
    // 233
    // 90
    // 233 -- console me aayega 

// putting react element into React component using {}
const Title = ()=> (
    <h1 className="heading">
        This is Title component
    </h1>
);

// React component
const HeadingComponent4 = () => (
<div>
    <h1>This is React functional component</h1>
   {title}
</div>
)
// This is react functional component -- screen pr aayega 
// This is title component -- screen pr aayega 

// If you are putting or calling a react component or element before its is initialized , you ll get error because end of the day its a const javascript varibale 
//and can’t be accessed before initialization (temporal dead zone)

const Title = ()=> (
    <h1 className="heading">
        This is Title component
        <HeadingComponent4/>    
    </h1>
); // this is wronggggggggg

// React component
const HeadingComponent4 = () => (
<div>
    <h1>This is React functional component</h1>
   {title}
</div>
)
// reference error - cannot access "HeadingComponent4" before initialization

// You can also call a React component like this:
const Title = () =>(
    <h1 className="heading">
        This is Title component
    </h1>
)
// React component
const HeadingComponent = () => (
    <div>
        <h1>This is react functional component</h1>
        {Title()} 
    </div>
)
// if fact Title is a js function only - this is also righttttt