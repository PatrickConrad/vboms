import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ContextConsumer } from "state/RootContext";

function AuthBtn({app, styles}) {
    const appPath = !app ? '' : app === "default" ? '' : `/${app}`
    const {state, actions} = useContext(ContextConsumer);
    const router = useRouter();

    const logout = async () => {
            await actions.auth.logout()
            return router.push(`${appPath}/`);
        }

    const login = async() => {
        return router.push(`${appPath}/auth`)
    }

    useEffect(()=>{
        
    }, [])
    return (
        <>
        {
            state[app].auth.isAuth === false
            ?
            <button onClick={()=>login()} className={styles.global.login}>
                Login | Sign-up
            </button>
            :
            <button onClick={()=>logout()} className={styles.global.logout}>
                Logout
            </button>
        }
        </>
    );
}

export default AuthBtn;