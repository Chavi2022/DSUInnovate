import { useState, useEffect, } from 'react'
import { useNavigate } from "react-router-dom";
import '../css/App.css'
import companyLogo from '../assets/images/logo.png';
function Home() {
    const navigate = useNavigate();
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className='background'>
                <div className='container'>
                    <p style={{
                        color: 'transparent',
                    }}>aa</p>
                    <img src={companyLogo} className='icon' />
                </div>
                <button className='startButton' onClick={() => { navigate("/chat") }}>Start Chat</button>
            </div>
        </>
    )
}

export default Home
