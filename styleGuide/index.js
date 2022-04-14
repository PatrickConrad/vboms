import VbomsHome from '../styles/Vboms.Home.module.scss'
import VbomsAbout from '../styles/Vboms.About.module.scss'
import VbomsOrgs from '../styles/Vboms.Orgs.module.scss'
import VbomsAddOrg from '../styles/Vboms.AddOrg.module.scss'
import Portfolio from '../styles/Portfolio.module.scss'
import Store from '../styles/Store.module.scss'
import Hotel from '../styles/Hotel.module.scss'
import Dining from '../styles/Dining.module.scss'
import Blog from '../styles/Blog.module.scss'
import Default from '../styles/Default.module.scss'
import Vboms from '../styles/Vboms.module.scss';
import StoreHome from '../styles/Store.Home.module.scss';

const pageStyles = {
    vboms: {
        pages: {
            home: VbomsHome,
            blog: Blog,
            about: VbomsAbout,
            orgs: VbomsOrgs,
            addOrg: VbomsAddOrg
        },
        global: Vboms
    },
    store: {
        pages: {
            home: StoreHome 
        },
        global: Store
    },
    hotel: {
        main: Hotel
    },
    dining: {
        main: Dining,
    },
    portfolio: {
        main: Portfolio
    },
    default: {
        main: Default
    }
}

const Styles = ({component}) => {
    return (
        <div className="globalStyles">
            {component(pageStyles)}
        </div>
    )
}
export default Styles


