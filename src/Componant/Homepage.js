import React, { useContext } from 'react';
import { TodoInput } from '../App';
import Sidebar from './Sidebar'
import TagepageForm from './TagepageForm'
// import TodoBody from './TodoBody'



function Homepage() {
    const appContext = useContext(TodoInput);
    // const [done, setdone] = useState(true)
    // // const [popup, setPopup] = useState(false)

    // function donehandler() {
    //     // setdone((pre => !pre))
    // }
    // function pophandler() {
    //     // setPopup((pre => !pre))
    // }

    return (
        <>
         
                { appContext.inputOpen ? <TagepageForm/> : ""}
                <div className='maindiv0'>
                    < div className='maindiv'>
                        <div className='nav d-flex justify-content-between '>
                            <div className='navtodo '><h2>todo</h2></div>
                        <button className='navplush ' onClick={()=>appContext.dispatch({type: "InputOpen"})}><h2>+</h2></button>
                    </div>
                    

                        <div className='sidetodo d-flex '>
                        <Sidebar
                            // done1={done} donehandler={donehandler}
                        />
                            {/* <TodoBody /> */}
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Homepage