import React from 'react';

import "./Message.styles.scss"
const Message = ({message: {message, other}}) => {
    return (
        <div className="message-wrapper">
            <div className="message-text"  style={other ? {marginLeft: "auto"} : {}} >{message}</div>
        </div>
    );
};

export default Message;