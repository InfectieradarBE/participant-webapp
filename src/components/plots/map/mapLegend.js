import React from "react";
import { mapColorScale } from './mapDataLoader';


const colorScale = mapColorScale();

const MapLegend = () => {

    return (
        <div style={{ position: 'absolute', marginLeft: '3vw', bottom: '20%' }}>
            <div style={{ position: 'relative', width: '2.2vh', height: '2.2vh' }}>
                <div style={{ background: colorScale(0), width: '100%', height: '100%', display: 'inline-block' }}></div>
                <span style={{ position: 'absolute', paddingLeft: '0.5vw', fontSize: '1.5vh' }}>
                    0</span>
            </div>
            <div style={{ position: 'relative', width: '2.2vh', height: '2.2vh' }}>
                <div style={{ background: colorScale(20), width: '100%', height: '100%', display: 'inline-block' }}></div>
                <span style={{ position: 'absolute', paddingLeft: '0.5vw', fontSize: '1.5vh' }}>
                    20</span>
            </div>
            <div style={{ position: 'relative', width: '2.2vh', height: '2.2vh' }}>
                <div style={{ background: colorScale(40), width: '100%', height: '100%', display: 'inline-block' }}></div>
                <span style={{ position: 'absolute', paddingLeft: '0.5vw', fontSize: '1.5vh' }}>
                    40</span>
            </div>
            <div style={{ position: 'relative', width: '2.2vh', height: '2.2vh' }}>
                <div style={{ background: colorScale(60), width: '100%', height: '100%', display: 'inline-block' }}></div>
                <span style={{ position: 'absolute', paddingLeft: '0.5vw', fontSize: '1.5vh' }}>
                    60</span>
            </div>
            <div style={{ position: 'relative', width: '2.2vh', height: '2.2vh' }}>
                <div style={{ background: colorScale(80), width: '100%', height: '100%', display: 'inline-block' }}></div>
                <span style={{ position: 'absolute', paddingLeft: '0.5vw', fontSize: '1.5vh' }}>
                    80</span>
            </div>
            <div style={{ position: 'relative', width: '2.2vh', height: '2.2vh' }}>
                <div style={{ background: colorScale(100), width: '100%', height: '100%', display: 'inline-block' }}></div>
                <span style={{ position: 'absolute', paddingLeft: '0.5vw', fontSize: '1.5vh' }}>
                    100</span>
            </div>
        </div>
    );
};

export default MapLegend;

