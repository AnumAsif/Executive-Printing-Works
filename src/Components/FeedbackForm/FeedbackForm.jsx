import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        rating: 0,
        servicesUsed: [],
        quality: '',
        timeliness: '',
        recommend: '',
        comments: '',
        useAgain: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleServiceChange = (service) => {
        const updatedServices = formData.servicesUsed.includes(service)
            ? formData.servicesUsed.filter(s => s !== service)
            : [...formData.servicesUsed, service];
        
        setFormData({
            ...formData,
            servicesUsed: updatedServices
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        // if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.email) newErrors.email = 'Email address is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number should be 10 digits';
        if (formData.found_us === 'Others' && !formData.found_us_other) {
            newErrors.found_us_other = 'Please specify how you found us';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        // Handle form submission logic here
        try {
            const response = await fetch('http://localhost:4000/api/feedback/submit-feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                alert('Feedback submitted successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    rating: 0,
                    servicesUsed: [],
                    quality: '',
                    timeliness: '',
                    recommend: '',
                    comments: '',
                    useAgain: '',
                    found_us: '',
                    found_us_other: '',
                });
            } else {
                alert(result.message || 'Something went wrong.');
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('Failed to submit feedback. Please try again later.');
        }
        console.log('Form submitted successfully', formData);
    };

    return (
        <div className="feedback-form-container">
            <h1>Feedback Form</h1>
            <p>We Value your Feedback</p>
            <form onSubmit={handleSubmit} className="feedback-form">
                {/* Customer Information */}
                <section className="feedback-customer-info">
                    <div className="feedback-customer-name">
                        <input 
                            type="text" 
                            name="firstName" 
                            placeholder="First Name" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                            required 
                        />
                        {errors.firstName && <p>{errors.firstName}</p>}
                        <input 
                            type="text" 
                            name="lastName" 
                            placeholder="Last Name" 
                            value={formData.lastName} 
                            onChange={handleChange} 
                            required 
                        />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                    <div className="feedback-customer-contact">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email address" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                        {errors.email && <p>{errors.email}</p>}
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                        />
                        {errors.phone && <p>{errors.phone}</p>}
                    </div>    
                </section>

                {/* How did you find out about us? */}
                <section>
                <label className="question">How did you find out about us?</label>
                <div className="feedback-radio-group">
                    {['Social Media', 'Reference', 'Walk-in Customer','Regular Customer', 'Google Search', 'Others'].map((option) => (
                    <label key={option} className="option">
                        <input
                        type="radio"
                        name="found_us"
                        value={option}
                        checked={formData.found_us === option}
                        onChange={(e) => setFormData({ ...formData, found_us: e.target.value })}
                        />
                        {option}
                    </label>
                    ))}
                </div>
                <br/>
                {/* Show input field if 'Other' is selected */}
                {formData.found_us === 'Others' && (
                    <div className="form-group">
                    <input
                        type="text"
                        name="found_us_other"
                        placeholder="Please specify"
                        value={formData.found_us_other || ''}
                        onChange={(e) => setFormData({ ...formData, found_us_other: e.target.value })}
                        required={formData.found_us === 'Others'}
                    />
                    </div>
                )}
                </section>

                {/* Rating */}
                <section>
                    <label className="question">How would you rate your overall experience with us?</label>
                    <div className="rating-group">
                        {[1, 2, 3, 4, 5].map(star => (
                            <span
                                key={star}
                                className={`star ${formData.rating >= star ? 'selected' : ''}`}
                                onClick={() => setFormData({ ...formData, rating: star })}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </section>

                {/* Services Used */}
                <section>
                    <label className="question">What service(s) did you use?</label>
                    <div className="feedback-checkbox-group">
                        {['Printing Consultation', 'Artwork Editing', 'Offset Printing', 'Digital Printing', 'Finishing', 'Delivery', 'All of Above'].map(service => (
                            <label key={service}>
                                <input 
                                    type="checkbox" 
                                    onChange={() => handleServiceChange(service)}
                                    checked={formData.servicesUsed.includes(service)}
                                /> 
                                {service}
                            </label>
                        ))}
                    </div>
                </section>

                {/* Quality Satisfaction */}
                <section>
                    <label className="question">How satisfied are you with the quality of our service?</label>
                    <div className="feedback-radio-group">
                        {['Very Dissatisfied', 'Dissatisfied', 'Neutral', 'Satisfied', 'Very Satisfied'].map(option => (
                            <label key={option}>
                                <input 
                                    type="radio" 
                                    name="quality" 
                                    value={option} 
                                    onChange={handleChange} 
                                    checked={formData.quality === option}
                                /> 
                                {option}
                            </label>
                        ))}
                    </div>
                </section>

                {/* Timeliness Satisfaction */}
                <section>
                    <label className="question">How satisfied are you with the timeliness of our delivery?</label>
                    <div className="feedback-radio-group">
                        {['Very Dissatisfied', 'Dissatisfied', 'Neutral', 'Satisfied', 'Very Satisfied'].map(option => (
                            <label key={option}>
                                <input 
                                    type="radio" 
                                    name="timeliness" 
                                    value={option} 
                                    onChange={handleChange} 
                                    checked={formData.timeliness === option}
                                /> 
                                {option}
                            </label>
                        ))}
                    </div>
                </section>

                {/* Recommendation */}
                <section>
                    <label className="question">Would you recommend our services to others?</label>
                    <div className="feedback-recommend-group">
                        <label>
                            <input 
                                type="radio" 
                                name="recommend" 
                                value="Yes" 
                                onChange={handleChange} 
                                checked={formData.recommend === 'Yes'}
                            /> 
                            Yes
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="recommend" 
                                value="No" 
                                onChange={handleChange} 
                                checked={formData.recommend === 'No'}
                            /> 
                            No
                        </label>
                    </div>
                </section>

                {/* Additional Comments */}
                <section className="comment">
                    <label className="question">Please provide any additional comments or suggestions:</label>
                    <textarea 
                        name="comments" 
                        placeholder="Your feedback" 
                        value={formData.comments} 
                        onChange={handleChange} 
                    />
                </section>

                {/* Use Again */}
                <section>
                    <label className="question">Would you use our services again?</label>
                    <div className="feedback-yes-no-group">
                        <label>
                            <input 
                                type="radio" 
                                name="useAgain" 
                                value="Yes" 
                                onChange={handleChange} 
                                checked={formData.useAgain === 'Yes'}
                            /> 
                            Yes
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="useAgain" 
                                value="No" 
                                onChange={handleChange} 
                                checked={formData.useAgain === 'No'}
                            /> 
                            No
                        </label>
                    </div>
                </section>

                <button type="submit" className="feedback-submit-button">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
