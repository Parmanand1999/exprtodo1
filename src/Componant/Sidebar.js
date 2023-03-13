import React, { useContext } from 'react'
import { TodoInput } from '../App'

function Sidebar() {
    const donetask1 = useContext(TodoInput)

    return (
        <div className=' col my-3 '>
            <div className='col-sm-3 my-2'><button className='work'><span className='workspan'>work</span></button></div>
            <div className='col-sm-3 my-2'><button className='study'><span className='studyspan'>study</span></button></div>
            <div className='col-sm-3 my-2'><button className='entertain'><span className='entertainspan'>entertainment</span></button></div>
            <div className='col-sm-3 my-2 '><button className='faimly'><span className='faimlyspan'>faimly</span></button></div>





            <div className='donetaskside mt-3'>
                <input className="form-check-input" onClick={() => donetask1.dispatch({ type: "taskdone" })} type="checkbox" />
                {donetask1.taskdone ? <label>Hide Done Task</label> : <b>Hide Done Task</b>}
            </div>
        </div>
    )
}

export default Sidebar