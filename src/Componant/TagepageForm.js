import React from 'react'

function TagepageForm() {
    return (
        <div className='transparent'>
            <div className='maindivtf'>
                <div className='maindiv2'>
                    <form>
                        <div className='navbtn d-flex  justify-content-between'>
                            <button className='cancelbtn'>Cancel</button>
                            <button className='addbtn'>Add</button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="add a title..."
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Description</label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={4}
                                placeholder="add a description"
                                defaultValue={""}
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

export default TagepageForm