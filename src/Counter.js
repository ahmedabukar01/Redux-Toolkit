import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './features/counterSlice';

const Counter = () => {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
        <h2>value: {count}</h2>
        <button onClick={()=> dispatch(increment())}>add</button>
        <button onClick={()=> dispatch(decrement())}>add</button>
    </div>
  )
}

export default Counter