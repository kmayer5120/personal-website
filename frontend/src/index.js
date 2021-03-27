import ReactDOM from "react-dom";
import App from "./ui/App";
import {store} from "./store/store";

ReactDOM.render(App(store), document.querySelector("#root"));
