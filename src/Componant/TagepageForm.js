import React, { useContext } from 'react'
import { TodoInput } from '../App';
function TagepageForm() {
    const appContext = useContext(TodoInput)
    // console.log('...........................................appcontext', appContext)
    return (
        <div className='transparent'>
            <div className='maindivtf'>
                <div className='maindiv2'>
                    <form onSubmit={(e) => (e.preventDefault())}>
                        <div className='navbtn d-flex  justify-content-between'>
                            <button className='cancelbtn' onClick={() => appContext.dispatch({ type: "Cancel" })}>Cancel</button>
                            <button className='addbtn' onClick={() => appContext.dispatch({ type: "Addbtn" })
                            }>Add</button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Title</label>
                            <input
                                type="text"
                                value={appContext.title}
                                onChange={(e) => {
                                    console.log('..............................valuetitle', e.target.value)
                                    appContext.dispatch({
                                        type: "Title",
                                        title: e.target.value
                                    })
                                }}
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="add a title..."
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Description</label>
                            <textarea
                                className="form-control"
                                value={appContext.discription}
                                onChange={(e) => appContext.dispatch({
                                    type: "Discription",
                                    discription: e.target.value
                                })}
                                id="exampleFormControlTextarea1"
                                rows={4}
                                placeholder="add a description"
                            />
                        </div>
                        <div>
                            <label>Tags</label>
                            <div className='tagbtn'>
                                <div className=' d-flex  m-3 justify-content-between '>
                                    <button className='work'><span className='workspan'>work</span></button>
                                    <button className='study'><span className='studyspan'>study</span></button>
                                    <button className='entertain'><span className='entertainspan'>entertainment</span></button>
                                    <button className='faimly'><span className='faimlyspan'>faimly</span></button>
                                </div>

                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default TagepageForm;
