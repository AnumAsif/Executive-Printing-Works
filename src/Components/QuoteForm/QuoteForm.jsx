import React from 'react';
import './QuoteForm.css'; // Import the CSS file

const QuoteForm = () => {
    return (
        <div className="quote-form-container">
            <h1>Get a Quote Now</h1>
            <p>Get a Quote within a Day Upon Form Submission</p>
            <form className="quote-form">
                <div className="form-group name">
                    <input type="text" placeholder="First name" required />
                    <input type="text" placeholder="Last name" required />
                </div>
                <div className="form-group name">
                    <input type="email" placeholder="Email address" required />
                    <input type="tel" placeholder="Phone" required />
                </div>
                <div className="form-group">
                    <textarea placeholder="Order details: Submit Your Order Information - Item Name, Decoration Size, Quantity, Due Date and any other details" required />
                </div>
                <div className="form-group">
                    <input type="file" />
                </div>
                <button type="submit" className="submit-button">Send Request</button>
            </form>
        </div>
    );
};

export default QuoteForm;
