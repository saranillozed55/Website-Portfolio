
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Food from "./components/Food.jsx"
import Card from "./components/Card.jsx"
import Button from "./components/Button.jsx"

function App() {

    return(
      
      //add a component
      //Important: Can only return one component unless with add a fragement <> </>
      <>
        <Footer> </Footer> 
        <Header> </Header>
        <Food>   </Food>

        <Card> </Card>
        <Card> </Card>
        
        <Button></Button>
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