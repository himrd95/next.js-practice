import { useRouter } from 'next/router';
import { useState } from 'react';
// import "../styles/currencies-direct.scss";




const Dashboard = () => {
    const [theme, setTheme] = useState({})
    const {
        query: { clientId },
    } = useRouter();
    const router = useRouter();
    console.log(clientId)

    const handleCurrencies = (query, bgColor) => {
        router.push({ query: { clientId: query } })
        const newTheme = {
            background: bgColor,
            color:"white"
        }
        setTheme(newTheme)
    }

    return (

          
        <div>
            <div id="root" style={{display:'flex', flexDirection:'row' }} >
                <div className="Nav">
                    <button style={theme} className='btn' onClick={() => handleCurrencies("currencies-direct", "red")}>Currencies Direct</button>
                </div>
                <div className="Nav">
                    <button className='btn' onClick={() => router.push({ query: { clientId: "TorFX" } })}>TorFX</button>
                </div>
                <div className="Nav">
                    <button className='btn' onClick={() => router.push({ pathname: '/dashboard', query: { clientId: "Ramsdens" } })}>Ramsdens</button>
                </div>
                <div className="Nav">
                    <button className='btn' onClick={() => router.push({ pathname: '/dashboard', query: { clientId: "Foremost" } })}>Foremost</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;