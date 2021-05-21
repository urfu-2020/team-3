import React, {Component} from "react"
import Header from "./Header";
import ContactListContainer from "../containers/ContactListContainer";
import DialogContainer from "../containers/DialogContainer";

class LoginPage extends Component{
    componentDidMount(){
        window.location.href = "https://kilogram-team3.herokuapp.com/login";
    }

    render() {
        return (<div/>);
    }
}

export default LoginPage