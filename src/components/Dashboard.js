// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { helloMessage } from '../actions/dashboardAction'
// import { connect } from 'react-redux'
// import Typewriter from 'typewriter-effect';
// const FamilyNames = [{name:'Siraj'},{name:'Shaheen'},{name:'Luqman'},{name:'Yousuf'}] ;
// class UploadComponent extends Component {
//     constructor(props) {
//         super(props)
//     }
//     componentDidMount() {
//         this.props.helloMessage()
//     }
    
//     render() {
//         return ( 
//             <>
//                 <div className="wrapper">
//                     <h2>About Me</h2>
//                     <p>I am a full stack Engineer and a Dad of two Kids ...! :-) </p></div>
//                 <div className="wrapper">
//                     <h2>Contact me</h2>
//                     <p>sirajtechy@gmail.com</p>
//                     <p>Ph no: 7010811417</p>
//                     </div>
//                 <div className="wrapper">
//                     <h2>Trainings</h2>
//                     <p>React js Node js coming soon..!!</p></div>
//                 <ul>
//                     {this.renderFamilyName}
//                 </ul>
//             </>
//         )
//     }
// }
// export function mapStateToProps(state) {
//     const getHelloMessage = state.getIn(['uploadReducer', 'uploadMessage'], '')
//     return {
//         uploadMessage: getHelloMessage
//     }
// }
// export default connect(mapStateToProps,
//     { helloMessage: helloMessage })(UploadComponent)
