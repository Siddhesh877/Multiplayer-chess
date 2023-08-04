import React,{useState} from 'react';

function LoginPage(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default LoginPage;