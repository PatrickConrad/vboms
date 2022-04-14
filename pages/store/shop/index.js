import { setLayout } from "layouts";

function Shop({styles}) {
    return (
        <>
            <h1>Store</h1>            
        </>
    );
}

const metaData={
    title: "Shop",
    description: "Virtual Business Operations Management Systems is pioneering new technology that is directly intended to make owning and operating a business in the modern world as easy as ever"
}
Shop.getLayout = (page=Shop, data=metaData)=> setLayout({page, data, appName: "store"})

export default Shop;