import {Navbar} from "./shared/components/Navbar"
import {Home} from "./home/Home"
import {FourOhFour} from "./FourOhFour"
import {BrowserRouter } from "react-router-dom"
import {Switch, Route} from "react-router"

function App() {
  return (
    <>
        <Navbar/>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route component={FourOhFour}/>
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;