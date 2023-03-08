import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {StateType} from "./index";
import {addPost,addNewMyMessage, updatedNewMyMessage, updateNewPostTexts} from "./redux/state";
export let rerenderPost =(states:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App updatedNewMyMessage={updatedNewMyMessage} addNewMyMessage={addNewMyMessage}
                 updateNewPostTexts={updateNewPostTexts} state={states} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root'))
}