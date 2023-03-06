import React, { useState } from 'react'
import Sidebar from './Sidebar'
import TagepageForm from './TagepageForm'
import TodoBody from './TodoBody'



function Homepage() {
    const [done, setdone] = useState(true)
    const [popup, setPopup] = useState(false)

    function donehandler() {
        setdone((pre => !pre))
    }
    function pophandler() {
        setPopup((pre => !pre))
    }

    return (
        <>
         
                {popup ? <TagepageForm  popup1={setPopup} /> : <></>}
                <div className='maindiv0'>
                    < div className='maindiv'>
                        <div className='nav d-flex justify-content-between '>
                            <div className='navtodo '><h2>todo</h2></div>
                            <button className='navplush ' onClick={pophandler}><h2>+</h2></button>
                        </div>
                        <div className='sidetodo d-flex '>
                            <Sidebar done1={done} donehandler={donehandler} />
                            <TodoBody />
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Homepage