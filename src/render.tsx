import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {StateType} from "./index";
import {addPost} from "./redux/state";

export let rerenderPost =(states:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={states} addPost={addPost}/>
    </BrowserRouter>,
    document.getElementById('root'))
}