import { useCallback, useContext, useEffect, useMemo } from 'react';
// import Nav from '../Nav';
// import Meta from '../Meta';
// import Header from '../Header';
// import { ContextConsumer } from '../../state/Context';
import Meta from '../components/page-components/global/Meta';

const DefaultLayout = (props) => {
    console.log("Default Layout:", props)
    // const {state, actions} = useContext(ContextConsumer)
    console.log("default", props.data)

    return (
        <>
            <Meta title={props.data.title}/>
            {/* <Nav /> */}
            <div>
                <main >
                    {props.children}
                </main>
            </div>
        </>
    );
}

export default DefaultLayout;