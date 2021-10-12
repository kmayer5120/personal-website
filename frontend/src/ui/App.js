import { Navbar } from "./shared/components/Navbar";
import { Home } from "./pages/home/Home";
import { Blog } from "./pages/blog/Blog";
import { Portfolio } from "./pages/portfolio/Portfolio";
import { FourOhFour } from "./pages/FourOhFour";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import Post from "./shared/components/sanity/Post";
import { Provider } from "react-redux";

function App(store) {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar className="fixed" />
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
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
