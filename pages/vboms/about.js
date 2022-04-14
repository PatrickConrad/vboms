import WhatIsVboms from "components/page-components/vboms/homePageComponents/WhatIsVboms";
import { setLayout } from "layouts";

function About({styles}) {
    return (
        <div className={styles.vboms.pages.about.body}>
            <WhatIsVboms styles={styles} app={"vboms"}/>
        </div>
    );
}
const metaData={
    title: "About",
    description: "Virtual Business Operations Management Systems is pioneering new technology that is directly intended to make owning and operating a business in the modern world as easy as ever"
}
About.getLayout = (page=About, data=metaData)=> setLayout({page, data, appName: "vboms"})

export default About;