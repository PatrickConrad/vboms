import { useContext } from "react";
import { ContextConsumer } from "state/RootContext";

function OrganizationConsent({styles, app}) {
    const {state, actions} = useContext(ContextConsumer);
    return (
        <div>
            <div>
                <h2>{state.vboms.orgs.org.name ?? "Can't retrieve Name "} Requires Consent</h2>
            </div>
            <div>
                <p>Please Consent</p>
            </div>
            <div>
                <h2>{state.vboms.orgs.org.name ?? "Can't retrieve Name "} Optional Consent</h2>
            </div>
            <div>
                <p>Please Consent</p>
            </div>
        </div>
    );
}

export default OrganizationConsent;