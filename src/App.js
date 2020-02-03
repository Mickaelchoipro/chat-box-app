import React, { createRef } from 'react'
import './App.css'
import './animations.css'
import Form from './components/Form'
import Message from './components/Message'

// Firebase
import base from './base'

// Animations
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends React.Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    Object
      .keys(messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null
      })
    this.setState({messages})
  }

  render () {

    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <CSSTransition key={key} timeout={1000} classNames='fade'>
          <Message
            message={this.state.messages[key].message}
            pseudo={this.state.messages[key].pseudo}
            currentPseudo={this.state.pseudo} />
        </CSSTransition>
      ))

    return (
      <div className='box'>
        <div>
          <div className='messages' ref={this.messagesRef}>
            <TransitionGroup className='message'>
              { messages }
            </TransitionGroup>
          </div>
        </div>
        <Form addMessage={this.addMessage} pseudo={this.state.pseudo} length={140} />
      </div>
    )
  }
}

export default App
