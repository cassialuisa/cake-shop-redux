import React from 'react'
import { buyCake } from '../../redux/Cake/CakeActions'
import {connect} from 'react-redux'
import { useState } from 'react'

const CakesContainer = (props) => {
    const [cakesToBuy, setCakesToBuy] = useState(1)

  return (
    <div>
      <h2>Number of cakes: {props.numOfCakes}</h2>
      <h3>Wanna order more than 1 cake? Write here how many cakes do you want:</h3>
      <input type='text' value={cakesToBuy} onChange={(e) => setCakesToBuy(e.target.value)}/>
      <button onClick={() => props.buyCake(cakesToBuy)}>Buy cakes</button>
    </div>
  )
}

  const mapStateToProps = (state) => {
    return {
      numOfCakes: state.cake.numOfCakes
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      buyCake: (cakesToBuy) => dispatch(buyCake(cakesToBuy))
    }
  }
  //TODO: search about selectors on docs

export default connect(mapStateToProps, mapDispatchToProps)(CakesContainer)
