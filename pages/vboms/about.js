import { setLayout } from "layouts";

function About() {
    return (
        <>
            <h1>About V.B.O.M.S.</h1>
        </>
    );
}
const metaData={
    title: "About",
    description: "Virtual Business Operations Management Systems is pioneering new technology that is directly intended to make owning and operating a business in the modern world as easy as ever"
}
About.getLayout = (page=About, data=metaData)=> setLayout({page, data, appName: "vboms"})

export default About;