import { useContext } from "react";
import { ContextConsumer } from "state/RootContext";

function Organizations() {
    const {state, actions} = useContext(ContextConsumer);
    return (
        <div>

        </div>
    );
}

export default Organizations;