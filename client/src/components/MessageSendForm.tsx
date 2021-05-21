import React from "react";

function MessageSendForm() {
    return (
        <div className="message-form-wrapper">
            <form className="message-send-form">
                <textarea className="message-input">
                </textarea>
                <input className="message-send-button" type="submit" value="send"/>
            </form>
        </div>
    )
}

export default MessageSendForm