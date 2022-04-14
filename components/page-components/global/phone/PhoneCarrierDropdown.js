import { useContext, useEffect, useState } from "react";
import { ContextConsumer } from "state/RootContext";

function PhoneCarrierDropdown({setPhoneCarrier}) {
    const [userCarrier, setUserCarrier] = useState({
        email: '',
        name: '',
        id: '',
        type: 'sms'
    })

    const [carrierValue, setCarrierValue] = useState('');
    const [carrierOptions, setCarrierOptions] = useState([]);

    const {state, actions} = useContext(ContextConsumer);
    useEffect(()=>{
        actions.phoneCarrierActions.getAll();
    }, [])  

    const handleSetCarrier = (carrier) => {
        console.log("CARRIER: ", carrier)
        setCarrierValue(`${carrier.searchTag}`);
        setPhoneCarrier({
            email: carrier.email,
            name: carrier.name,
            id: carrier.id,
            type: carrier.type
        })
    }

    const handleCarrierValueChange = (e) => {
        console.log("value", e.target.value)
        setCarrierValue(e.target.value);
        const filtered = state.phoneCarriers.phoneCarriers.filter(carrier=>{
            return carrier.searchTag.includes(e.target.value)
        })
        console.log(filtered)
        setCarrierOptions(filtered);


    }
    return (
        <div>
            {
                state.phoneCarriers.loading
                ?
                <div>Loading...</div>
                :
                <div className="formSearchSelectGroup">
                    <div className="formSearchSelectLabelBox">
                        <label htmlFor="phoneCarrier" className="formSearchSelectLabel">Phone Carrier: </label>
                    </div>
                    <div className="formSearchSelectInputBox">
                        <input onChange={(e)=>{handleCarrierValueChange(e)}} type="text" className="formSearchSelectInput" value={carrierValue}/>
                    </div>
                    <div>
                        {
                        carrierOptions == undefined || carrierOptions.length < 1
                        ?
                        state.phoneCarriers.phoneCarriers.map(carrier=>{
                            return (
                                <div onClick={()=>{handleSetCarrier(carrier)}} key={carrier.id} className="carrier">
                                    {carrier.name}&nbsp;({carrier.type})
                                </div>
                            )
                        })
                        :
                        carrierOptions.map(carrier => {
                            return (
                                <div onClick={()=>handleSetCarrier(carrier)} key={carrier.id} className="carrier">
                                    {carrier.name}&nbsp;({carrier.type})
                                </div>
                            )
                        })
                        }
                    </div>
                </div>                    
            }
        </div>
    );
}

export default PhoneCarrierDropdown;