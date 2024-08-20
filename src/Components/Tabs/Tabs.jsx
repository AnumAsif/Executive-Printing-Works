import React from 'react';
import './Tabs.css';

const Tabs = ({ tabs, activeTab, handleTabClick }) => {
    return (
        <ul className="aboutus-tabs">
            {tabs.map((tab) => (
                <li
                    key={tab.id}
                    className={`tab-link ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => handleTabClick(tab.id)}
                >
                    {tab.label}
                </li>
            ))}
        </ul>
    );
};

export default Tabs;
