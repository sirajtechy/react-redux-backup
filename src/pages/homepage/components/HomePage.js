import React, { Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getSchoolDetails } from '../../../redux/homepage/actions/getHomePageDetail'
import { HomePageSelector } from '../selector'


class HomePage extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log("iam in did mount")
        // this.props.getSchoolDetails()
    }
    render(){
        return(
            <>
                    React Redux Base 
            </>
        )
    }
}

HomePage.PropTypes = {
    getSchoolDetails: PropTypes.func
}
export default HomePage ;
// export default withRouter(connect(HomePageSelector),
//     {
//         getSchoolDetails: getSchoolDetails
//     }
// )(HomePage)


// HomePage.PropTypes = {
//     getSchoolDetails: PropTypes.func
// }
// export default withRouter(connect(HomePageSelector),
//     {
//         getSchoolDetails: getSchoolDetails
//     }
// )(HomePage)

// const HomePage = (props) => {
//     useEffect(() => {
//         getSchoolDetails()
//     }, [])
//     return (
//         <div>
//             I AM LUQMAN YOUSUF ...!
//         </div>
//     )
// }

// HomePage.PropTypes = {
//     getSchoolDetails: PropTypes.func
// }
// export default withRouter(connect(HomePageSelector),
//     {
//         getSchoolDetails: getSchoolDetails
//     }
// )(HomePage)

