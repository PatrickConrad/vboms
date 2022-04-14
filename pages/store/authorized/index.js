import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Task() {
    const router = useRouter();
    const [pageState, setPageState] = useState('loading');
    const [taskType, setTaskType] = useState('');
    useEffect(()=>{
        if(router.query.task != undefined){
            return setTaskType(router.query.task)
        }
    },[router.query])
    return (
        <div>
            {
                pageState === 'loading' || taskType === ''
                ?
                    <>
                        <h1>Loading.....</h1>
                    </>
                :
                taskType === "add-new-product"
                ?
                    <>
                        <h1>Add Product</h1>
                    </>
                :
                taskType === 'add-new-employee'
                ?
                    <>
                        <h1>Add Employee</h1>
                    </>
                :
                null
            }
        </div>
    );
}

export default Task;