import { setLayout } from "layouts";
import { useRouter } from "next/router";
import { useContext, useEffect, useMemo, useState } from "react";
import { ContextConsumer } from "state/RootContext";

function VerificationToken() {
    const {state, actions} = useContext(ContextConsumer);
    // const [token, setToken] = useState('');

    const router = useRouter();
    const pageState = useMemo(()=>{
        if(!state.vboms.auth.loginState.type === 'logging in'){
            return (
                <h1>Logging in...</h1>
            )
        }
        if(!state.vboms.auth.loginState.type === 'error'){
            return(
                <h1>Error logging in</h1>
            )
        }
        return (
            <div>
                <h1>Login confirmed</h1>
                <p>Redirecting to profile...</p>
            </div>
            )
    }, [state.vboms.auth.loginState])

    const handleLogin = async () => {
        try {
            await actions.vboms.auth.twoPointLogin({token: router.query.loginToken, type: 'email'});
            console.log("isAuth", state.vboms.auth.isAuth)
            // setTimeout(()=> router.push('/vboms/auth'), 2500)
        }
        catch(err){
            console.log("ERROR: ", err.message)
        }
    }
    useEffect(()=>{
        if(router.query.loginToken == undefined) return;
        console.log("login TOken: ", router.query.loginToken)
        handleLogin()
    }, [router.query])

    useEffect(()=>{
        if(!state.vboms.auth.isAuth) return;
        router.push('/vboms/authorized')
    }, [state.vboms.auth.isAuth])
    return (
        <div>
            {
                pageState
            }
        </div>
    );
}


const metaData={
    title: "VBOMS Email Verify",
    description: "Virtual Business Operations Management Systems is pioneering new technology that is directly intended to make owning and operating a business in the modern world as easy as ever"
}
VerificationToken.getLayout = (page=VerificationToken, data=metaData)=> setLayout({page, data, appName: "vboms"})

export default VerificationToken;