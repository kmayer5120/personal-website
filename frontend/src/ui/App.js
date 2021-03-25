import { Navbar } from "./shared/components/Navbar";
import { Home } from "./home/Home";
import { FourOhFour } from "./FourOhFour";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import { Blog } from "./blog/Blog";
import Post from "./shared/components/sanity/Post";
import { Resume } from "./resume/Resume";

function App() {
    return (
        <>
            <Navbar className="fixed" />
            <BrowserRouter>
                <Switch>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/blog" component={Blog} />
                    <Route path="/:slug" component={Post} />
                    <Route exact path="/" component={Home} />
                    <Route component={FourOhFour} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
