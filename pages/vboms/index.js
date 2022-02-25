import { setLayout } from "layouts";

function VBOMS({styles}) {
    return (
        <div>
            <h1 className={styles.vboms.global.test}>Vboms Home</h1>
        </div>
    );
}

const metaData={
    title: "VBOMS",
    description: "Virtual Business Operations Management Systems is pioneering new technology that is directly intended to make owning and operating a business in the modern world as easy as ever"
}
VBOMS.getLayout = (VBOMS, data=metaData)=> setLayout({page:VBOMS, data, appName: "vboms"})

export default VBOMS;