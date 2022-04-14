import globalComponents from '../components/page-components/global';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import { ContextConsumer } from 'state/RootContext';
import { useRouter } from 'next/router';
import Footer from 'components/page-components/global/Footer';
import globalStyles from '../styles/Global.module.scss';
import Body from 'components/page-components/global/Body';


// const d = new Date()
//     d.setTime(d.getTime()+1000000);

//     document.cookie= `hasAuth=true;expires=${d.toUTCString()}`

//     console.log(document.cookie)
    
const customLayout = ({page, data, app, styles}) => {
    // const {state, actions} = useContext(ContextConsumer)
    const appStyle = styles[app]
    const {Meta, Header} = globalComponents;
    const {state, actions} = useContext(ContextConsumer);
    
    return (
        <div className={globalStyles.app}>
            <Meta title={data.title??null} keywords={data.keywords??null} description={data.description??null}/>
            <Header styles={appStyle} app={app}/>
                <Body page={page} styles={appStyle}/>
            <Footer styles={appStyle} app={app}/>
        </div>
    );
}

export default customLayout;