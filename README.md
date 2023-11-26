const heading = React.createElement("h1", {id:'heading', xyz: 'abc'}, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


-> React.createElement() gives us an object and not a html tag
-> root.render() converts this object into tag and render it on the div having id "root"


/* 
Header
    -logo
    -navItem
body
    -search
    -Restaurant Container
        -Restaurant Card
Footer
    -copyright
    -Links
    -Address
    -Contact
*/