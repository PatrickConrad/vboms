import { useContext, useState } from "react";
import { ContextConsumer } from "state/RootContext";

function ChangePassword() {
    const {state, actions} = useContext(ContextConsumer);
    const [user, setUser] = useState({
        id: state.vboms.auth.user.id,
        currentPassword: '',
        newPassword: ''
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const changePassword = async () => {
        try{
            await actions.vboms.users.update(user)
            setUser({
                currentPassword: '',
                newPassword: ''
            })
            await actions.vboms.users.get(state.vboms.auth.user);

        }
        catch(err){
            console.log("Error changing password: ", err.message)
        }
    }
    return (
        <div>
                        <div className="changePasswordTitle">Change Password</div>
                        <div>
                            <div>
                                <label htmlFor="currentPassword">Current Password: </label>
                            </div>
                            <div>
                                {
                                    !showPassword
                                    ?
                                    <input onChange={(e)=>{setUser({...user, currentPassword: e.target.value})}} type="password" id="currentPassword" className="vbomsFormInput" placeholder="Enter current password..." />
                                    :
                                    <input onChange={(e)=>{setUser({...user, currentPassword: e.target.value})}} type="text" id="currentPassword" className="vbomsFormInput" placeholder="Enter current password..." />
                                }
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="newPassword">New Password: </label>
                            </div>
                            <div>
                                {
                                    !showPassword
                                    ?
                                    <input onChange={(e)=>{setUser({...user, newPassword: e.target.value})}} type="password" id="newPassword" className="vbomsFormInput" placeholder="Enter a new password..." />
                                    :
                                    <input onChange={(e)=>{setUser({...user, newPassword: e.target.value})}} type="text" id="newPassword" className="vbomsFormInput" placeholder="Enter a new password..." />
                                }
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="confirmNewPassword">Confirm New Password: </label>
                            </div>
                            <div>
                                {
                                    !showPassword
                                    ?
                                    <input onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" id="confirmNewPassword" className="vbomsFormInput" placeholder="Confirm new password..." />
                                    :
                                    <input onChange={(e)=>{setConfirmPassword(e.target.value)}} type="text" id="confirmNewPassword" className="vbomsFormInput" placeholder="Confirm new password..." />
                                }
                            </div>
                        </div>
                        <div>
                            <button onClick={()=>setShowPassword(!showPassword)}>Show Password</button>
                        </div>
                        <div>
                            <button onClick={changePassword}>Change</button>
                        </div>
                    </div>
    );
}

export default ChangePassword;