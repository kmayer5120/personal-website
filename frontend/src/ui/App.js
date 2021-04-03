import { Navbar } from "./shared/components/Navbar";
import { Home } from "./home/Home";
import { FourOhFour } from "./FourOhFour";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import { Blog } from "./blog/Blog";
import Post from "./shared/components/sanity/Post";
import { Provider } from "react-redux";
import { Portfolio } from "./Portfolio/Portfolio";
import { Project } from "./shared/components/Project";

function App(store) {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar className="fixed" />
                    <Switch>
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/portfolio/:project_slug" component={Project} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/:slug" component={Post} />
                        <Route exact path="/" component={Home} />
                        <Route component={FourOhFour} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
