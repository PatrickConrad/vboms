import { useContext } from "react";
import { ContextConsumer } from "state/RootContext";

function MobileMenu({links, styles}) {
    const {state, actions} = useContext(ContextConsumer)
    return (
        <div className={styles.mobileMenu}>
            {
                links.map((link)=>{
                    return (
                        <Link className={styles.mobileMenuLink} to={link.to}>{link.text}</Link>
                    )
                })
            }
        </div>
    );
}

export default MobileMenu;