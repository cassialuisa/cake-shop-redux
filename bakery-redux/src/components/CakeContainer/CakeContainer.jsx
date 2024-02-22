import React from 'react'
import { buyCake } from '../../redux/Cake/CakeActions'
import {connect} from 'react-redux'

const CakeContainer = (props) => {

  return (
    <div>
      <h2>Number of cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

  //the state from the redux store is mapped to our component props
  const mapStateToProps = (state) => {
    return {
      numOfCakes: state.cake.numOfCakes
    }
  }
//map the dispatch of an action creator to a prop in this component
  const mapDispatchToProps = (dispatch) => {
    return {
      buyCake: () => dispatch(buyCake())
    }
  }
  //TODO: search about selectors on docs

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
// the connect function does what the two function names defines

// on the v7.1 React Redux, the introduction to React Hooks (useSelector hook )
//allowed us to subscribe to store and dispatch actions without the connect() function!