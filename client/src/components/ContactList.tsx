import React, {Component} from "react";
import "./ContactList.css"

interface IUsersProps {
    users: any[]
}

class ContactList extends Component<IUsersProps, any> {
    render() {
        return (
            <div className={'contacts_list'}>
                {this.props.users.map(this.createContactEntry)}
            </div>
        )
    }

    createContactEntry(user: any) {
        return (
            <div className="contact">
                <img className="contact__profile-picture" src={user.avatarUrl || './images/default_profile.svg'}/>
                <div className="contact__dialog-preview">
                    <h3 className="dialog-preview__name">{user.userName}</h3>
                    <p className="dialog-preview__recent-message">You: hi</p>
                </div>
            </div>
        );
    }
}

export default ContactList