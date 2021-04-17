import React,{useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const initialSate = {
  count:0,
  countInterval:1,
  increment:true
}

const reducer = (state, action)=>{
  switch(action.type){
    case "INCREMENT":
      return{
        ...state,
        increment: action.increment
      }
    case "SET_INTERVAL":
      return{
        ...state,
        countInterval: parseInt(action.countInterval)
      }
    case "INCREASE_COUNT":
      return{
        ...state,
        count: state.count + state.countInterval
      }
    case "DECREASE_COUNT":
        return{
          ...state,
          count: state.count - state.countInterval
        }
    case "RESTART":
      return initialSate;
    default:
      return state;
  }
}


const Counter = ()=>{
  const [state, dispatch] = useReducer(reducer, initialSate);

  const handleIngrement = (e)=>{
    const {checked}=e.target;
    dispatch({type:"INCREMENT",increment:checked});
  }

  const handleCount = (e)=>{
    if(state.increment){
      dispatch({type:"INCREASE_COUNT"});
    }else{
      dispatch({type:"DECREASE_COUNT"});
    }
  }

  const handleCountInterval = (e)=>{
    const {value}=e.target;
    dispatch({type:"SET_INTERVAL",countInterval:value});
  }

  const handleRestart = (e)=>{
    dispatch({type:"RESTART"});
  }
  
  return (
    <div className="padre">
        <h1>{"Contador con React"}</h1>
        <p>{"Cuenta: " + state.count}</p>
        <div>
          <input 
          type="checkbox"
          id="chk"
          checked={state.increment}
          onChange={handleIngrement}/>
          <label htmlFor="chk">
            {"Incrementar"}
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="interval">
            {"Intervalo"}
          </label>
          <input
          type="text"
          id="interval"
          value={state.countInterval}
          onChange={handleCountInterval}/>
        </div>
        <br />
        <button onClick={handleCount}>
          {state.increment ? "Incrementar":"Decrementar"}
        </button>
        <button onClick={handleRestart}>
          {"Reiniciar"}
        </button>
    </div>
  )
}



ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
