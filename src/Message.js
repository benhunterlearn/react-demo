function Message(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            {/*<b>This is the message.</b>*/}
        </div>
    )
}

export default Message;