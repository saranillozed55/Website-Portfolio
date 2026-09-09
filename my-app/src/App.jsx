
import Card from "./components/Card.jsx"
import Introduction from "./components/Introduction.jsx"
import TopBar from "./components/TopBar.jsx"
import About from "./components/About.jsx"
import AnimatedBackground from "./components/AnimatedBackground.jsx"
import Projects from "./components/Projects.jsx"

function App() {

    return(
      <>
      <div className="w-full max-w-full overflow-x-clip min-h-screen flex flex-col">
      <div id = "home"/>
        <TopBar/>
        <AnimatedBackground/>
        

        <div className ="
        flex
        flex-col
        md:flex-row
        items-center
        justify-center
        gap-12
        min-h-screen
        pt-20
        md:pt-0
        px-4
        -mt-40
        ">
          <Card/>
          <Introduction/>
        </div>

        <About/>
        <Projects/>


        </div>
        </>
    );
}

export default App

//Notes 

//Three Different Ways to Style react components:
// 1. External
// 2. Modules
// 3. Inline

// props = read-only propertires that are shared between components. A parent component can send data to a child component.
// <Component key=value/>
// propTypes = a mechanism that ensures that the passed value is of the correct datatype. age: PropTypes.number


//Condtional Rendering = control what gets rendered in application based on certain conditions

//React hook - special function that allows functional components to have access to React features without writing
//class components
//useState() - allows the creation of a stateful variable AND a setter function to update its value in the virtual DOM.

//onChange = event handler that listens for changes in an input field and updates the state of the variable accordingly.
//used primarily with form elements ex. <input>, <textarea>, <select>, <radio>, Triggers a function everytime 
// the value of the input chanes.

//updater function - A function that is passed as an argument to setState() to update the state 
// ex. setYear(lamda expression) 
//Allow for safe updates to the state based on the previous state value.
//Used with multiple state updates and asynchronous functions. SHOULD use updater functions