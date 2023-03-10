import React, { useContext } from 'react'
import { TodoInput } from '../App'

function TodoBody() {
    const todoBody = useContext(TodoInput)
    // console.log(todoBody +".............")
    return (
        <>
            < div className=' maindivtag d-flex ' >
                {todoBody.titlediscription.map((item, index) =>

                    <div className='titledesdiv '
                        key={index}
                    >
                        <div className='tagbtn1 d-flex  justify-content-around'>

                            <h6>{item.title}</h6>
                            <button className='editdeletbtn'>
                                <h3 className='editdeletbtn2' onClick={()=>todoBody.dispatch({type:"EDIT_DELETE"})}>...</h3>
                               {todoBody.EDIT_DELETE ? <div className='editedeletebtn'> <button type="button" className="edbtn">Edit</button><br />
                                    <button className="edbtn ">Delete</button>
                                </div>:""}
                            </button>
                        </div>
                        <div>
                            <p>{item.discription}</p>
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
                )}
            </div >
        </>
    )
}
export default TodoBody