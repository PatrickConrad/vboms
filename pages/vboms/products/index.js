import { setLayout } from "layouts";

function Products() {
    return (
        <div>
            <h1>All Products</h1>
        </div>
    );
}

const metaData={
    title: "VBOMS Products",
    description: "VBOMS offers dirverse and customizable products for all your business needs, including; web design, marketing, software and IT."
}
Products.getLayout = (Products, data=metaData)=> setLayout({page:Products, data, appName: "vboms"})

export default Products;
