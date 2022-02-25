import { setLayout } from "layouts";

function Auth() {
    return (
        <div>
            <h1>Auth Page</h1>
        </div>
    );
}

const metaData = {
    title: "VBOMS Login/Sign-up",
    description: "Login page for VBOMS website"
}
Auth.getLayout = (page=Auth, data=metaData)=> setLayout({page, data, appName: "vboms"})

export default Auth;