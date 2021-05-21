import App from "../App";
import {Component} from "react";
import ContactList from "../components/ContactList";
import React from "react";

// const API = `http://localhost:${process.env.PORT || 80}/api/`
const API = `https://kilogram-team3.herokuapp.com/api/`

class ContactListContainer extends Component<{}, any> {
    constructor(props:any) {
        super(props);
        this.state = { contactList: [] };
    }

    // TODO fetch contact list
    /*
    * что нужно достать:
    * - список собеседников (есть)
    * - последнее сообщение желательно
    */
    componentDidMount() {
        fetch(API + 'user')
            .then(res => res.json())
            .catch(err => {
                // return []
                return [{"userId":1,"userName":"Mr-Lone-Wolf","avatarUrl":"https://avatars.githubusercontent.com/u/56768748?v=4"},{"userId":2,"userName":"FreeeedomDive","avatarUrl":"https://avatars.githubusercontent.com/u/26432633?v=4"},{"userId":3,"userName":"veolenexe","avatarUrl":"https://avatars.githubusercontent.com/u/44974960?v=4"},{"userId":4,"userName":"FirsovaA","avatarUrl":"https://avatars.githubusercontent.com/u/42750395?v=4"}]
            })
            .then(res => this.setState({contactList: res}))
    }

    render() {
        return (<ContactList users={this.state.contactList}/>)
    }
}

export default ContactListContainer;