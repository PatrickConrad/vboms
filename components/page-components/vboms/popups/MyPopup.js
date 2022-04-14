function MyPopup({styles, close}) {
    console.log("POPUP STYLES", styles)
    return (
        <div className={styles.global.popupInnerBox}>
            <button onClick={()=>close()}>Close</button>
        </div>
    );
}

export default MyPopup;