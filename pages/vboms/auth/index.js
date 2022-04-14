import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { ContextConsumer } from "state/RootContext";

function Index() {
    const router = useRouter();
    const {state, actions} = useContext(ContextConsumer);
    useEffect(()=>{
        state.vboms.auth.isAuth ? router.push('/vboms/authorized') : null
        router.push(`${router.route}/login`);
    }, [])
    return (
        <div>

        </div>
    );
}

export default Index;