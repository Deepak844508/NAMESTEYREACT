
        // document.addEventListener("DOMContentLoaded", function() {
        //     const heading = React.createElement("h1", {id:"heading",xyz:"abc"}, "Hello world from react!");//this {} object is the place where you give the attribute to the tags
        //     const rootElement = document.getElementById("root");
        //     if (rootElement) {
        //         ReactDOM.render(heading, rootElement);
        //     } else {
        //         console.error("Root element not found");
        //     }
        // });
//const heading= React.createElement("h1",{},"Hello world from react!");//here heading is a react element and react element is nothing but a normal javascript object
// here react.createElement job is basically to create a javascript object.
//console.log(heading)//return object
//const root= ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);// here this root.render function job is basically to take headind that is the javascript object and create a h1 tag that the browser understand and put them inside the root
// here this render method is coverted the object into the h1 tag and put it into the root.

//          NOTE (NESTED STRUCTURE INSIDE REACT)This is the core react

//Reactelement(object)=>HTML(browser understand):At the end of the day this react element is object and this react element becom html then th browser understands
//while it is rendering into the dom it convert itself into the html and put inside the dom.
//If you have to give two element as sibling they here you have to create the array of the children not just one children.

       //important notes

/* AS we know the root.render method put the parent inside the id root which is present in the 
html file, so if there is something present inside the root as before then these are replace 
by the element which send by the root.render method

--->And every thing which we render will render inside the root here.


===>React is called as library because it work independently in small portion of the app aswell
without affection the other portion so that it is called as library. it is not a full fledges
framework
==> so a framework is comes with all loads of things and react is a bare bone minimal
javascript library it is just some piece of javascript code which is written by the facebook
developer.It is just give us some helper method that we need to use to develop fast application
and we can do that in small portion of our app as well
==>All framework will require you to create a app using that framework whole app but react 
can work in your existing app as well
*/

const parent=[React.createElement("div",{id:"parent"}, // never thik that when you were doing react.createelement it is creating some html,it is creating object
React.createElement("div", {id:"child"},
[React.createElement("h1",{},"I am a tag"),
React.createElement("h2",{},"I am a tag")])),React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"this is another h1"),
React.createElement("h2",{},"this is another h2")])];//here for making h1and h2 as sibling we put these two createelement ino the array.
console.log(parent);// it is object and this object is the react element.
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
 //     ||
 /*        ==>This render method is super power full it is helping us put object onto our page
         and how does our object go to our page its like
    REactElement(object) ===>(Html browser understand) This react element is an object which will
    then converted it into html and then our browser understand what is the html and prints it
    on to the page     */
//but above code is very confusy and looking not good
// So for the clean and optimized code there is something called JSX

//@@@@JSX@@@@@@@ it makes our code easy and here all the react code are written inside thE JSX.

