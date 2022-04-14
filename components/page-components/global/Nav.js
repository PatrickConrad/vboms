import Link from "next/link";
import authComponents from "./auth";
import setNav from "utils/helpers/setNav";
import { useContext, useEffect, useState } from "react";
import { ContextConsumer } from "state/RootContext";
import { useRouter } from "next/router";

function Nav({app, styles}) {
    const {AuthBtn} = authComponents;
    const {state, actions} = useContext(ContextConsumer);
    const router = useRouter();
    const [navBar, setNavBar] = useState()
    const [authText, setAuthText] = useState('login')
    const [authRedirectUrl, setAuthRedirectUrl] = useState('/')

    useEffect(()=>{
        setNavBar(setNav(app, styles))
    }, [app])
    return (
        <div  className={styles.global.navBar}>
            {navBar}
            <AuthBtn app={app} styles={styles}/>
        </div>
    );
}

export default Nav;