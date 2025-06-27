import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
    this.date = '28/06/2025'
  }

  getTime = () => {
    // this.setState({
    //   time: new Date().toLocaleTimeString()
    // })

    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h1>Hello anh em</h1>
        <h2>Bây giờ là {this.state.time.created}</h2>
        <h3>Bây giờ là {this.state.seconds.created}</h3>
        <h4>Ngày {this.date}</h4>
        <button onClick={this.getTime}>Get time</button>
      </div>
    )
  }
}
