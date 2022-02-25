import { useRouter } from "next/router";
import { useContext, useEffect, useMemo, useState } from "react";
import { ContextConsumer } from "state/RootContext";
import setLogo from "utils/frontend/helpers/setLogo";
import setNav from "utils/frontend/helpers/setNav";
import Nav from "./Nav";

function Header({app, styles}) {
    const {state, actions} = useContext(ContextConsumer);
    const router = useRouter();
    let isLoading = useMemo(()=> state.vboms.loading ? `${styles.global.header} ${styles.global.loading}` : styles.global.header, [state.vboms.loading])
    return (
        <div className={isLoading}>
            {setLogo(app, styles, router)}
            <Nav app={app} styles={styles}/>
        </div>
    );
}

export default Header;