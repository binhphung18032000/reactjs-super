import React from 'react'

// Functional component:
function Wellcome(props) {
  console.log('props aaa: ', props)
  return (
    <h1>
      Xin chào {props.name} - {props.age}!
    </h1>
  )
}

// class Wellcome extends React.Component {
//   render() {
//     console.log('this.props bbb: ', this.props)

//     return <h1>Xin chào {this.props.name}!</h1>
//   }
// }

export default Wellcome
