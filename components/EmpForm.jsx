import AddUserForm from './AddUserForm';
import UpdateUserForm from './UpdateUserForm';

function EmpForm() {
    const flag = true;
    return(
        <>
            {
        <div className='container'>
        { 
            flag ? <AddUserForm/> : <UpdateUserForm/>
        }
            </div>
        }
        </>
    )
    }
export default EmpForm