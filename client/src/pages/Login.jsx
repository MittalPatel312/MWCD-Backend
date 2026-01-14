import React from 'react';


const handleLogin = () => {
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
    // dsfs fsdf
}

export default function Login() {
    return (
        <div className="container">
            <div className='flex items-center justify-center' style={{ marginTop: '38px', padding: '88px' }}>
                <div style={{ fontWeight: 700, letterSpacing: "-0.02em", fontSize: '22px' }}>
                    Welcome to MWCD Knowledge Hub
                </div>

                <div style={{ marginTop: '20px' }}>
                    <input placeholder='Email'></input>
                    <input placeholder='Password' style={{ marginTop: '28px' }}></input>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                        <input type='checkbox' style={{ width: 'auto' }} /> <p style={{ marginLeft: '6px' }}>Remember me</p>
                    </div>
                    <button style={{ width: '100%', marginTop: '18px' }} onClick={handleLogin}>Sign In</button>
                    <div style={{ paddingTop: '6px' }}>
                        <a>Forgot password?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
