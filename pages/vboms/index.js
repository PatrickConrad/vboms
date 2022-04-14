import LeadBannerText from "components/page-components/vboms/LeadBannerText";
import { setLayout } from "layouts";

function VBOMS({styles}) {
    return (
        <div>
            <div className={styles.vboms.pages.home.bannerArea}>
                <video autoPlay muted loop id={styles.vboms.pages.home.bannerVideo} src="vboms_banner.mp4" type="video/mp4"/>
                <div className={styles.vboms.pages.home.bannerVideoOverlay}>
                <LeadBannerText styles={styles}/>
                </div>
            </div>
            <div className={styles.vboms.pages.home.homeBody}>
                <div className={styles.vboms.pages.home.strip}>
                </div>
                <div className={styles.vboms.pages.home.strip}>Hell No</div>
                <div className={styles.vboms.pages.home.strip}>hello</div>
                <div className={styles.vboms.pages.home.strip}>Hell No</div>
                <div className={styles.vboms.pages.home.strip}>hello</div>
            </div>
        </div>
    );
}

const metaData={
    title: "VBOMS",
    description: "Virtual Business Operations Management Systems is pioneering new technology that is directly intended to make owning and operating a business in the modern world as easy as ever"
}
VBOMS.getLayout = (VBOMS, data=metaData)=> setLayout({page:VBOMS, data, appName: "vboms"})

export default VBOMS;