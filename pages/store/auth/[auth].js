import Credentials from "components/page-components/global/auth/Credentials";
import { setLayout } from "layouts";
import { useContext, useEffect } from "react";
import { ContextConsumer } from "state/RootContext";

function Auth(props) {
    const {state, actions} = useContext(ContextConsumer);
    useEffect(()=>{
        actions.vboms.organizations.getOrganizations()
        console.log("test actions : ", actions.vboms.auth.register())
    }, [])
    const {app} = props;
    return (
        <div>
            <Credentials app={app} />
        </div>
    );
}

const metaData={
    title: "Store Auth",
    description: "Virtual Business Operations Management Systems is pioneering new technology that is directly intended to make owning and operating a business in the modern world as easy as ever"
}
Auth.getLayout = (page=Auth, data=metaData)=> setLayout({page, data, appName: "store"})

export default Auth;