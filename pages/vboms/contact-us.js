import { setLayout } from "layouts";

function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>
        </div>
    );
}

const metaData={
    title: "Contact Us",
    description: "Virtual Business Operations Management Systems is pioneering new technology that is directly intended to make owning and operating a business in the modern world as easy as ever"
}
Contact.getLayout = (page=Contact, data=metaData)=> setLayout({page, data, appName: "vboms"})


export default Contact;