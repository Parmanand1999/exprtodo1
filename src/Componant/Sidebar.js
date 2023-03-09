import React, { useContext } from 'react'
import { TodoInput } from '../App'

function Sidebar() {
    const donetask1 = useContext(TodoInput)

    return (
        <div className='sidebtn d-flex flex-column m-5 '>
            <button className='work'><span className='workspan'>work</span></button>
            <button className='study'><span className='studyspan'>study</span></button>
            <button className='entertain'><span className='entertainspan'>entertainment</span></button>
            <button className='faimly'><span className='faimlyspan'>faimly</span></button>

            <div className='donetaskside mt-3'>
                <input className="form-check-input" onClick={() => donetask1.dispatch({ type: "taskdone" })} type="checkbox" />
                {donetask1.taskdone ? <label>Hide Done Task</label> : <b>Hide Done Task</b>}
            </div>
        </div>
    )
}

export default Sidebar