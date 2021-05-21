import React, {Component} from "react"
import DialogMessage from "./DialogMessage";
import "./Dialog.css"
import MessageSendForm from "./MessageSendForm";

interface IDialogProps {
    user: any
    messages: any[]
}

class Dialog extends Component<IDialogProps, any> {
    createDialogMessage(message: any) {
        let incoming = message.senderId === this.props.user.userId
        return (
            <DialogMessage content={message.Text} incoming={incoming}/>
        )
    }

    render() {
        if (!this.props.user) {
            return(
                <div className={"dialog dialog_default"}>
                    <p className={"dialog_default__content"}>Select a Chat to start messaging</p>
                </div>
            )
        }

        return (
            <div className={"dialog"}>
                <div className="dialog-info">
                    <img className="dialog-info__profile_picture" src={this.props.user.avatarUrl || "images/default_profile.svg"}/>
                        <h3 className="dialog-info__name">{this.props.user.userName || ''}</h3>
                </div>
                <div className={"dialog__messages-wrapper"}>
                    {this.props.messages.map(this.createDialogMessage)}
                </div>
                <MessageSendForm/>
            </div>
        )
    }
}


export default Dialog