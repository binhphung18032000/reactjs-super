import React from 'react'

const lists = ['Merceides', 'BMW', 'Toyota']
const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}
export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      lists: [],
      darkMode: false
    }
    this.date = '28/06/2025'
    this.getTime = this.getTime.bind(this)
    //Không setState bên trong constructor.
    //Không gán this.props vào state vì constructor chỉ chạy 1 lần nên giá trị của this.state sẽ không change theo this.props
    //Nếu muốn tạo 1 biến lưu data mà không cập nhật lại giá trị thì tạo như biến this.date luôn không cần bỏ vào this.state
  }

  componentDidMount() {
    // const seconds = document.getElementById('seconds')
    // console.log('Seconds: ', seconds)
    console.log('componentDidMount')

    fetchApi().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        lists: res
      }))
    )
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')

    // if (this.state.darkMode) {
    //   const value = document.querySelector('input').value
    //   console.log('Value: ', value)
    // }

    if (!this.state.lists?.length) {
      fetchApi().then((res) =>
        this.setState((prevState) => ({
          ...prevState,
          lists: res
        }))
      )
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  // getTime = () => {
  //   // this.setState({
  //   //   time: new Date().toLocaleTimeString()
  //   // })

  //   const newState = {
  //     ...this.state,
  //     time: {
  //       created: new Date().toLocaleTimeString()
  //     },
  //     seconds: {
  //       created: new Date().getSeconds()
  //     }
  //   }
  //   this.setState(newState)
  // }

  getTime() {
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

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }))
  }

  render() {
    // console.log('this.state: ', this.state)
    console.log('render')

    return (
      <div>
        <h1>Hello anh em</h1>
        <h2>Bây giờ là {this.state.time.created}</h2>
        <h3 id='seconds'>Bây giờ là {this.state.seconds.created}</h3>
        <h4>Ngày {this.date}</h4>
        <button onClick={this.getTime}>Get time</button>
        <button onClick={this.toggleDarkMode}>Toggle</button>
        {this.state.darkMode && <input value={this.state.darkMode} type='text' />}
      </div>
    )
  }
}
