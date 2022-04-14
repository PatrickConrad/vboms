import { useContext, useState } from "react";
import { ContextConsumer } from "state/RootContext";

function EditUserForm({user, close}) {
    const {state, actions} = useContext(ContextConsumer);
    const [newUser, setNewUser] = useState({
        id: state.vboms.auth.user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        twoPointAuth: user.twoPointAuth,
        darkMode: user.darkMode
    })

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            console.log("USER", newUser)
            await actions.vboms.users.update(newUser)
            await actions.vboms.users.get(state.vboms.auth.user);
            close()
        }
        catch(err){
            console.log("Error updating user page: ", err.message);
        }
    }
    return (
        <div>
            <div>
                <div>
                    <label htmlFor="username">Username: </label>
                </div>
                <div>
                    <input onChange={e=>setNewUser({...newUser, username: e.target.value})} type="text" id="username" value={newUser.username} />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                </div>
                <div>
                    <input onChange={e=>setNewUser({...newUser, firstName: e.target.value})} type="text" id="firstName" value={newUser.firstName}/>
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                </div>
                <div>
                    <input onChange={e=>setNewUser({...newUser, lastName: e.target.value})} type="text" id="lastName" value={newUser.lastName}/>
                </div>
            </div>
            <div>
                    <div className="radioTitle">Dark Mode: </div>
                    <div>
                        <div>
                            {
                            !user.darkMode
                            ?   
                            <input name="darkMode" onChange={e=>{setNewUser({...newUser, darkMode: e.target.value})}} type="radio" id="darkModeFalse" value={true}/> 
                            :
                            <input checked name="darkMode" onChange={e=>{setNewUser({...newUser, darkMode: e.target.value})}} type="radio" id="darkModeTrue" value={true}/>
                            }
                        </div>
                        <div>
                            <label htmlFor="darkModeTrue">True</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            {
                            !user.darkMode
                            ?   
                            <input checked name="darkMode" onChange={e=>{setNewUser({...newUser, darkMode: e.target.value})}} type="radio" id="darkModeFalse" value={false}/> 
                            :
                            <input name="darkMode" onChange={e=>{setNewUser({...newUser, darkMode: e.target.value})}} type="radio" id="darkModeFalse" value={false}/>
                            }
                        </div>
                        <div>
                            <label htmlFor="darkModeFalse">False</label>
                        </div>
                    </div>
                </div>
            <div>
                    <div className="radioTitle">Two-Point Auth: </div>
                    <div>
                        <div>
                            {
                            !user.twoPointAuth
                            ?   
                            <input name="twoPoint" onChange={e=>{setNewUser({...newUser, twoPointAuth: e.target.value})}} type="radio" id="twoPointTrue" value={true}/> 
                            :
                            <input checked name="twoPoint" onChange={e=>{setNewUser({...newUser, twoPointAuth: e.target.value})}} type="radio" id="twoPointTrue" value={true}/>
                            }
                        </div>
                        <div>
                            <label htmlFor="twoPointTrue">True</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            {
                            !user.twoPointAuth
                            ?   
                            <input checked name="twoPoint" onChange={e=>{setNewUser({...newUser, twoPointAuth: e.target.value})}} type="radio" id="twoPointFalse" value={false}/> 
                            :
                            <input name="twoPoint" onChange={e=>{setNewUser({...newUser, twoPointAuth: e.target.value})}} type="radio" id="twoPointFalse" value={false}/>
                            }
                        </div>
                        <div>
                            <label htmlFor="twoPointFalse">False</label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="radioTitle">Two-Point Auth: </div>
                    <div>
                        <div>
                            {
                            !user.twoPointAuth
                            ?   
                            <input name="twoPoint" onChange={e=>{setNewUser({...newUser, twoPointAuth: e.target.value})}} type="radio" id="twoPointTrue" value={true}/> 
                            :
                            <input checked name="twoPoint" onChange={e=>{setNewUser({...newUser, twoPointAuth: e.target.value})}} type="radio" id="twoPointTrue" value={true}/>
                            }
                        </div>
                        <div>
                            <label htmlFor="twoPointTrue">True</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            {
                            !user.twoPointAuthMethod
                            ?   
                            <input checked name="twoPoint" onChange={e=>{setNewUser({...newUser, twoPointAuth: e.target.value})}} type="radio" id="twoPointFalse" value={false}/> 
                            :
                            <input name="twoPoint" onChange={e=>{setNewUser({...newUser, twoPointAuth: e.target.value})}} type="radio" id="twoPointFalse" value={false}/>
                            }
                        </div>
                        <div>
                            <label htmlFor="twoPointFalse">False</label>
                        </div>
                    </div>
                </div>
            <div>
                <button onClick={handleSubmit}>Update</button>
                <button onClick={()=>{close()}}>Cancel</button>
            </div>
        </div>
    );
}

export default EditUserForm;