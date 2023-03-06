{/* <script>
// write using javascript create h1 tag
const heading = document.createElement("h1");
heading.innerHTML = "Hello World from javascript";
// need to put the value to the div based on id
document.getElementById("root").appendChild(heading);
</script> */}

// import react from node modules.
import React from "react"
import ReactDOM from "react-dom/client";

import logo from "./assets/logo.svg"

/* Nested header element with h1,h2,h3 using React.createElement() */
const head1 = React.createElement('h1', { key: 'h1' },
    'Heading1');
const head2 = React.createElement('h1', { key: 'h1' },
    'Heading2');
const head3 = React.createElement('h1', { key: 'h1' },
    'Heading3');
const header = React.createElement('<div', {
    className: 'title'
}, [
    head1, head2, head3
])

/* Nested header element with h1,h2,h3 using JSX */
const jsx_header = (
    <div className="title">
        <h1>Heading1</h1>
        <h1>Heading2</h1>
        <h1>Heading3</h1>
    </div>
);

/* Nested header element with h1,h2,h3 using JSX React Element and pass attributes */
const jsx_header_attr = (
    <div className="title">
        <h1 id="heading1" titlename="namaste"> <a href="https://learn.namastedev.com/">Namaste React Live </a></h1>
        <h2>Chapter 03 : Laying the foundation</h2>
        <h3>Nested header element with h1,h2,h3 using JSX and pass attributes</h3>
    </div>
);

/* Nested header element with h1,h2,h3 using Functional Component */
const FunctionalHeader = () => {
    return (
        <div className="title">
            <h1>Heading1</h1>
            <h1>Heading2</h1>
            <h1>Heading3</h1>
        </div>
    )
}

/* Nested header element with h1,h2,h3 using Functional Component and composition of component */
const AddComponentInsideAnotherCom = () => {
    return (
        <div className="title">
            {/* {jsx_header} above for accesing react element */}
            {/* <FunctionalHeader /> for accesing functional component */}
            <h1>Heading1</h1>
            <h1>Heading2</h1>
            <h1>Heading3</h1>
        </div>
    )
}

/* Assignment 1 */
// root.render(header); /* Rendering header created using React.createElement() */
// root.render(jsx_header); /* Rendering header created using JSX */
// root.render(jsx_header_attr); /* Rendering header created using JSX  and passing attributes in jsx tag*/
// root.render(<FunctionalHeader />); /* Rendering header created using Functional Component */

/* Assignment 2 */

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt='logo'></img>
                <span className="logo-name">ReactJS Application</span>
            </div>
            <div className="search">
                <input type="text" key="search" placeholder="search for contacts"></input>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// put heading inside the root.
root.render(<HeaderComponent />);
