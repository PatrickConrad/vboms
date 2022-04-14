import { useContext, useState } from "react";
import { ContextConsumer } from "state/RootContext";

function VerifyEmailForm({styles, close, setSeeEmail}) {
    const [userEmail, setUserEmail] = useState('');
    const {state, actions} = useContext(ContextConsumer);

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            console.log("Email Verify: ", userEmail);
            await actions.vboms.verify.updateEmail(userEmail);
            if(state.vboms.verify.emailState.type === 'error') return;
            setSeeEmail(true);
            close();
        }
        catch(err){
            console.log("Error updating emails")
        }
    }
    return (
    <>
    {
        state.vboms.verify.emailState.type === 'loading'
        ?
        <h1>Loading...</h1>
        :
        
        <div>
            <div className="formGroup">
                <div className="formPastInfoBox">
                    <div className="formPastInfoLabel">Current Email: </div>
                </div>
                <div className="formPastInfoBox">
                    <div className="formPastInfoData" id="email">{state.vboms.users.user.email}</div>
                </div>
            </div>
            <div className="formGroup">
                <div className="formLabelBox">
                    <label htmlFor="email" className="formLabel">New Email: </label>
                </div>
                <div className="formInputBox">
                    <input type="text" className="fromInput" id="email" placeholder="New user email" onChange={(e)=>{setUserEmail(e.target.value)}}/>
                </div>
            </div>
            <div>
                <button onClick={handleSubmit}>Change</button>
                <button onClick={()=>close()}>Cancel</button>
            </div>
            {
                state.vboms.verify.emailState.type === 'error'
                ?
                <h1>Error updating email</h1>
                :
                null
            }
        </div>

    }
    </>
    );
}

export default VerifyEmailForm;