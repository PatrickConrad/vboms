import VerifyEmailForm from "components/page-components/global/email/VerifyEmailForm";
import ChangePassword from "components/page-components/global/password/changePassword";
import VerifyPhoneForm from "components/page-components/global/phone/VerifyPhoneForm";
import EditUserForm from "components/page-components/global/users/EditUserForm";
import Popup from "components/page-components/global/_Popup";
import MyPopup from "components/page-components/vboms/popups/MyPopup";
import { setLayout } from "layouts";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ContextConsumer } from "state/RootContext";

function Account(props) {
    const [seeEmail, setSeeEmail] = useState(false);
    const [editUser, setEditUser] = useState(false);
    const [updateEmail, setUpdateEmail] = useState(false);
    const [userPhone, setUserPhone] = useState(false);
    const [onPopup, setOnPopup] = useState(false);
    console.log(props)
    const {state, actions} = useContext(ContextConsumer);

    const getCurrUser = async() => {
        try{
            await actions.vboms.users.get();
            return state.vboms.users.user
        }
        catch(err){
            console.log("ERROR", err)
        }
    }
    useEffect(()=>{
        getCurrUser()
        actions.vboms.users.set(state.vboms.auth.user)
        
    }, [state.vboms.auth.user])
    
    
    useEffect(()=>{
        if(state.vboms.auth.user.id === '' || state.vboms.auth.user.id == undefined ) return;
        actions.vboms.users.get(state.vboms.auth.user.id);
        console.log("STATE", state)
    },[state.vboms.auth.user])
    return (
        <div>
             {
                state.vboms.users.loading
                ?
                <h1>Loading...</h1>
                :
            <>
                <div>My Account</div>
                
                {
                    !editUser
                    ?
                    <div>
                        <button onClick={()=>{setEditUser(true)}}>Edit User</button>
                        <div>
                            <div>
                                <label>Username: </label>
                            </div>
                            <div>
                                <p>{state.vboms.users.user.username}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>First Name: </label>
                            </div>
                            <div>
                                <p>{state.vboms.users.user.firstName}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Last Name: </label>
                            </div>
                            <div>
                                <p>{state.vboms.users.user.lastName}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Dark Mode: </label>
                            </div>
                            <div>
                                <p>{state.vboms.users.user.darkMode ? "true" : "false"}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Two-Point Authentication: </label>
                            </div>
                            <div>
                                <p>{state.vboms.users.user.twoPointAuth ? "true" : "false"}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Two-Point Authentication Method: </label>
                            </div>
                            <div>
                                <p>{state.vboms.users.user.twoPointMethod}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <EditUserForm user={state.vboms.users.user} styles={props.styles} close={()=>{setEditUser(false)}}/>
                }
                <ChangePassword/>
                {
                    updateEmail
                    ?
                    <VerifyEmailForm styles={props.styles} close={()=>setUpdateEmail(false)} setSeeEmail={setSeeEmail}/>
                    :
                    <div>
                        <div>Email:</div>
                        <div>{state.vboms.users.user.email}</div>
                        <button onClick={()=>{setUpdateEmail(true)}}>Update Email</button>
                        {
                            !seeEmail
                            ?
                            null
                            :
                            <p>
                                New email has been submitted, please check your inbox to verify your account is real and click the link in the email we sent. When steps are complete refresh this page to see changes.
                            </p>
                        }
                    </div>
                   
                }
                {
                    userPhone
                    ?
                    <VerifyPhoneForm styles={props.styles} close={()=>{setUserPhone(false)}}/>
                    :
                    <div>
                        <div>
                            Phone Number: 
                        </div>
                        <div>
                            {state.vboms.users.user.phoneNumber == 'undefined' ? 'private' : state.vboms.users.user.phoneNumber === ''? 'not shared' : state.vboms.users.user.phoneNumber}
                        </div>
                        <div>
                            <button onClick={()=>setUserPhone(true)}>{state.vboms.auth.user.phoneNumber === '' ? 'Add Phone' : 'Update Phone'}</button>
                        </div>
                    </div>
                }
            </> 
         }
        
            
        </div>
    );
}

const metaData = {
    title: "VBOMS Private",
    description: "Private"
}

Account.getLayout = (page=Account, data=metaData)=> setLayout({page, data, appName: "vboms"})

export default Account;
