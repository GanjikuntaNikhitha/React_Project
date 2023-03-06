1. What is JSX?
JSX is a html like syntax but not html inside javascript.

Broswer does not understand JSX and a transpiler/compiler is required to convert this to browser understandable js code. Eg: Babel

JSX ------> React.createElement() -----> React element ----> Object to be rendered in the DOM

# React keeps track and unigueness using key
# how does jsx execute: Browser don't understand this javascript code(const heading12 = <h1>Hello JSX</h1>), babel understand this(reads code and gives you normal code), read code line by line.

how to create multiple tags in jsx, create image in jsx, classname in jsx, different usage.

# what is React element : it is an object
const heading12 = (<h1>Hello JSX</h1>)
Render reactive element  like this root.render(container);

## Everthings is component -  
# 1) functional- it is normal function, new way of writing code(javascript function that returns our react element/ some piece of jsx). Functional or any component that name starting should be in capital letter(no it is not mandatory, but it is good practice) 
const HeaderComponent = ()=>{
    return <h1>Hello Functional component</h1>;
}
Render functional component like this root.render(<HeaderComponent/>);

# 2) class based - old way of writing

# how can we use react element in functional component - like below we need to use.
const reactElement = (<h1>Hello JSX</h1>);
const HeaderComponent = ()=>{
    return(
        {reactElement}
        <h1>Hello Functional component</h1>;
    )
}
Render functional component like this root.render(<HeaderComponent/>);

## If it is functional component instead of react element and we will use like above it wont work, inorder to work we have to use it as tag (<reactElement />) or just call javascript function {reactElement()}

# cross siting attrack - if i run some javscript code in your application then i can get lots of info and hack is done. jsx takes care of it , how it does like it what ever javascript code written inside the {} it santises first(sanitization).

# component composition/ composition of components - if I have to use component inside the component that is known as component composition use component inside other component like as - <HeaderComponent/>

2. Superpowers of JSX
JSX as variables : markup (html-like) syntax can be set in a variable. This creates a react element (object).

javascript expressions in JSX : JSX supports all js expressions by wrapping them in {}

Attributes in JSX : We can pass all the html attributes inside jsx tag (attributes must be CamelCased). Even, custom attributes can be created, but it must not use CamelCase.

Props in JSX : The values of each attribute can be passed as properties (props) to a react element. This is my favourite superpower of jsx, since it can handle dynamic data to create react elements.

