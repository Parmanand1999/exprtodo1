
import { createContext, useReducer } from 'react';
import './App.css';
import Homepage from './Componant/Homepage';
import './Componant/Homepage.css'
import './Componant/TagepageForm.css';

export const TodoInput = createContext();

const initialstate = {
  inputOpen: false,
  donetask: true,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "InputOpen":
      return {
        ...state,
        inputOpen: true
      }

    case "Cancel":
      return {
        ...state,
        inputOpen: false
      }
    case "donetask": {
      return {
        ...state,
        // taskdone: true
      }
    }
    default: {
      return state;
    }

  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <TodoInput.Provider value={{ ...state, dispatch: dispatch }}>
        <Homepage />
      </TodoInput.Provider>

    </div>
  );
}
export default App;
