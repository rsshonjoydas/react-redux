/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input type="text" name="" id="" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button type="button" onClick={() => props.buyCake(number)}>
        Buy {number} Cake
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  numOfCakes: state.cake.numOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: (number) => dispatch(buyCake(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
