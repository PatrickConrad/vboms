const vbomsLogo = (styles, app, router) => {
    return (
        <div className={styles.global.logo} onClick={()=>router.push(`/${app}`)}>
            V.B.O.M.S.
        </div>
    )
}

const storeLogo = (styles, app, router) => {
    const style = styles.global.logo == undefined ? 'logo' : styles.global.logo;
    return (
        <div className={style} onClick={()=>router.push(`/${app}`)}>
            VBOMS Store
        </div>
    )
}


const logos = (styles, app, router) => {
    return {
        vboms: vbomsLogo(styles, app, router),
        store: storeLogo(styles, app, router)
        // PortfolioLogo,
        // DiningLogo,
        // HotelLogo
    }
}

const setLogo = (app, styles, router) => {
    const allLogos = logos(styles, app, router)
    let logo;
    for(let l in allLogos){
        if(l !== app) {
            logo = logo;
        }
        else{
            logo = allLogos[l]
        }
    }

    return logo;
}
export default setLogo