
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Food from "./components/Food.jsx"
import Card from "./components/Card.jsx"
import Button from "./components/Button.jsx"
import Student from "./components/Student.jsx"
import UserGreeting from "./components/UserGreeting.jsx"

function App() {

    return(
      
      //add a component
      //Important: Can only return one component unless with add a fragement <> </>
      <>
        <Footer> </Footer> 

        <UserGreeting isLoggedIn = {true} userName = "Zed Saranillo"></UserGreeting>
        
        <Header> </Header>
        <Food>   </Food>

        <Card> </Card>
        <Card> </Card>
        
        <Button> </Button>

        
        <Student name="Spongebob" age={30} isStudent={true}> </Student>
        <Student name="Patrick" age={42} isStudent={false}> </Student>
        <Student> </Student>

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