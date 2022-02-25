const vbomsLogo = (styles, app, router) => {
    return (
        <div className={styles.global.logo} onClick={()=>router.push(`/${app}`)}>
            V.B.O.M.S.
        </div>
    )
}


const logos = (styles, app, router) => {
    return {
        vboms: vbomsLogo(styles, app, router),
        // storeLogo,
        // PortfolioLogo,
        // DiningLogo,
        // HotelLogo
    }
}

const setLogo = (app, styles, router) => {
    const allLogos = logos(styles, app, router)
    let logo;
    for(let l in allLogos){
        if(l !== app) return logo;
        logo = allLogos[l]
    }
    return logo;
}
export default setLogo