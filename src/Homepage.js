import React from 'react'

function Homepage() {
    return (
        <div className='maindiv  '>
            <div className='nav d-flex justify-content-between '>
                <div className='navtodo '><h2>todo</h2></div>
                <button className='navplush  '><h2>+</h2></button>
            </div>
            <div className='sidetodo d-flex'>
                <div className='sidebtn d-flex flex-column m-5 '>
                    <button className='work'><span className='workspan'>work</span></button>
                    <button className='study'><span className='studyspan'>study</span></button>
                    <button className='entertain'><span className='entertainspan'>entertainment</span></button>
                    <button className='faimly'><span className='faimlyspan'>faimly</span></button>

                    <div className='donetaskside mt-3'>
                        <input className="form-check-input" type="checkbox" />
                        <label>Hide Done Task</label>
                    </div>
                </div>

                <div className=' maindivtag d-flex '>
                    <div className='titledesdiv'>
                        <div className='tagbtn1 d-flex m-2 justify-content-between'>
                            <h6>The first task title</h6>
                            <button className='editdeletbtn mx-5'><h3 className='editdeletbtn2'>...</h3></button>
                        </div>
                        <div><p>lorem vdbfgb dfvfd vdfvdf rwfgtw ghb gewfwe tvfgb fasdc vdgv </p></div>
                        <div className='taskdone'><input type="checkbox" ></input><label>Done</label></div>
                    </div>
                    <div className='titledesdiv1'>
                        <div className='tagbtn2 d-flex m-2 justify-content-between'>
                            <h6>The first task title</h6>
                            <button className='editdeletbtn1 mx-5'><h3 className='editdeletbtn3'>...</h3></button>
                        </div>
                        <div><p>lorem vdbfgb dfvfd vdfvdf rwfgtw ghb gewfwe tvfgb fasdc vdgv </p></div>
                        <div className='taskdone1'><input type="checkbox" ></input><label>Done</label></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage