import { useContext } from "react";
import { ContextConsumer } from "state/RootContext";

function OrganizationLogin() {
    const {state, actions} = useContext(ContextConsumer)
    return (
        <div>

        </div>
    );
}

export default OrganizationLogin;