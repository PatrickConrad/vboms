import { useCallback, useContext, useEffect, useMemo } from 'react';
import Meta from '../components/page-components/global/Meta';

// import Nav from '../Nav';
// import Meta from '../Meta';
// import Header from '../Header';


const MainLayout = (props) => {
    console.log("MainLayoutProps:", props.data)

    return (
        <>
            <Meta title={props.data.title} description={props.data.description}/>
            {/* <Nav />  */}
            <div>
                <main>
                    {props.children}
                </main>
            </div>
        </>
    );
}

export default MainLayout;