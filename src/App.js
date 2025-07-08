// import logo from './logo.svg'
// import { useState } from 'react'
// import './App.css'
// import Clock from './Clock'
import BareInput from './BareInput'
import Layout from './Layput'

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

// function App() {
//   const [visible, setVisible] = useState(true)
//   return (
//     <div className='App'>
//       <button onClick={() => setVisible(false)}>Hide Clock</button>
//       {visible && <Clock />}
//     </div>
//   )
// }

function App() {
  return (
    <div className='App'>
      <Layout>
        <h1>Hello</h1>
        <BareInput value='1000' autoFocus className='input-control' onChange={() => {}} />
      </Layout>
    </div>
  )
}

export default App
