import React, { FC } from 'react';
import './App.css';
import { cssHotReload } from './utils/cssHotReload';

interface IApps {
    title: string;
}



const App: FC<IApps> = ({ title }) => {

    cssHotReload;
    const h2Tag = <h2>man</h2>;
    console.log(cssHotReload);
    console.log(h2Tag);
    return <div>
        <h1 style={{ color: "green" }}>Hellooo from react {title}</h1>
        <h2>yuh</h2>
        {/* {h2Tag} */}
    </div>;
};

export default App;
