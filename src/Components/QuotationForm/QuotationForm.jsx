import React, { useState} from 'react';
import './QuotationForm.css';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import Multiselect from 'multiselect-react-dropdown';


const QuotationForm = () => {
    // const [selectedFile, setSelectedFile] = useState(null);
    const [uploadMessage, setUploadMessage] = useState("");
    const [formData, setFormData] = useState({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        customer_company: '',
        contact_method: '',
        project_type: '',
        custom_project_type:'',
        print_type: '',
        quantity: null,
        page_count: null,
        size: '',
        custom_length:null,
        custom_width:null,
        paper_type: '',
        cover_paper_type:null,
        page_grammage: null, // New field
        cover_grammage: null, // New field
        color_options: '',
        cover_color_options:null,
        finishing: [],
        design_needed: 'no',
        design_upload: null,
        design_instructions: '',
        delivery_method: 'pickup',
        shipping_address: '',
        completion_date: null,
        urgency: 'standard',
        sample_needed: 'no',
        notes: '',
        budget: ''
    });
   
    const [errors, setErrors] = useState({
        customer_email: '',
        customer_phone: '',
        budget:''
    });
    const handleBlur = (e) => {
        const { name, value } = e.target;

        // Validate the phone number format (Kenyan phone number)
        if (name === 'customer_phone') {
            const phonePattern = /^(?:\+254|0)?(7\d{8})$/;
            if (!phonePattern.test(value)) {
                setErrors({
                    ...errors,
                    customer_phone: '* Invalid phone number. Use format +2547XXXXXXXX or 07XXXXXXXX.'
                });
            } else {
                setErrors({
                    ...errors,
                    customer_phone: ''
                });
            }
        }

        // Validate the email format
        if (name === 'customer_email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                setErrors({
                    ...errors,
                    customer_email: '* Please enter a valid email address.'
                });
            } else {
                setErrors({
                    ...errors,
                    customer_email: ''
                });
            }
        }

         // Validate budget input to allow only positive numbers
        if (name === 'budget') {
            // Allow empty value since it's optional
            if (value === '') {
                setErrors({ ...errors, budget: '' });
            } else {
                const budgetPattern = /^\d+(\.\d{1,2})?$/; // Matches positive numbers with up to 2 decimal places
                const minBudget = 100; // Example minimum budget
                const maxBudget = 10000; // Example maximum budget

                if (!budgetPattern.test(value) || parseFloat(value) < minBudget || parseFloat(value) > maxBudget) {
                    setErrors({
                        ...errors,
                        budget: `Please enter a valid budget between KES ${minBudget} and KES ${maxBudget}.`
                    });
                } else {
                    setErrors({ ...errors, budget: '' });
                }
            }
        }

    };

    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'file') {
            const file = e.target.files[0];
            const allowedExtensions = ['ai', 'esp', 'pdf', 'id', 'psd'];
    
            if (file) {
                const fileExtension = file.name.split('.').pop().toLowerCase();
    
                if (allowedExtensions.includes(fileExtension)) {
                    setFormData({
                        ...formData,
                        [name]: file
                    });
                    setUploadMessage(`File selected: ${file.name}`);
                    setErrors({ ...errors, design_upload: '' });
                } else {
                    setErrors({
                        ...errors,
                        design_upload: `Invalid file type. Please upload a file of type: ${allowedExtensions.join(', ')}.`
                    });
                    setFormData({
                        ...formData,
                        [name]: null
                    });
                    setUploadMessage('');
                }
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
            
        };
    }
    // Handle file removal
    const handleFileRemove = () => {
        setFormData({
            ...formData,
            design_upload: null
        })
        setUploadMessage("No file selected.");
         // Update message
    };

    const handleSelect = (selectedList, selectedItem) => {
        setFormData((prevState) => ({
        ...prevState,
        finishing: selectedList.map((item) => item.value),
        }));
    };

    // Function to handle removal
    const handleRemove = (selectedList, removedItem) => {
        setFormData((prevState) => ({
        ...prevState,
        finishing: selectedList.map((item) => item.value),
        }));
    }; 
    const finishingOptions = [
        { name: 'Lamination', value: 'lamination' },
        { name: 'Embossing', value: 'embossing' },
        { name: 'Foiling', value: 'foiling' },
        { name: 'Spot UV', value: 'spot_uv' },
        { name: 'Binding', value: 'binding' },
        { name: 'Perforation', value: 'perforation' },
        {name: 'Die Cutting', value: 'die_cutting'},
        {name: 'Die Stamping', value: 'die_stamping'},
        {name: 'UV Coating', value: 'uv_coating'},
        {name:"Saddle Stitched", value:'saddle_stitched'},
        { name: 'Other', value: 'other' }
    ];

    const validateForm = () => {
        const newErrors = {};
        if (!formData.customer_name) newErrors.customer_name = 'Name is required';
        if (!formData.customer_email) newErrors.customer_email = 'Email is required';
        if (!formData.customer_phone) newErrors.customer_phone = 'Phone number is required';
        if (!formData.quantity || formData.quantity <= 0) newErrors.quantity = 'Quantity must be a positive number';
        if (!formData.size) newErrors.size = 'Size is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sanitizeFormData = () => {
        const sanitizedData = { ...formData };
        Object.keys(sanitizedData).forEach((key) => {
            if (typeof sanitizedData[key] === 'string') {
                sanitizedData[key] = DOMPurify.sanitize(sanitizedData[key]);
            }
        });
        return sanitizedData;
    };
    const getTomorrowDate = () => {
        const today = new Date();
        today.setDate(today.getDate() + 1); // Move to tomorrow's date
        return today.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setSubmissionStatus('Form validation failed');
            return;
        }

        const sanitizedData = sanitizeFormData();

        const formDataToSend = new FormData();
        for (const key in sanitizedData) {
            if (sanitizedData[key] !== null) {
                formDataToSend.append(key, sanitizedData[key]);
            }
        }
        
   

        
        try {
            await axios.post('http://localhost:4000/api/quotes/submit-quotation', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setSubmissionStatus('Quotation submitted successfully!');

        } catch (error) {
            console.error('Error submitting form:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
                // console.error('Response status:', error.response.status);
                // console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request error:', error.request);
            } else {
                console.error('General error:', error.message);
            }
            setSubmissionStatus('Error submitting form');
        }
    };
    

    return (
        <div className="quotation-form-container" id='quotation-form-container'>
            <h1>Get a Quote</h1>
            <p className="getaquote-p">Get a Quote within a Day Upon Form Submission</p>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="quotation-form">
            {/* Customer Information */}
                <section>
                    <h3>Customer Information</h3>
                    <div className="customer-info">
                        <div className="customer-info-1">
                        {/* <label htmlFor="name">Name:</label> */}
                            <input type="text" id="name" name="customer_name"  placeholder="Name" value={formData.customer_name} onChange={handleChange} required />
                            {errors.customer_name && <p className="errormsg" >{errors.customer_name}</p>}
                            {/* <label htmlFor="email">Email:</label> */}
                            <input type="email" id="email" name="customer_email" placeholder="Email" value={formData.customer_email} onChange={handleChange} onBlur={handleBlur} required />
                        </div>
                        {errors.customer_email && <p className="errormsg" >{errors.customer_email}</p>}
                        <div className="customer-info-2">
                            <input type="tel" id="phone" name="customer_phone"  placeholder="Phone Number" value={formData.customer_phone} onChange={handleChange} onBlur={handleBlur} required />
                        {/* <label htmlFor="company">Company Name:</label> */}
                            <input type="text" id="company" name="customer_company"   placeholder="Company Name" value={formData.customer_company} onChange={handleChange} />
                        </div>
                        {errors.customer_phone && <p className="errormsg" >{errors.customer_phone}</p>}
                        <div className="customer-info-3">
                            {/* <label htmlFor="contact_method">Preferred Contact Method:</label> */}
                            <select id="contact_method" name="contact_method" value={formData.contact_method} onChange={handleChange}>
                                <option value ="">Preferred Contact Method</option>
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                            </select>
                        </div>             
                    </div>
                    
                </section>

                {/* Project Details */}
                <section className="project-details">
                    <h3>Project Details</h3>
                    {/* <label htmlFor="project_type">Project Type:</label> */}
                    <select id="project_type" name="project_type" value={formData.project_type} onChange={handleChange} required>
                        <option value="" disabled>Select Project Type</option>
                        <option value="business_cards">Business Cards</option>
                        <option value="brochures">Brochures</option>
                        <option value="notebooks">Notebooks</option>
                        <option value="flyers">Flyers</option>
                        <option value="books">Books</option>
                        <option value="calendars">Calendars</option>
                        <option value="labels">Labels</option>
                        <option value="stickers">Stickers</option>
                        <option value="other">Other</option>
                    </select>
                    {formData.project_type === "other" && (
                    <div className="form-group custom-project">
                        {/* <label htmlFor="customLength">Custom Length (in cm)</label> */}
                        <input
                        type="string"
                        id="custom_project_type"
                        name="custom_project_type"
                        value={formData.custom_project_type}
                        onChange={handleChange}
                        placeholder="Enter Project Type"
                        required={formData.project_type === "other"}
                        />
                     </div>   
                    )}
                    {/* <label htmlFor="print_type">Print Type:</label> */}
                    <select id="print_type" name="print_type" value={formData.print_type} onChange={handleChange} required>
                        <option value="" disabled>Select Print Type</option>
                        <option value="offset">Offset Printing</option>
                        <option value="digital">Digital Printing</option>
                        <option value="unsure">Unsure</option>
                    </select>

                    {/* <label htmlFor="quantity">Quantity:</label> */}
                    <input type="number" id="quantity" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
                    {errors.quantity && <p>{errors.quantity}</p>}

                    {/* <label htmlFor="page_count">Page Count (for multipage items):</label> */}
                    <input type="number" id="page_count" name="page_count"  placeholder="Page Count (including cover for multi-page items)" value={formData.page_count} onChange={handleChange} />

                    <select
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>
                        Select Print Size (Note: We do not offer prints in sizes A1 or larger)
                        </option>
                        <option value="A2">A2</option>
                        <option value="A3">A3</option>
                        <option value="A4">A4</option>
                        <option value="A5">A5</option>
                        <option value="A6">A6</option>
                        <option value="custom">Custom Size</option>
                    </select>
                    {errors.size && <p>{errors.size}</p>}
                    {/* Conditionally render custom size input fields */}
                    {formData.size === "custom" && (
                    <div className="form-group custom-size-inputs">
                        {/* <label htmlFor="customLength">Custom Length (in cm)</label> */}
                        <input
                        type="number"
                        id="custom_length"
                        name="custom_length"
                        value={formData.custom_length}
                        onChange={handleChange}
                        placeholder="Enter custom length (in cm)"
                        required={formData.size === "custom"}
                        />

                        {/* <label htmlFor="customWidth">Custom Width (in cm)</label> */}
                        <input
                        type="number"
                        id="custom_width"
                        name="custom_width"
                        value={formData.custom_width}
                        onChange={handleChange}
                        placeholder="Enter custom width (in cm)"
                        required={formData.size === "custom"}
                        />
                    </div>
                    )}
                    <div className="page-cover">
                        <div className="pages">
                            <h4>Paper Details</h4>
                            {/* <label htmlFor="paper_type">Paper Type:</label> */}
                            <select id="paper_type" name="paper_type" value={formData.paper_type} onChange={handleChange} required>
                                <option value="">Select Paper Type</option>
                                <option value="gloss">Gloss</option>
                                <option value="matte">Matte</option>
                                <option value="uncoated">Uncoated</option>
                                <option value="textured">Textured</option>
                                <option value="others">Others</option>
                            </select>
                            <input type="number" id="page_grammage" name="page_grammage"  placeholder="Paper Grammage" value={formData.paper_grammage} onChange={handleChange} />
                            {/* <label htmlFor="color_options">Color Options:</label> */}
                            <select id="color_options" name="color_options" value={formData.color_options} onChange={handleChange} required>
                                <option value="">Select Color Options</option>
                                <option value="full_color">Full Color</option>
                                <option value="six_color">6 color</option>
                                <option value="five_color">5 Color</option>
                                <option value="four_color">4 Color</option>
                                <option value="three_color">3 Color</option>
                                <option value="two_color">2 Color</option>
                                <option value="one_color">1 Color</option>
                            </select>
                        </div>
                        <div className="cover">
                            <h4>Cover Details</h4>
                            {/* <label htmlFor="cover_paper_type">Paper Type (Cover):</label> */}
                            <select id="cover_paper_type" name="cover_paper_type" value={formData.cover_paper_type} onChange={handleChange}>
                                <option value="" selected>Select cover paper type</option>
                                <option value="gloss">Gloss</option>
                                <option value="matte">Matte</option>
                                <option value="uncoated">Uncoated</option>
                                <option value="textured">Textured</option>
                                <option value="others">Others</option>
                            </select>
                            <input type="number" id="cover_grammage" name="cover_grammage"  placeholder="Paper Grammage (Cover)" value={formData.cover_grammage} onChange={handleChange} />
                            {/* <label htmlFor="color_options">Color Options (Cover):</label> */}
                            <select id="cover_color_options" name="cover_color_options" value={formData.cover_color_options} onChange={handleChange}>
                                <option value="">Select Color Options for Cover</option>
                                <option value="full_color">Full Color</option>
                                <option value="six_color">6 color</option>
                                <option value="five_color">5 Color</option>
                                <option value="four_color">4 Color</option>
                                <option value="three_color">3 Color</option>
                                <option value="two_color">2 Color</option>
                                <option value="one_color">1 Color</option>
                            </select>
                        </div>
                    </div>
                    {/* <p>50 - 400 multiples of 10</p> */}
                    {/* <label htmlFor="finishing">Finishing Options:</label> */}
                    <Multiselect
                        options={finishingOptions} // Options for dropdown
                        selectedValues={finishingOptions.filter(option =>
                                        formData.finishing.includes(option.value)
                                        )} // Pre-selected values based on the formData.finishing state
                        onSelect={handleSelect} // Function to handle selection
                        onRemove={handleRemove}  // Function to handle removal of selected items
                        displayValue="name" // Property to display in dropdown
                        placeholder="Select Finishing Options"
                        style={{
                                multiselectContainer: { width: "100%" },
                                optionContainer: { maxHeight: "180px" }, // Allows for scrolling
                        }}
                        // showCheckbox={true} // Optional: Show checkboxes
                    />
                </section>

                {/* Design Details */}
                <section className="design-details">
                    <h3>Design Details</h3>
                    <div className="file-upload">
                        <FontAwesomeIcon className='upload-icon' icon={faFileUpload} />
                        <label>Upload Your Design</label>
                        <input type="file" id = 'design_upload' name='design_upload' onChange={handleChange}  />
                        {errors.design_upload && <p style={{ color: 'red' }}>{errors.design_upload}</p>}
                    </div>
                    {formData.design_upload && (
                            <div className="file-info">
                                <p>{uploadMessage}</p>
                                <button type="button" onClick={handleFileRemove} className="remove-button">
                                    Remove File
                                </button>
                            </div>
                    )}
                    <label style={{fontWeight:"bold"}}>Artwork Adjustment Required?</label>
                    <div className="designneed">
                        <div className="designneed-yes">
                            <input type="radio" id="design_yes" name="design_needed" value="yes" checked={formData.design_needed === 'yes'} onChange={handleChange} />
                            <label htmlFor="design_yes">Yes</label>
                        </div>
                        <div className="designneed-no">
                            <input type="radio" id="design_no" name="design_needed" value="no" checked={formData.design_needed === 'no'} onChange={handleChange} />
                            <label htmlFor="design_no">No</label>
                        </div>
                    </div>
                   

                    {/* <label htmlFor="design_instructions">Design Description/Instructions:</label> */}
                    <textarea id="design_instructions" name="design_instructions"   placeholder="Design Description/Instructions" value={formData.design_instructions} onChange={handleChange}></textarea>
                </section>

                {/* Delivery and Timeline */}
                <section className="delivery-details">
                    <h3>Delivery and Timeline</h3>
                    {/* <label htmlFor="delivery_method">Delivery x Method:</label> */}
                    <select id="delivery_method" name="delivery_method" value={formData.delivery_method} onChange={handleChange} required>
                        <option value="" disabled selected hidden>Delivery Method:</option>
                        <option value="pickup">Pickup</option>
                        <option value="local_delivery">Local Delivery (Additional Charges Apply)</option>
                        <option value="shipping">Shipping(Additional Charges Apply)</option>
                    </select>
                    {/* <label htmlFor="shipping_address">Shipping Address:</label> */}
                    {formData.delivery_method !== 'pickup' && (
                        <textarea id="shipping_address" name="shipping_address"  placeholder="Shipping Address" value={formData.shipping_address} onChange={handleChange}></textarea>
                    )}    
                    <label htmlFor="completion_date">Preferred Completion Date:</label>
                    <input 
                        type="date" 
                        id="completion_date" 
                        name="completion_date" 
                        value={formData.completion_date} 
                        onChange={handleChange} 
                        min={getTomorrowDate()} // Restrict to tomorrow and future dates
                    />
                    <label htmlFor="urgency">Urgency:</label>
                    <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange}>
                        <option value="standard">Standard</option>
                        <option value="rush">Rush Order (Additional Charges May Apply)</option>
                    </select>
                </section>

                {/* Additional Information */}
                <section>
                    <h3>Additional Information</h3>
                    <label style={{ fontWeight: "bold" }}>Would you like a sample/proof before printing (delivery charges apply)?</label>
                    <div className="sample-need">
                        <div className="sample-need-yes">
                            <input
                                type="radio"
                                id="sample_yes"
                                name="sample_needed"
                                value="yes"
                                checked={formData.sample_needed === 'yes'}
                                onChange={handleChange}
                            />
                            <label htmlFor="sample_yes">Yes</label>
                        </div>
                        <div className="sample-need-no">
                            <input
                                type="radio"
                                id="sample_no"
                                name="sample_needed"
                                value="no"
                                checked={formData.sample_needed === 'no'}
                                onChange={handleChange}
                            />
                            <label htmlFor="sample_no">No</label>
                        </div>
                    </div>
                    {/* <label htmlFor="notes">Additional Notes/Instructions:</label> */}
                    <textarea id="notes" name="notes"   placeholder="Additional Notes/Instructions:" value={formData.notes} onChange={handleChange}></textarea>

                    {/* <label htmlFor="budget">Budget (Optional):</label> */}
                    <input type="text" id="budget" name="budget" placeholder="Budget (Optional):" value={formData.budget} onBlur={handleBlur} onChange={handleChange} />
                    {errors.budget && <p>{errors.budget}</p>}
                </section>

                <button type="submit" className="quote-submit-button">Request Quote</button>
                <br />
                {submissionStatus && <p>{submissionStatus}</p>}
            </form>
        </div>
        
    );
};

export default QuotationForm;
