import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductSubcategories.css';
import Tabs from '../Tabs/Tabs';

export default function ProductSubcategories({ initialTabs, defaultActiveTab }) {
    // Set initial state for the active tab
    const [activeTab, setActiveTab] = useState(defaultActiveTab || initialTabs[0].id);
    const location = useLocation();

    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Update the tab based on the URL query parameter and scroll to top
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tab = params.get('tab');
        if (tab) {
            setActiveTab(tab);
            // Wait for the next tick to ensure the tab content has rendered
            setTimeout(() => {
                scrollToTop();
            }, 100);
        }
    }, [location]);

    // Handle tab click to set active tab
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="subcategories">
            <Tabs
                tabs={initialTabs}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
                className="subtabs"
            />
            <div className="contact-tab-content">
                {initialTabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`${tab.id} ${activeTab === tab.id ? 'active' : ''}`}
                    >
                        {/* Insert content related to {tab.label} */}
                        {/* {`Content for ${tab.label}`} */}
                    </div>
                ))}
            </div>
        </div>
    );
}
