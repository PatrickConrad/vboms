import {useContext, useRef} from 'react';
import { ContextConsumer } from 'state/RootContext';

const Popup = ({myPopup, setPopup, closeOnOutsideClick, styles}) => {
    const popupRef = useRef();
    const {state, actions} = useContext(ContextConsumer);

    const handleClick = (e) => {
        const rect = popupRef.current.getBoundingClientRect();
        if(closeOnOutsideClick != undefined && closeOnOutsideClick === true && (e.clientX<rect.left || e.clientX >= rect.right || e.clientY < rect.top || e.clientY >= rect.bottom)){
            setPopup(false);
        }
    }

    console.log("STYLESSS", styles.global)

    return (
        <div className={styles.global.popup} onClick={handleClick}>
            <div ref={popupRef}>
                {myPopup()}
            </div>
        </div>
    )
}

export default Popup;

