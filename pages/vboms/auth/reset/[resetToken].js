import { setLayout } from "layouts";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ContextConsumer } from "state/RootContext";

function ResetToken() {
    const {state, actions} = useContext(ContextConsumer);
    const [pageState, setPageState] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [confirm, setConfirm] = useState('')
    const [resetInfo, setResetInfo] = useState({
        token: '',
        newPassword: ''
    })
    const router = useRouter();
    useEffect(()=>{
        if(router.query.resetToken == undefined) {
            return setPageState('loading')
        }
        setResetInfo({
            ...resetInfo,
            token: router.query.resetToken
        })
        setPageState('setNewPassword')
    }, [router.query])

    const handleReset = async (e) => {
        e.preventDefault();
        try{
            console.log("RESET INFO: ", resetInfo)
            if(confirm !== resetInfo.newPassword) {
                console.log("Passwords must match");
                return;
            }
            await actions.vboms.auth.resetPassword(resetInfo);
            setPageState('loading')
        }
        catch(err){
            console.log("Error Message: ", err.message)
        }
    }

    useEffect(()=>{
        if(state.vboms.auth.resetPassword.success){
            return router.push('/vboms/auth/login');
        }
        return;
    }, [state.vboms.auth.resetPassword])

    return (
        <div>
            {
                pageState === 'loading'
                ?
                <h1>Loading...</h1>
                :
                pageState === 'setNewPassword'
                ?
                <div>
                    <div>
                        <div>
                            <label htmlFor="newPassword">New Password: </label>
                        </div>
                        <div>
                            {
                                showPass
                                ?
                                <input type="text" id="newPassword" onChange={(e)=>setResetInfo({...resetInfo, newPassword: e.target.value})} placeholder="Add new password"/>
                                :
                                <input type="password" id="newPassword" onChange={(e)=>setResetInfo({...resetInfo, newPassword: e.target.value})} placeholder="Add new password"/>
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="confirmNewPassword">Confirm New Password: </label>
                        </div>
                        <div>
                            {
                                showPass
                                ?
                                <input type="text" id="confirmNewPassword" onChange={(e)=>setConfirm(e.target.value)} placeholder="Confirm password"/>
                                :
                                <input type="password" id="confirmNewPassword" onChange={(e)=>setConfirm(e.target.value)} placeholder="Confirm password"/>
                            }
                        </div>
                    </div>
                    <div>
                        <button onClick={handleReset}>Change Password</button>
                    </div>
                </div>
                :
                <h1>Password has be en changed redirecting to login page</h1>
            }
        </div>
    );
}

const metaData = {
    title: "VBOMS Login/Sign-up",
    description: "Login page for VBOMS website"
}
ResetToken.getLayout = (page=ResetToken, data=metaData)=> setLayout({page, data, appName: "vboms"})


export default ResetToken;