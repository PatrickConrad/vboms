import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { ContextConsumer } from "state/RootContext";
import getGoogleURL from "utils/google/getGoogleUrl";

function Credentials({appName}) {
    const router = useRouter();
    const {state, actions} = useContext(ContextConsumer);
    const [authType, setAuthType] = useState("");
    const [pageState, setPageState] = useState("loading");
    const [user, setUser] = useState({});
    const [confirmPass, setConfirmPass] = useState({});
    const [phoneVerify, setPhoneVerify] = useState({});
    const [pin, setPin] = useState('');
    const [error, setError] = useState({});

    const app = /(?<=\/).*(?=\/auth.*)/g.exec(router.route);

    console.log("TOURERER:FDS", router)
    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            console.log("USER: ", user)
            if(authType === 'login'){
                await actions[app[0]].auth.login(user)
                return router.push(`/${app[0]}/auth/two-point`)
                
                
            }
            else if(authType === 'register'){
                if(user.password !== confirmPass){
                    return setError({
                        hasError: true,
                        type: 'passwordMatchingError',
                        errorMessage: 'Passwords must match'
                    })
                }
                await actions[app[0]].auth.register(user)
                if(state[app[0]].auth.success) setPageState('verifyEmail')
                else{
                    setError({
                        hasError: true,
                        type: 'registerError',
                        errorMessage: 'Error Registering'});
                }
            }
            else if(authType === 'forgot-password'){
                await actions[app[0]].auth.forgotPassword(user)
                if(state[app[0]].auth.success) {
                    setPageState('checkEmail')
                }
                else{
                    setError({
                        hasError: true,
                        type: 'forgotPasswordError',
                        errorMessage: 'Error getting forgot-password verification'})
                }
            }
            else if(authType === 'change-password'){
                await actions[app[0]].auth.changePassword(user)
                if(state[app[0]].auth.success) {
                    router.push(`/${app[0]}/auth/login`)
                }
                else{
                    setError({
                        hasError: true,
                        type: 'changePasswordError',
                        errorMessage: 'Error changing passwords'})
                }
            }
            else{
                await actions[app[0]].auth.phoneVerify(phoneVerify)
                if(state[app[0]].auth.success){
                    router.push(`/${app[0]}/authorized`);
                }
                else{
                    setError({
                        hasError: true,
                        type: 'verifyPhoneError',
                        errorMessage: 'Error verifying phone'});
                }
            }
        }
        catch(err){
            console.log(`${authType} Error: `, err)
        }
    }

    const handleVerifyPin = async () => {
        try{
            await actions[app[0]].auth.twoPointLogin({token: state[app[0]].auth.token, pin, type: state.vboms.auth.twoPointType})
            console.log("PATH", window.location.pathname);
            return router.reload(window.location.pathname)
        }
        catch(err){
            console.log("ERROR VERIFYING PIN: ", err.message)
        }
    }

    useEffect(()=>{
        if(router.query.auth != undefined){
            setPageState('loaded');
            if(state[app[0]].auth.twoPointComplete){
                return router.push(`/${app[0]}/authorized`)
            }
            setAuthType(router.query.auth);
            if(router.query.auth === 'two-point'){
                if(!state[app[0]].auth.twoPoint){
                    return router.push(`/${app[0]}/authorized`) 
                }
                if(state[app[0]].auth.twoPointType === 'phone'){
                return  setPageState('addPin')
                }
                if(state[app[0]].auth.twoPointComplete){
                    setPageState('verifyed')
                    return router.push(`/${app[0]}/authorized`)
                }
                return setPageState('checkEmail')
            }
        }
    }, [router.query])

    return (
        <div>
            {
                
                pageState === 'loading' 
                ?
                    <h1>LOADING...</h1>
                :
                pageState === 'verifyEmail'
                ?
                    <h1>Please verify your email by clicking on the link that was sent to you</h1>
                :
                pageState === 'checkEmail'
                ?
                    <h1>Please check your email for more instructions to reset your password</h1>
                :
                pageState === 'checkEmail' && state[app[0]].auth.twoPoint && state[app[0]].auth.twoPointType === 'email'
                ?
                    <h1>Please check your email to login using link</h1>
                :
                pageState === 'addPin'
                ?
                    <div>
                        <div>
                            <label htmlFor="pin">Pin: </label>
                        </div>
                        <div>
                            <input type='text' onChange={(e)=>{setPin(e.target.value)}} placeholder="Enter pin"/>
                        </div>
                        <div>
                            <button onClick={handleVerifyPin}>Verify</button>
                        </div>
                    </div>
                :
                    <>
                        <h1>{authType.charAt(0).toUpperCase() + authType.slice(1)}</h1>
                        <div>
                            {
                                authType ==='login'
                                ?
                                <a href={getGoogleURL()}>Login with Google</a>
                                :
                                authType === 'register'
                                ?
                                <a href={getGoogleURL()}>Sign up with Google</a>
                                :
                                null
                            }
                            <form onSubmit={handleSubmit}>                                    
                                <div className="authFormGroup">
                                    <div className="authFormLabelBox">
                                        {
                                            authType === 'login' || authType === 'forgot-password'
                                            ?
                                                <label htmlFor="identifier" className="authFormLabel">Username, Phone Number or Email: </label>
                                            :
                                            null
                                        }
                                        {
                                        authType === 'phone-verify'
                                        ?
                                            <label htmlFor="pin" className="authFormLabel">Pin: </label>
                                        :
                                            null
                                        }
                                        {
                                        authType === 'register'
                                        ?
                                            <label htmlFor="email" className="authFormLabel">Email: </label>
                                        :
                                            null
                                        }
                                    </div>
                                    <div className="authFormInputBox">
                                    {
                                        authType === 'login' || authType === 'forgot-password'
                                        ?
                                            <input onChange={(e)=>{setUser({...user, identifier: e.target.value})}} type="text" id="identifier" className="authFormTextInput" placeholder="Please enter your username, phone number or email..."/>
                                        :
                                        authType === 'phone-verify'
                                        ?
                                            <input onChange={(e)=>{setUser({...phoneVerify, pin: e.target.value})}} type="text" id="pin" className="authFormTextInput" placeholder="Pin..."/>
                                        :
                                            <input onChange={(e)=>{setUser({...user, email: e.target.value})}} type="text" id="email" className="authFormTextInput" placeholder="Please enter your email..."/>
                                    }
                                    </div>
                                </div> 
                                {
                                    authType === 'register'
                                    ?
                                        <>
                                            <div className="authFormGroup">
                                                <div className="authFormLabelBox">
                                                    <label htmlFor="username" className="authFormLabel">Username: </label>
                                                </div>
                                                <div className="authFormInputBox">
                                                    <input onChange={(e)=>{setUser({...user, username: e.target.value})}} type="text" id="username" className="authFormTextInput" placeholder="Please enter your username..."/>
                                                </div>
                                            </div>
                                            <div className="authFormGroup">
                                                <div className="authFormLabelBox">
                                                    <label htmlFor="firstName" className="authFormLabel">First name: </label>
                                                </div>
                                                <div className="authFormInputBox">
                                                    <input onChange={(e)=>{setUser({...user, firstName: e.target.value})}} type="text" id="firstName" className="authFormTextInput" placeholder="Please enter your first name..."/>
                                                </div>
                                            </div>
                                            
                                            <div className="authFormGroup">
                                                <div className="authFormLabelBox">
                                                    <label htmlFor="lastName" className="authFormLabel">Last name: </label>
                                                </div>
                                                <div className="authFormInputBox">
                                                    <input onChange={(e)=>{setUser({...user, lastName: e.target.value})}} type="text" id="lastName" className="authFormTextInput" placeholder="Please enter your last name..."/>
                                                </div>
                                            </div>
                                        </>
                                    :
                                        null
                                }
                                {
                                    authType === 'login' || authType==='register'
                                    ?
                                        <div className="authFormGroup">
                                            <div className="authFormLabelBox">
                                                <label htmlFor="password" className="authFormLabel">Password: </label>
                                            </div>
                                            <div className="authFormInputBox">
                                                <input onChange={(e)=>{setUser({...user, password: e.target.value})}} type="password" id="password" className="authFormTextInput" placeholder="Please enter your password..."/>
                                            </div>
                                        </div>
                                    :
                                        null
                                    }
                                    {
                                        authType === 'register'
                                        ?
                                            <div className="authFormGroup">
                                                <div className="authFormLabelBox">
                                                    <label htmlFor="repassword" className="authFormLabel">Confirm Password: </label>
                                                </div>
                                                <div className="authFormInputBox">
                                                    <input onChange={(e)=>{setConfirmPass(e.target.value)}} type="password" id="repassword" className="authFormTextInput" placeholder="Please confirm your password..."/>
                                                </div>
                                            </div>
                                        :
                                            null
                                    }
                                    <button type="submit">{authType === 'login' ? 'Login' : authType === 'forgot-password' ? 'Send': authType === 'verify' ? 'Verify' : 'Register'}</button>
                            </form>
                            {
                                authType === 'login' || authType === 'register'
                                ?
                                <p>Having problems logging in? <Link href={`/${app[0]}/auth/forgot-password`}>Click Here</Link></p>
                                :
                                null
                            }
                        </div>
                    </>
            }                    
        </div>
    );
}

export default Credentials;