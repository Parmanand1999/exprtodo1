import React, { useContext } from 'react'
import { TodoInput } from '../App'

function TodoBody() {
    const todoBody = useContext(TodoInput)
    // console.log(todoBody +".............")
    return (
        <div className='row'>
            {todoBody.titlediscription.map((item, index) =>
                < div className=' maindivtag mx-5 d-inline' >

                    <div className='titledesdiv col-6'
                        key={index}
                    >
                        <div className='tagbtn1 row'>
                            <div className='col'><h6>{item.title}</h6></div>
                            <div className='col'><button className='editdeletbtn col '>
                                <h3 className='editdeletbtn2 ' onClick={() => todoBody.dispatch({ type: "EDIT_DELETE", index })}>...</h3>
                                {todoBody.EDIT_DELETE ? <div> <button type="button" className="edbtn" onClick={() => todoBody.dispatch({ type: "EDIT", index })}>Edit</button><br />
                                    <button className="edbtn ">Delete</button>
                                </div> : ""}
                            </button></div>

                        </div>
                        <div className='row'>
                            <p>{item.discription}</p>
                        </div>
                        <div className=' d-flex col mb-2 justify-content-between'>
                            <div className='box '>
                                <button className='work1 '></button>
                                <button className='study1 '></button>
                                <button className='entertain1'></button>
                                <button className='faimly1'></button>
                            </div>
                            <div className='taskdone '><input type="checkbox" ></input><label>Done</label>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </div>
    )
}
export default TodoBody