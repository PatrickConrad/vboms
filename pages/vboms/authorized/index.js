import { setLayout } from "layouts";
import { useContext } from "react";
import { ContextConsumer } from "state/RootContext";

function Authorized() {
    const {state, actions} = useContext(ContextConsumer);
    return (
        <div>
            <h1>{state.vboms.auth.user.username}</h1>
        </div>
    );
}

const metaData = {
    title: "VBOMS Private",
    description: "Private"
}
Authorized.getLayout = (page=Authorized, data=metaData)=> setLayout({page, data, appName: "vboms"})

export default Authorized;