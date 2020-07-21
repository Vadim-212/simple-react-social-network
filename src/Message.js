import React from 'react'

class Message extends React.Component {
    render() {
        return(
            <div className={"Message " + this.props.messageType}>
                {this.props.messageText}
            </div>
        )
    }
}

export default Message