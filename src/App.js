// import logo from './logo.svg'
import { useState } from 'react'
import './App.css'
import Clock from './Clock'

// function App() {
//   return (
//     <div className='App'>
//       <h1>Developed by Binh Phung</h1>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

function App() {
  const [visible, setVisible] = useState(true)
  return (
    <div className='App'>
      <button onClick={() => setVisible(false)}>Hide Clock</button>
      {visible && <Clock />}
    </div>
  )
}

export default App
