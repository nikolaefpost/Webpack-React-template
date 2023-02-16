import "./index.html";
import "./index.scss";
import Home from "./pages/home";
import * as ReactDOM from "react-dom/client";

function multiply(p=4,r=4,y=6) {
    return p*r*y;
}

console.log(multiply(2,undefined,8));


const root = ReactDOM.createRoot(
    document.getElementById('App')
);

root.render(
    <Home number={2} />
)