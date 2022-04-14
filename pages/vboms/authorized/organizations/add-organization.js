import { setLayout } from "layouts";
import { createRef, useCallback, useState } from "react";

function AddOrganization({styles}) {
    const [org, setOrg] = useState({
        twoPointRequired: true
    })
    console.log("org", org)
    const pageStyles = styles.vboms.pages.addOrg
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
    }

    const handleUseTwoPoint = ()=>{
        setOrg({...org, twoPointRequired: !org.twoPointRequired})
    }

    return (
        <div className={pageStyles.body}>
            <h1>Add Org</h1>
            <form onSubmit={handleSubmit} className={pageStyles.AddOrg}>
                <div className={pageStyles.formGroup}>
                    <div className={pageStyles.formLabelBox}>
                        <label htmlFor="orgName" className={pageStyles.formLabel}>Organization Name: </label>
                    </div>
                    <div className={pageStyles.formInputBox}>
                        <input type="text" id="orgName" className={pageStyles.formInput} placeholder="Add organization name"/>
                    </div>
                </div>
                <div className={pageStyles.formGroup}>
                    <div className={pageStyles.formLabelBox}>
                        <label htmlFor="orgType" className={pageStyles.formLabel}>Organization Type: </label>
                    </div>
                    <div className={pageStyles.formInputBox}>
                        <input type="text" id="orgType" className={pageStyles.formInput} placeholder="Add organization type"/>
                    </div>
                </div>
                <div className={pageStyles.formGroup}>
                    <div className={pageStyles.formLabelBox}>
                        <label htmlFor="orgRegistrationUrlRedirect" className={pageStyles.formLabel}>Registration Redirect URL: </label>
                    </div>
                    <div className={pageStyles.formInputBox}>
                        <input type="text" id="orgRegistrationUrlRedirect" className={pageStyles.formInput} placeholder="Add a redirect for new users who uses vboms to register with your site"/>
                    </div>
                </div>
                <div className={pageStyles.formGroup}>
                    <div className={pageStyles.formLabelBox}>
                        <label htmlFor="orgLoginUrlRedirect" className={pageStyles.formLabel}>Login Redirect URL: </label>
                    </div>
                    <div className={pageStyles.formInputBox}>
                        <input type="text" id="orgLoginUrlRedirect" className={pageStyles.formInput} placeholder="Add a redirect for users to use vboms to login with your site"/>
                    </div>
                </div>
                <div className={pageStyles.formGroup}>
                    <div className={pageStyles.formLabelBox}>
                        <label htmlFor="loginExpireTime" className={pageStyles.formLabel}>Login Access Expire: </label>
                    </div>
                    <div className={pageStyles.formInputBox}>
                        <input type="number" id="loginExpireTime" className={pageStyles.formInput} placeholder="Login Expire"/>
                    </div>
                </div>
                <div className={pageStyles.formCheckboxGroup}>
                    <div className={pageStyles.checkboxDiv}>
                        <div className={pageStyles.formInputBox}>
                            <input onChange={handleUseTwoPoint} id="useTwoPoint" type="checkbox" defaultChecked={true} value={org.twoPointRequired}/>    
                        </div>
                        <div className={pageStyles.formCheckboxLabelBox}>
                            <label htmlFor="useTwoPoint" className={pageStyles.formLabel}> Require two-point authentication</label>
                        </div>
                    </div>
                    {
                        org.twoPointRequired
                        ?
                        <div className={pageStyles.formCheckboxMessageBox}>
                            <p className={pageStyles.formCheckboxMessage}>
                                Warning: Requiring two-point authentication may force some users to check their email everytime they log in.
                            </p>
                        </div>
                        :
                        null
                    }
                </div>
                <div className={pageStyles.formSubmitBtnBox}>
                    <button type="submit" className={pageStyles.formSubmitBtn}>Submit</button>
                </div>
            </form>
        </div>
    );
}

const metaData = {
    title: "VBOMS Private",
    description: "Private"
}
AddOrganization.getLayout = (page=AddOrganization, data=metaData)=> setLayout({page, data, appName: "vboms"})

export default AddOrganization;