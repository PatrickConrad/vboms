import globalComponents from '../components/page-components/global';
import { useCallback, useContext, useEffect, useMemo } from 'react';

const VbomsLayout = ({page, data}) => {
    // const {state, actions} = useContext(ContextConsumer)
    const {Nav, Meta} = globalComponents;
    return (
        <div>
            <Meta title={data.title??null} keywords={data.keywords??null} description={data.description??null}/>
            <Nav />
            <main>
                {page}
            </main>
        </div>
    );
}

export default VbomsLayout;