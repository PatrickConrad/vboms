import { useRouter } from "next/router";
import { useContext, useEffect, useMemo, useState } from "react";
import { ContextConsumer } from "state/RootContext";
import setLogo from "utils/helpers/setLogo";
import setNav from "utils/helpers/setNav";
import Nav from "./Nav";
import SubHeader from "./SubHeader";

function Header({app, styles}) {
    const {state, actions} = useContext(ContextConsumer);
    const router = useRouter();
    let isLoading = useMemo(()=> state[app].loading ? `${styles.global.header} ${styles.global.loading}` : styles.global.header, [state[app].loading])
    return (
        <div className={state[app].subHeader == undefined || false ? 'headerContainer' : styles.global.headerContainer}>
            <div className={state[app].subHeader == undefined || false ? isLoading : styles.global.mainHeader}>
                {setLogo(app, styles, router)}
                <Nav app={app} styles={styles}/>
            </div>
            {
                state[app].subHeader == undefined || false 
                ? 
                    null 
                :
                   <>
                        <SubHeader app={app} styles={styles}/>
                   </>
            }

        </div>
    );
}

export default Header;