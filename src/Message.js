import React from 'react'

class Message extends React.Component {
    render() {
        return(
            <div className={"Message " + this.props.messageType}>
                { this.checkTextLength(this.props.messageText) }
            </div>
        )
    }

    checkTextLength(text) {
        if(text.length > 35 && !text.includes(' ')) {
            let newLinesCount = Math.floor(text.length / 30)
            let newText = ''
            for (let i = 1; i <= newLinesCount; i++) {
                newText += text.substr(i * 30, 30) + '\n'
            }
            text = newText
        }
        return text
    }
}

export default Message