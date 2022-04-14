import { setLayout } from "layouts";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function OrgAuthorization({styles}) {
    const router = useRouter();
    const [showPW, setShowPW] = useState(false)
    const [queryParams, setQueryParams] = useState({
        organizationId: '',
        callbackUri: '',
        secret: '',
        type: ''
    })

    const testQueryParams = (e) => {
        e.preventDefault();
        console.log("Testing query params: ", queryParams)
    }
    
    useEffect(()=>{
        if(!router.query.organizationId || !router.query.callbackUri || !router.query.secret){
            return;
        }
        return setQueryParams({
            organizationId: router.query.organizationId,
            callbackUri: router.query.callbackUri,
            secret: router.query.secret,
            type: router.query.type
        })
    }, [router.query])
    return (
        <div className={styles.vboms.global.orgsAuthPage}>
            <div className={styles.vboms.global.authBox}>
                <h1 className={styles.vboms.global.authBoxTitle}>VBOMS Authoirzation</h1>
                <form className={styles.vboms.global.authBoxForm} onSubmit={(e)=>{testQueryParams(e)}}>
                    <div className={styles.vboms.global.authBoxFormGroup}>
                        <div className={styles.vboms.global.authBoxFormLabel}>
                            <label htmlFor="">Username, Phone or Email:</label>
                        </div>
                        <div className={styles.vboms.global.authBoxFormInput}>
                            <input type="text" placeholder="Username, Phone or Email..." />
                        </div>
                    </div>
                    <div className={styles.vboms.global.authBoxFormGroup}>
                        <div className={styles.vboms.global.authBoxFormLabel}>
                            <label htmlFor="">Password:</label>
                        </div>
                        <div className={styles.vboms.global.authBoxPasswordInput}>
                            {
                                !showPW
                                ?
                                    <>
                                        <input type="password" placeholder="VBOMS password..." />
                                        <i  onClick={()=>setShowPW(true)}>
                                            <div className={styles.vboms.global.toolTip}>
                                                <span className={styles.vboms.global.toolTipText}>Show Password</span>
                                            </div>
                                            <div id={styles.vboms.global.showPwEyesOpen}>
                                                o o
                                            </div>                                          
                                        </i>
                                    </>
                                :
                                    <>
                                        <input type="text" placeholder="VBOMS password..." />
                                        <i onClick={()=>setShowPW(false)}>
                                            <div className={styles.vboms.global.toolTip}>
                                                <span className={styles.vboms.global.toolTipText}>Hide Password</span>
                                            </div>
                                            <div id={styles.vboms.global.showPwEyesClosed}>
                                                _ _
                                            </div>
                                        </i>
                                    </>

                            }
                        </div>
                    </div>
                    <div className={styles.vboms.global.authBoxFormBtn}>
                        <button type="submit">Login</button>
                    </div>
                </form>

                <div className={styles.vboms.global.switchAuthLink}>
                    <span>
                        <a href='/vboms/auth/register' target='_blank'>Don't have a VBOMS account? Sign up here!</a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default OrgAuthorization;