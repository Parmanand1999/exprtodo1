import React from 'react'

function Sidebar({ done1, donehandler }) {
    return (
        <div className='sidebtn d-flex flex-column m-5 '>
            <button className='work'><span className='workspan'>work</span></button>
            <button className='study'><span className='studyspan'>study</span></button>
            <button className='entertain'><span className='entertainspan'>entertainment</span></button>
            <button className='faimly'><span className='faimlyspan'>faimly</span></button>

            <div className='donetaskside mt-3'>
                <input className="form-check-input" onClick={donehandler} type="checkbox" />
                {done1 ? <b>Hide Done Task</b> : <label>Hide Done Task</label>}
            </div>
        </div>
    )
}

export default Sidebar