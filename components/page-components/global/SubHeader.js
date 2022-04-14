import Link from "next/link";

const subHeaders = {
    store: {
        all: {to: "/shop", text: "All"},
        newReleases: {to: "/shop?type=new-releases", text: "New Releases"},
        bestSellers: {to: "/shop?type=best-sellers", text: "Best Sellers"},
        deals: {to: "/shop?type=deals", text: "Deals"}
    }
}

const getSubHeader = (app) => {
    let subHeader = [];
    for(let i in subHeaders){
        subHeader = i === app ? subHeaders[app] : subHeader
    }
    return subHeader
}

function SubHeader({app, styles}) {
    const subHeaderLinks = getSubHeader(app);
    const setLinks = () => {
        let links = [];
        for(let s in subHeaderLinks){
            links.push(subHeaderLinks[s]);
        }
        return links
    }
    return (
        <div className={styles.global.subHeader}>
            {
               setLinks().map(l => {
                    return (
                        <div key={`/${app}${l.to}`} className={styles.global.subHeaderLinks}>
                            <Link href={`/${app}${l.to}`}>{l.text}</Link>
                        </div>
                    )
               })
            }
        </div>
    );
}

export default SubHeader;