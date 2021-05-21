import React, {Component} from "react"
import Header from "./Header";
import ContactListContainer from "../containers/ContactListContainer";
import DialogContainer from "../containers/DialogContainer";

class MainPage extends Component{
    render() {
        return (<div>
            <Header/>
            <main>
                <ContactListContainer/>
                <DialogContainer/>
            </main>
        </div>
        )
    }
}

export default MainPage