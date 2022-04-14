import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { ContextConsumer } from "state/RootContext";

function Dropdown({styles, app, sandard, options}) {
    const {state, actions} = useContext(ContextConsumer);
    const authState = state[app].auth;

    const router = useRouter();
    const onLogout = async () => {
        await actions[app].auth.logout(authState)
        return router.push(`/${app}/`);
    }

    
    
    console.log("STATEEEE", state[app].auth.user.username)
    return (
        <div className={styles.global.dropdown}> {/* className={styles.global.dropdown} */}
            <div className={styles.global.standardView}>
                Hi {state[app].auth.user.username}&nbsp;<span className={styles.global.dropdownArrow}>v</span>
            </div>
            <div className={styles.global.dropdownOptions}>
                <div className={styles.global.dropdownOption}>
                    <Link href={`/${app}/authorized/`}>Profile</Link>
                </div>
                <div className={styles.global.dropdownOption}>
                    <Link href={`/${app}/authorized/account`}>Settings</Link>
                </div>
                <div className={styles.global.dropdownOption}>
                    <Link href={`/${app}/authorized/organizations`}>
                        {
                            state[app].auth.user.organizations == undefined || state[app].auth.user.organizations.length < 1
                            ?
                            "Create Org"
                            :
                            "Manage Orgs"
                        }
                    </Link>
                </div>
                <div className={styles.global.dropdownOption}>
                    <button onClick={onLogout} className={styles.global.logoutBtn}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;