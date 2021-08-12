import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Cakes - {numOfCakes} </h2>
      <button type="button" onClick={() => dispatch(buyCake())}>
        Buy Cake
      </button>
    </div>
  );
};

export default HooksCakeContainer;
