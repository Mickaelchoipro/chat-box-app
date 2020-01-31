import React from 'react'

class Message extends React.Component {

	render () {

		return (
			<p className='user-message'>
				{this.props.message}
			</p>  
		)
	}
}

// const Message = ({ message }) => (
// 	<p className="user-message">
// 		{message}
// 	</p>
// )

export default Message
