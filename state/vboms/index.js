import vbomsHomeActions from "./home/actions";
import auth from "./auth/actions";
import global from "./global/actions";
import organizations from './organizations/actions'
import users from './users/actions'
import verify from './verify/actions'

export const vboms = {
    auth,
    global,
    organizations,
    users,
    verify
}

