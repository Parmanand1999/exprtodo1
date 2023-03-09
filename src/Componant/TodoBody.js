import React, { useContext } from 'react'
import { TodoInput } from '../App'

function TodoBody() {
    const todoBody = useContext(TodoInput)

    return (
        <>
            < div className=' maindivtag d-flex ' >
                {/* {stdata.map((item, index) => { */}
                <div className='titledesdiv '
                // key={index}
                >
                    <div className='tagbtn1 d-flex m-2 justify-content-around'>
                        <h6>The first task title</h6>
                        {/* <h6>{item.title}</h6> */}
                        <button className='editdeletbtn'>
                            <h3 className='editdeletbtn2'>...</h3>
                        </button>
                    </div>
                    <div>
                        <p>lorem vdbfgb dfvfd vdfvdf rwfgtw ghb  </p>
                        {/* <p>{item.discription}</p> */}
                    </div>
                    <div className='d-flex justify-content-between mb-2 '>
                        <div className='box d-flex mx-3'>
                            <button className='work1 '></button>
                            <button className='study1 '></button>
                            <button className='entertain1'></button>
                            <button className='faimly1'></button>
                        </div>
                        <div className='taskdone '><input type="checkbox" ></input><label>Done</label>
                        </div>
                    </div>
                </div>
                {/* })} */}
            </div >
        </>
    )
}
export default TodoBody