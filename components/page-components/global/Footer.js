import { useRouter } from "next/router";
import { useContext, useEffect, useMemo, useState } from "react";
import { ContextConsumer } from "state/RootContext";

function Footer({styles, app}) {
    const {state, actions} = useContext(ContextConsumer);
    const router = useRouter();
    let isLoading = useMemo(()=> state.vboms.loading ? `${styles.global.footer} ${styles.global.loading}` : styles.global.footer, [state.vboms.loading])
    return (
        <div className={isLoading}>
            This is your footer.
        </div>
    );
}

export default Footer;