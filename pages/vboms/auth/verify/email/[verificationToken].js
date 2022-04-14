import { setLayout } from "layouts";
import { useRouter } from "next/router";
import { useContext, useEffect, useMemo, useState } from "react";
import { ContextConsumer } from "state/RootContext";

function VerificationToken() {
    const {state, actions} = useContext(ContextConsumer);
    // const [token, setToken] = useState('');

    const router = useRouter();
    const pageState = useMemo(()=>{
        if(!state.vboms.verify.emailState.type === 'verifying'){
            return (
                <h1>Verifying</h1>
            )
        }
        if(!state.vboms.verify.emailState.type === 'error'){
            return(
                <h1>Error verifying email</h1>
            )
        }
        return (
            <div>
                <h1>Email Verified</h1>
                <p>Redirecting to {state.vboms.auth.isAuth ? "account page..." : "login page... "}</p>
            </div>
            )
    }, [state.vboms.verify.emailState])
    useEffect(()=>{
        if(router.query.verificationToken == undefined) return;
        console.log("verification TOken: ", router.query.verificationToken)
        const hasAuth = state.vboms.auth.isAuth
        actions.vboms.verify.verifyEmail(router.query.verificationToken, hasAuth);
        console.log("isAuth", state.vboms.auth.isAuth)
        if(state.vboms.auth.isAuth) return router.push('/vboms/authorized/account');
        router.push('/vboms/auth');
    }, [router.query])
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