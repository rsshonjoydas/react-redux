/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

const CakeContainer = (props) => (
  <div>
    <h2>Number of cakes - {props.numOfCakes}</h2>
    <button type="button" onClick={props.buyCake}>
      Buy Cake
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  numOfCakes: state.cake.numOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: () => dispatch(buyCake()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
