import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Wellcome from './Wellcome'

// example 1:
// const element = <h1>Hello anh em!</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(element)

// example 2:
// const root = ReactDOM.createRoot(document.getElementById('root'))
// function tick() {
//   const element = (
//     <div>
//       <h1>Xin chào anh chị em ^^</h1>
//       <h2>Bây giờ là {new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   root.render(element)
// }
// setInterval(tick, 1000)

// example 3:
const root = ReactDOM.createRoot(document.getElementById('root'))
// const element = <Wellcome name='Bé Bình' />
const element = (
  <div>
    <Wellcome name='Bé Bình' age='25' />
    <Wellcome name='Bé Ka' age='27' />
    <Wellcome name='Bé Khanh' age='29' />
  </div>
)
root.render(element)

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
