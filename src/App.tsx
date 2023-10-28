
import { decrement, increment,incrementByValue } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";


const App = () => {

const count = useAppSelector((state)=> state.counter.count);
const dispatch = useAppDispatch();

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex justify-center">
        <button className="bg-green-400 p-2 mx-5 rounded-md" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="bg-purple-400 p-2 mx-5 rounded-md" onClick={() => dispatch(incrementByValue(10))}>
          Increment by value
        </button>
        <div className="bg-red-400 px-10 py-2 rounded-md">{count}</div>
        <button className="bg-blue-400 p-2 mx-5 rounded-md" onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default App;