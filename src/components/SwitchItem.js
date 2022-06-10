import { useState } from 'react';
const SwitchItem = () => {

    const [light, setLight] = useState(true);

    return (
        <div style={{ backgroundColor: light ? "beige" : "black" }}>
            <h1 style={{ color: light ? 'black' : 'beige' }}>{light ? 'DAY, BABY!' : 'NIGHT, BABY!'}</h1>
            <button onClick={() => setLight(!light)}>{light ? 'change to dark' : 'change to light'}</button>
        </div>
    );
}

export default SwitchItem;