import React from 'react';
import graph from './graph.png'
import bar from './bar.png'
import '../styles/modal.css'
const Analytics = () => {
    return (
        <><div>

        </div><div>
                <img className="check" src={graph}/>
            </div>
            <div>
                <img className="check"src={bar}/>
            </div>
            </>
    );
};

export default Analytics;