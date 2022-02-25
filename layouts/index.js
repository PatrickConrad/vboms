import DefaultLayout from "./DefaultLayout"
import MainLayout from "./MainLayout"
import customLayout from "./CustomLayout"
import VbomsLayout from "./VbomsLayout"

const layouts = [
    {
        layout: MainLayout,
        app: "vboms",
        pages: [],
        meta: {
            title: "VBOMS: Virtual Business Operations Management Systsems",
            description: "Home Page of app"
        }
    },
    {
        layout: DefaultLayout,
        app: "default",
        pages: [], 
        meta: {
            title: "My App",
            description: "The default app"
        }
    },
    {
        layout: MainLayout,
        app: "main",
        pages: [], 
        meta: {
            title: "Home of Main",
            description: "Home Page of app"
        }
    }
]
    
const getLayout = ({page, data, Layout, styles, app}) =>{
    return (
        <Layout data={data?data:null} styles={styles?styles:null} app={app}>
            {page}
        </Layout>
    )
}

const layoutByData = (info, app) => {
    return layouts.find((l)=>{
        if(l.pages.includes(info.type.name) && l.app === app){
            return l
        }
        return
    } )
}

export const getDefault = (page, styles) => {
    console.log("page props", page.props)
    const pageExists = layoutByData(page, "default");
    if(pageExists) { 
        return getLayout({page: page, data: pageExists.meta, Layout: pageExists.layout, styles: styles, app: pageExists.app})}
    return getLayout({page: page, data: {title: page.type.name}, Layout: DefaultLayout, styles: styles, app: "default"})
};

export const setLayout = ({page, data, appName}) => {
    if(!page){
        return <div>Error must include page to use setLayout</div>
    }
    const styles = page.props.styles
    const app = !appName ? "default" : appName.toLowerCase()
    const pageExists = layoutByData(page, app);
    if(pageExists) {
        return getLayout({page: page, data: data?data:pageExists.meta, Layout: pageExists.layout, styles: styles, app: app})
    }    
    return (
        customLayout({data, page, app, styles})
    )
}