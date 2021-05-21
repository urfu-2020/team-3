import App from "../App";
import React, {Component} from "react";
import Dialog from "../components/Dialog";

// const API = `http://localhost:${process.env.PORT || 80}/api/`
const API = `https://kilogram-team3.herokuapp.com/api/`

interface IDialogProps {
    dialogId: any
    dialogName: string
    messages: any[]
}

class DialogContainer extends Component<{}, any> {
    constructor() {
        super({dialogId: null, dialogName: '', messages: []});
        // this.state = { dialogId: null, messages: [] };
    }

    // TODO fetch chat data
    componentDidMount() {
        // @ts-ignore
        fetch(API + `chat/${this.props.dialogId}`)
            .then(res => res.json())
            .catch(res => {})
    }

    render() {
        // @ts-ignore
        return (<Dialog user={this.props.dialogName} messages={this.props.messages}/>)
    }
}

export default DialogContainer;