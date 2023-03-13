import React, { useContext } from 'react'
import { TodoInput } from '../App'
import { HiDotsHorizontal } from 'react-icons/hi'

function TodoBody() {
    const todoBody = useContext(TodoInput)
    // console.log(todoBody +".............")
    return (
        <div className='row'>
            {todoBody.titlediscription.map((item, i) =>
                < div className='col-5 p-2 w-40  h-50 m-2 titledesdiv' key={i} >
                    <div className='row d-flex '>
                        {todoBody.donetask && todoBody.donetaskid === i ? <del className='d-inline  col-sm-4'>{item.title}</del> : <h6 className='d-inline  col-sm-4'>{item.title}</h6>}
                        <div className='col-sm-4'></div>
                        <button className='editdeletbtn d-inline w-25 col-sm-4'>
                            <div onClick={() => todoBody.dispatch({ type: "EDIT_DELETE", i })} className="d-inline-block position-relative"><HiDotsHorizontal />
                            </div>
                            {todoBody.EDIT_DELETE && todoBody.activeID === i ? <div className='position-absolute'> <button type="button" className="edbtn" onClick={() => todoBody.dispatch({ type: "EDIT", i })}>Edit</button><br />
                                <button className="edbtn ">Delete</button>
                            </div> : ""}
                        </button>
                    </div>
                    {todoBody.donetask && todoBody.donetaskid === i ? <div className='row'>
                        <del>{item.discription}</del>
                    </div> : <div className='row'>
                        <p>{item.discription}</p>
                    </div>}
                    <div className=' d-flex row my-2'>
                        <div className='col-sm-8'>
                            <button className='work1 '></button>
                            <button className='study1 ms-1'></button>
                            <button className='entertain1 ms-1'></button>
                            <button className='faimly1 ms-1'></button>
                        </div>
                        <div className='col-sm-4 '>
                            <input type="checkbox" onClick={() => todoBody.dispatch({ type: "donetask", i })}></input><label>Done</label>
                        </div>

                    </div>

                </div >
            )
            }
        </div >
    )
}
export default TodoBody