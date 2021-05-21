import React, {Component} from "react";


interface IMessageProps {
    incoming: boolean
    content: string
}


class DialogMessage extends Component<IMessageProps, any>{
    render() {
        return(
            <div className={`dialog-message dialog-message_${this.props.incoming ? 'incoming' : 'outgoing'}`}>
                <p className="dialog-message__text">
                    {this.props.content}
                </p>
            </div>
        )
    }
}

export default DialogMessage