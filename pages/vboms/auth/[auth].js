import Credentials from "components/page-components/global/auth/Credentials";
import { setLayout } from "layouts";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { ContextConsumer } from "state/RootContext";

function Auth(props) {
    const {state, actions} = useContext(ContextConsumer);
    const router = useRouter();
    useEffect(()=>{
        if(!state.vboms.auth.isAuth) return;
        router.push('/vboms/authorized')
    }, [state.vboms.auth.isAuth])
    return (
        <div>
            <Credentials appName='vboms'/>
        </div>
    );
}

const metaData = {
    title: "VBOMS Login/Sign-up",
    description: "Login page for VBOMS website"
}
Auth.getLayout = (page=Auth, data=metaData)=> setLayout({page, data, appName: "vboms"})

export default Auth;
