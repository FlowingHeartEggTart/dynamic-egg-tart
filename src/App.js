// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
    const [isBouncing, setIsBouncing] = useState(false);

    const handleClick = () => {
        setIsBouncing(true);
        setTimeout(() => {
            setIsBouncing(false); // 动画结束后重置状态
        }, 500); // 根据动画时长设置延迟
    };

    return (
        <div>
            <h1>可爱的动态蛋挞</h1>
            <div
                className={`egg-tart ${isBouncing ? 'bounce' : ''}`}
                onClick={handleClick} // 点击时触发弹跳
            >
                <div className="yolk"></div>
                <div className="topping topping1"></div>
                <div className="topping topping2"></div>
                <div className="topping topping3"></div>
            </div>
        </div>
    );
}

export default App;
