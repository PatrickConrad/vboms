import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ContextConsumer } from "state/RootContext";
import Dropdown from "../Dropdown";

function AuthBtn({app, styles}) {
    const appPath = !app ? '' : app === "default" ? '' : `/${app}`
    const {state, actions} = useContext(ContextConsumer);
    const router = useRouter();

    const logout = async () => {
            await actions[app].auth.logout()
            return router.push(`${appPath}/`);
        }

    const login = async() => {
        return router.push(`${appPath}/auth`)
    }

    const register = () => {
        return router.push(`${appPath}/auth/register`)
    }
    useEffect(()=>{
       actions[app].auth.checkAuth()
    }, [])
    return (
        <>
        {
            state[app].auth.isAuth === false
            ?
            <div className={styles.global.authOptions}>
                <button className={styles.global.authOptionBtn} onClick={()=>login()} >
                    Login
                </button>
                <span>{" | "}</span>
                <button className={styles.global.authOptionBtn} onClick={()=>register()} >
                    Register
                </button>
            </div>
            :
            <div className={styles.global.authDropdown}>
                <Dropdown app={app} styles={styles}/>
            </div>
        }
        </>
    );
}

export default AuthBtn;