import React from 'react'

class Message extends React.Component {

	render () {

		if (this.props.pseudo === this.props.currentPseudo) {
      return (
        <p className='user-message'>
				  {this.props.message}
			  </p>
      )
	  } else {
      return (
        <p className='not-user-message'>
				  <strong>{this.props.pseudo} : </strong>{this.props.message}
			  </p>
      )
    }
	}
}

export default Message
