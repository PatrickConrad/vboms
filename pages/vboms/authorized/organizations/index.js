import { setLayout } from "layouts";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ContextConsumer } from "state/RootContext";

function Organizations({styles}) {
    const {state, actions} = useContext(ContextConsumer);
    const router = useRouter(); 
    
    const onCreateOrg = ()=>{
        router.push(`/vboms/authorized/organizations/add-organization`)
    }
    const pageStyle = styles.vboms.pages.orgs;
    console.log("STATE", state)
    return (
        <div className={pageStyle.body}>
            <div className={pageStyle.sidebar}>
                <div className={pageStyle.orgsList}>
                    {
                        state.vboms.auth.user.organizations.length < 1
                        ?
                        <div>No orgs found</div>
                        :
                        state.vboms.auth.user.organizations.map(org=>{
                            return (
                                <div>org</div>
                            )
                        })
                    }
                </div>
                <div className={pageStyle.newOrgBtnBox}>
                    <button onClick={onCreateOrg} className={pageStyle.newOrgBtn}>+ Create Org</button>
                </div>
            </div>
        </div>
    );
}

const metaData = {
    title: "VBOMS Private",
    description: "Private"
}
Organizations.getLayout = (page=Organizations, data=metaData)=> setLayout({page, data, appName: "vboms"})

export default Organizations;