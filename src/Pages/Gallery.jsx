import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './CSS/Gallery.css';
import Hero2 from '../Components/Hero2/Hero2.jsx';
import aboutUsImage from '../Components/Assets/printingpaper.jpg';
import businesscard1 from '../Components/Assets/Products/electrician_business_card1.png';
import ProductSubcategories from '../Components/ProductSubcategories/ProductSubcategories.jsx';

function Gallery() {
    const [activeTab, setActiveTab] = useState('Books & Reports');
    const [tabsRefs, setTabsRefs] = useState([]);
    const tabsContainerRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tab = params.get('tab');
        if (tab) {
            setActiveTab(tab);
            setTimeout(() => {
                scrollToTop();
            }, 100);
        }
    }, [location]);

    useEffect(() => {
        // Initialize tabs refs
        setTabsRefs((refs) =>
            Array.from(document.querySelectorAll('.gallery-tab')).map((tab) => refs[tab.dataset.index] || tab)
        );
    }, [activeTab]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleTabClick = (tab, index) => {
        setActiveTab(tab);
        tabsRefs[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    };

    const handleScroll = (direction) => {
        if (tabsContainerRef.current) {
            const scrollAmount = 100; // Adjust the scroll amount as needed
            tabsContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const books_reports_tabs = [
        { id: 'diaries', label: 'Diaries' },
        { id: 'notebooks', label: 'Notebooks' },
        { id: 'storybooks', label: 'Storybooks' },
        { id: 'magazines', label: 'Magazines' },
        { id: 'catalogues', label: 'Catalogues' },
        { id: 'annual-reports', label: 'Annual Reports' }
    ];
    const marketing = [
        { id: 'brochures', label: 'Brochures' },
        { id: 'flyers', label: 'Flyers' },
        { id: 'menus', label: 'Menus' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'booklets', label: 'Booklets' },
        { id: 'posters', label: 'Posters (A2 and smaller)' }
    ];
    const business = [
        { id: 'business-cards', label: 'Business Cards' },
        { id: 'envelopes', label: 'Envelopes' },
        { id: 'letterheads', label: 'Letterheads' },
        { id: 'folders', label: 'Folders' },
        { id: 'notepads', label: 'Notepads' },
        { id: 'receiptbooks', label: 'Receipt Books' },
    ];
    const cards = [
        { id: 'postcards', label: 'Postcards' },
        { id: 'wedding-cards', label: 'Wedding Cards' },
        { id: 'greeting-cards', label: 'Greeting Cards' },
        { id: 'loyalty-cards', label: 'Loyalty Cards' },
        { id: 'gift-vouchers', label: 'Gift Vouchers' },
        { id: 'invitation-cards', label: 'Invitation Cards' },
        { id: 'bookmarks', label: 'Book Marks' },
        { id: 'tent-cards', label: 'Tent Cards' },
        { id: 'door-tags', label: 'Door Tags' },
    ];
    const custom_products = [
        { id: 'sleeves', label: 'Sleeves' },
        { id: 'packaging', label: 'Packaging (Small Boxes, Cartons)' },
        { id: 'custom-cut-shapes', label: 'Custom-Cut Shapes' },
        { id: 'hang-tags', label: 'Hang Tags' },
        { id: 'product-tags', label: 'Product Tags' },
        { id: 'stickers', label: 'Stickers' },
        { id: 'labels', label: 'Labels' },
    ];
    
    const calendars = [
        { id: 'wall-calendars', label: 'Wall Calendars' },
        { id: 'desk-calendars', label: 'Desk Calendars' },
        { id: 'planner-calendars', label: 'Planner Calendars' },
        { id: 'pocket-calendars', label: 'Pocket Calendars' },
        { id: 'photo-calendars', label: 'Photo Calendars' },
        { id: 'tear-off-calendars', label: 'Tear-off Calendars' },
        { id: 'promotional-calendars', label: 'Promotional Calendars' }
    ];

    return (
        <div className="gallery-div">
            <Hero2 image={aboutUsImage} heading="Gallery" />
            <div className="gallery-tabs-container">
                {/* <button className="scroll-button scroll-left" onClick={() => handleScroll('left')}>
                    {'<'}
                </button> */}
                <div className="gallery-tabs" ref={tabsContainerRef}>
                    {['Books & Reports', 'Marketing', 'Business', 'Cards', 'Calendars', 'Custom Products'
                        ].map((tab, index) => (
                            <div
                                key={tab}
                                className={`gallery-tab ${activeTab === tab ? 'gallery-active' : ''}`}
                                onClick={() => handleTabClick(tab, index)}
                                data-index={index}
                            >
                                {tab}
                            </div>
                        ))}
                </div>
                {/* <button className="scroll-button scroll-right" onClick={() => handleScroll('right')}>
                    {'>'}
                </button> */}
            </div>
            <div className="gallery-tab-content">
                {activeTab === 'Books & Reports' && (
                    <div className="books_reports gallery-active-tab">
                        <ProductSubcategories initialTabs={books_reports_tabs} defaultActiveTab="diaries" />
                        <div className="gallery-active-image">
                            <img src={businesscard1} />
                        </div>
                    </div>
                )}
                {activeTab === 'Marketing' && (
                    <div className="marketing_promotional gallery-active-tab">
                        <ProductSubcategories initialTabs={marketing} defaultActiveTab="brochures" />
                        <div className="gallery-active-image">
                            <img src={businesscard1} />
                        </div>
                    </div>
                )}
                {activeTab === 'Business' && (
                    <div className="stationary_office_supplies gallery-active-tab">
                        <ProductSubcategories initialTabs={business} defaultActiveTab="business-cards" />
                        <div className="gallery-active-image">
                            <img src={businesscard1} />
                        </div>
                    </div>
                )}
                {activeTab === 'Calendars' && (
                    <div className="calendars gallery-active-tab">
                        <ProductSubcategories initialTabs={calendars} defaultActiveTab="wall-calendars" />
                        <div className="gallery-active-image">
                            <img src={businesscard1} />
                        </div>
                    </div>
                )}
                {activeTab === 'Cards' && (
                    <div className="cards_invitations gallery-active-tab">
                        <ProductSubcategories initialTabs={cards} defaultActiveTab="postcards" />
                        <div className="gallery-active-image">
                            <img src={businesscard1} />
                        </div>
                    </div>
                )}
                {activeTab === 'Custom Products' && (
                    <div className="packaging_custom_products gallery-active-tab">
                        <ProductSubcategories initialTabs={custom_products} defaultActiveTab="sleeves" />
                        <div className="gallery-active-image">
                            <img src={businesscard1} />
                        </div>
                    </div>
                )}
               
            </div>
        </div>
    );
}

export default Gallery;
