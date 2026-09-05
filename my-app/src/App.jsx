
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Food from "./components/Food.jsx"
import Button from "./components/Button.jsx"
import Student from "./components/Student.jsx"
import UserGreeting from "./components/UserGreeting.jsx"
import List from "./components/List.jsx"
import HooksPrac from "./components/HooksPrac.jsx"
import EventsPrac from "./components/EventsPrac.jsx"
import ColorPicker from "./components/ColorPicker.jsx"

import Card from "./components/Card.jsx"
import Introduction from "./components/Introduction.jsx"
import TopBar from "./components/TopBar.jsx"
import About from "./components/About.jsx"
import AnimatedBackground from "./components/AnimatedBackground.jsx"

function App() {

    //TODO - Continue Bro Code video - 1:19:57

    // const fruits = [{id:1 ,name:"apple", calories: 95},
    //         {id: 2, name:"orange", calories: 45},
    //         {id: 3, name: "banana", calories: 105}, 
    //         {id: 4, name:"mango", calories: 100}];
    

    return(
      
      //add a component
      //Important: Can only return one component unless with add a fragement <> </>
      <>
        {/* <Footer> </Footer> 

        <UserGreeting isLoggedIn = {true} userName = "Zed Saranillo"></UserGreeting>
        
        <Header> </Header>
        <Food>   </Food>

        <Card> </Card>
        <Card> </Card>
        
        <Button> </Button>

        
        <Student name="Spongebob" age={30} isStudent={true}> </Student>
        <Student name="Patrick" age={42} isStudent={false}> </Student>
        <Student> </Student>

        <List items ={fruits} category = "Fruits"> </List>
        
        <HooksPrac> </HooksPrac>

        <EventsPrac> </EventsPrac>

        <ColorPicker></ColorPicker>  */}


        <TopBar/>
        <AnimatedBackground/>

        <div className = "intro-section">
          <Card/>
          <Introduction/>
        </div>

        <About/>
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