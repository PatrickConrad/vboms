import Home from '../styles/Home.module.scss'
import Portfolio from '../styles/Portfolio.module.scss'
import Store from '../styles/Store.module.scss'
import Hotel from '../styles/Hotel.module.scss'
import Dining from '../styles/Dining.module.scss'
import Blog from '../styles/Blog.module.scss'
import Default from '../styles/Default.module.scss'
import Vboms from '../styles/Vboms.module.scss';


const pageStyles = {
    vboms: {
        pages: {
            home: Home,
            blog: Blog
        },
        global: Vboms
    },
    store: {
        main: Store
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


