import Link from "next/link";

const apps = () => {
    return{
        vboms: [
            {
                to: "/products",
                text: "Products"
            },
            {
                to: "/about",
                text: "About"
            },
            {
                to: "/blog",
                text: "Blog"
            },
            {
                to: "/contact-us",
                text: "Contact Us"
            },
            
            
        ],
        default: [
            {
                to: "/",
                text: "Home"
            },
            {
                to: "/blog",
                text: "Blog"
            },
            {
                to: "/products",
                text: "Products"
            },
            
        ]
    }
}

    

const setNav = (appName, styles) => {

    const appPath = !appName ? '' : appName === "default" ? '' : `/${appName}`
    const getApps = apps();
    let navi;
    for(let a in getApps){
        navi = `${appName}` === `${a}` ? a : navi
    }
    if(!navi){
        navi = 'default'
    }
    return (
        <nav styles={styles}>
            <ul>
                {getApps[navi].map( (links)=>{
                    
                if(links.type === 'conditional'){
                        return <div key={links.text} 
                                    onClick={()=>{
                                        links.action()
                                        router.push(`${appPath}${authRedirectUrl}`)
                                    }}
                                >
                                        {authText}
                                    </div>
                    }
                return (
                    <li key={links.text} className={styles.global.navLinks}>
                        <Link  href={appPath + links.to} >{links.text}</Link>
                    </li>
                )
                })
                }
            </ul>
        </nav>
    )
}

export default setNav