import { setLayout } from "layouts";

function Store({styles}) {
    return (
        <>
            <h1>Store</h1>            
        </>
    );
}

const metaData={
    title: "Store",
    description: "Virtual Business Operations Management Systems is pioneering new technology that is directly intended to make owning and operating a business in the modern world as easy as ever"
}
Store.getLayout = (page=Store, data=metaData)=> setLayout({page, data, appName: "store"})

export default Store;