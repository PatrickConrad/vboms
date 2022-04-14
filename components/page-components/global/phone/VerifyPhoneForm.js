import { useContext, useMemo, useState } from "react";
import { ContextConsumer } from "state/RootContext";
import PhoneCarrierDropdown from "./PhoneCarrierDropdown";

function VerifyPhoneForm({styles, close}) {
    const {state, actions} = useContext(ContextConsumer);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [pinNumber, setPinNumber] = useState('');
    const [awaitVerification, setAwaitVerification] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [phoneCarrier, setPhoneCarrier] = useState({
        type: 'sms',
        email:'',
        name: '',
        id: ''
    });

    const handleSetPhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handlePhoneVerify = async (e) => {
        try{
            e.preventDefault();
            console.log("user phone email: ", `${phoneNumber}${phoneCarrier.email}`)
            await actions.vboms.verify.updatePhone({phoneNumber, phoneEmail: phoneCarrier.email})
        }
        catch(err){
            console.log("Phone Verify error: ", err.message);
        }
    }

    const phoneInfo = useMemo(()=>{
        return {
            phoneNum: state.vboms.users.user.phoneNumber,
            phoneCarr: state.vboms.users.user.phoneCarrier
        }
    }, [state.vboms.users.user])

    const handlePin = async (e) => {
        try{
            e.preventDefault();
            console.log("PHONE PIN: ", pinNumber)
            console.log("Phone Token: ", state.vboms.verify.phoneState.token)
            await actions.vboms.verify.verifyPhone({pin: pinNumber, token: state.vboms.verify.phoneState.token})
            await actions.vboms.users.get(state.vboms.auth.user)
            close()
        }
        catch(err){
            console.log("error verifying: ", err.message)
        }
        
    }
    return (
        <>
            {
                state.vboms.verify.phoneState.type === 'awaitingPin' 
                ?
                <div>
                    <div>
                        <div>
                            <label htmlFor="phonePin">Verification Pin</label>
                        </div>
                        <div>
                            <input type="text" id="phonePin" placeholder="Pin #" onChange={(e)=>setPinNumber(e.target.value)}/>
                        </div>
                        <div>
                            <button onClick={handlePin}>Submit</button>
                        </div>
                    </div>
                </div>
                :
                state.vboms.verify.phoneState.type === 'verifyingPin'
                ?
                <h1>Verifying Pin...</h1>
                :
                state.vboms.verify.phoneState.type === 'verified'
                ?
                <h1>Success</h1>
                :
                state.vboms.verify.phoneState.type === 'set'
                ?
                <div>
                    {
                        !state.vboms.users.user.phoneNumber 
                        ?
                        null
                        :
                        <div>
                            <div>Current Phone:</div>
                            <div>
                                <div>{phoneInfo.phoneNum}</div>
                                <div>{phoneInfo.phoneCarr}</div>
                            </div>
                        </div>
                    }
                    <div>
                        <div>
                            <label htmlFor="phoneNumber">Phone Number:</label>
                        </div>
                        <div>
                            <input type="text" placeholder="Phone number" id="phoneNumber" onChange={handleSetPhoneNumber}/>
                        </div>
                    </div>
                    <PhoneCarrierDropdown setPhoneCarrier={setPhoneCarrier} styles={styles.vboms}/>
                    <div>
                        <button onClick={handlePhoneVerify}>Verify</button>
                        <button onClick={()=>{close()}}>Cancel</button>
                    </div>
                </div>
                :
                <h1>Loading...</h1>
            }
        </>
    );
}

export default VerifyPhoneForm;