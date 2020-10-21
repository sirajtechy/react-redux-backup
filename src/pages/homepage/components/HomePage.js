import React, { useEffect, useState,Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import {  testMe} from '../../../redux/homepage/actions/getHomePageDetail'
import { HomePageSelector } from '../selector'

class HomePage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.testMe('Kabeer')
  }
  render(){
    return (
      <div>
      Home page component
      </div>
    )
  }
  }


//   function HomePage(){
//     const [count, setCount] = useState(0);

//     // useEffect(() => {
//     //     // Update the document title using the browser API
//     //     document.title = `You clicked ${count} times`;
//     //   });
//     useEffect(()=>{
//         getSchoolDetails()
//     },[])
//     return(
// <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => getSchoolDetails()}>
//         Click me
//       </button>
//     </div>
//     )
// } 

export default connect (
    HomePageSelector,{
       testMe:testMe
    }
)(HomePage)


