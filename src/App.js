
import { createContext, useReducer } from 'react';
import './App.css';
import Homepage from './Componant/Homepage';
import './Componant/Homepage.css'
import './Componant/TagepageForm.css';


export const TodoInput = createContext();

const initialstate = {
  inputOpen: false,
  taskdone: false,
  title: "",
  discription: "",
  titlediscription: [],
  EDIT_DELETE: false
}


const reducer = (state, action) => {
  // console.log(action, state)
  switch (action.type) {
    case "Homepage":
      return {
        ...state,
        Homepage: true,

      }

    case "Cancel":
      return {
        ...state,
        Homepage: false
      }
    case "taskdone":
      return {
        ...state,
        taskdone: !state.taskdone
      }
    case "Title":
      return {
        ...state,
        title: action.title
      }
    case "Discription":
      return {
        ...state,
        discription: action.discription
      }
    case "Addbtn":
      return {
        ...state,
        title: "",
        discription: "",
        Homepage: false,
        titlediscription: [...state.titlediscription, { title: state.title, discription: state.discription }]
      }
    case "EDIT_DELETE":
      return {
        ...state,
        EDIT_DELETE: !state.EDIT_DELETE
      }
    case "EDIT":
      console.log(action, "...............................edite")
      return {
        ...state,
        // index:
      }

    default: {
      return state;
    }

  }
}
function App() {
  const [updatestate, dispatch] = useReducer(reducer, initialstate);
  // console.log(updatestate)
  return (
    <div>
      <TodoInput.Provider value={{ ...updatestate, dispatch }}>
        <Homepage />
      </TodoInput.Provider>
    </div>
  );
}
export default App;
