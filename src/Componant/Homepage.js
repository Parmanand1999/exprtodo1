import React, { useContext } from 'react';
import { TodoInput } from '../App';
import { GoPlus } from 'react-icons/go';
import Sidebar from './Sidebar'
import TagepageForm from './TagepageForm'
import TodoBody from './TodoBody';
function Homepage() {
    const appContext = useContext(TodoInput);


    return (
        <>

            {appContext.Homepage ? <TagepageForm /> : ""}


            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-sm-3 display-5'>Todo</div>
                    <div className='col-sm-7'></div>
                    <div className='col-sm-2' onClick={() => appContext.dispatch({ type: "Homepage" })}><h3><GoPlus /></h3> </div>
                </div>

                <div className='row'>

                    <div className='col-sm-3'><Sidebar /></div>
                    <div className='col-sm-9'><TodoBody /></div>
                </div>

            </div>

        </>
    )
}

export default Homepage