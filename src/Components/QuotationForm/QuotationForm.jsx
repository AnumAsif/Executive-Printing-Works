import React, { useState} from 'react';
import './QuotationForm.css';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import Multiselect from 'multiselect-react-dropdown';


const QuotationForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);
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
        cover_paper_type:'',
        page_grammage: null, // New field
        cover_grammage: null, // New field
        color_options: '',
        cover_color_options:'',
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
   
    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: e.target.files[0] || null
            });
            setUploadMessage(`File selected: ${e.target.files[0].name}`);
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };
    // Handle file removal
    const handleFileRemove = () => {
        setFormData({
            ...formData,
            design_upload: null
        })
        setUploadMessage("No file selected.");
         // Update message
    };

    // const handleFinishingChange = (selectedList) => {
    //     setFormData({
    //       ...formData,
    //       finishing: selectedList.map(item => item.value) // Extracting the 'value' from selected items
    //     });
    //   };
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
        // formDataToSend.append('design_upload', fileInput.files[0]);
        // console.log("attached file is:"+fileInput.files[0]);
        // for (const key in formData){
        //     if (formData[key]!= null){
        //         formDataToSend.append(key, formData[key])
        //     }
        // }

        // if (formData.design_upload) {
        //     formDataToSend.append('design_upload', formData.design_upload);
        // }
        
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
            <p>Get a Quote within a Day Upon Form Submission</p>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="quotation-form">
            {/* Customer Information */}
                <section>
                    <h3>Customer Information</h3>
                    <div className="customer-info">
                        <div className="customer-info-1">
                        {/* <label htmlFor="name">Name:</label> */}
                            <input type="text" id="name" name="customer_name"  placeholder="Name" value={formData.customer_name} onChange={handleChange} required />
                            {errors.customer_name && <p>{errors.customer_name}</p>}

                            {/* <label htmlFor="email">Email:</label> */}
                            <input type="email" id="email" name="customer_email" placeholder="Email" value={formData.customer_email} onChange={handleChange} required />
                            {errors.customer_email && <p>{errors.customer_email}</p>}
                        </div>
                        <div className="customer-info-2">
                            <input type="tel" id="phone" name="customer_phone"  placeholder="Phone Number" value={formData.customer_phone} onChange={handleChange} required />
                            {errors.customer_phone && <p>{errors.customer_phone}</p>}
                        {/* <label htmlFor="company">Company Name:</label> */}
                            <input type="text" id="company" name="customer_company"   placeholder="Company Name" value={formData.customer_company} onChange={handleChange} />
                        </div>
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
                        required
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
                    <input type="number" id="page_count" name="page_count"  placeholder="Page Count (for multipage items including cover)"value={formData.page_count} onChange={handleChange} />

                    {/* <label htmlFor="size">Size/Dimensions:</label> */}
                    {/* <input type="text" id="size" name="size" placeholder="Size/Dimensions (e.g., A4, 8.5x11 inches, W 310mm x H 280mm)" value={formData.size} onChange={handleChange} required /> */}
                    {/* {errors.size && <p>{errors.size}</p>} */}
                    <select
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>
                        Select size
                        </option>
                        <option value="A4">A4</option>
                        <option value="A3">A3</option>
                        <option value="A2">A2</option>
                        <option value="A5">A5</option>
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
                        required
                        />

                        {/* <label htmlFor="customWidth">Custom Width (in cm)</label> */}
                        <input
                        type="number"
                        id="custom_width"
                        name="custom_width"
                        value={formData.custom_width}
                        onChange={handleChange}
                        placeholder="Enter custom width (in cm)"
                        required
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
                            <select id="cover_paper_type" name="cover_paper_type" value={formData.cover_paper_type} onChange={handleChange} required>
                                <option value="" selected>Select cover paper type</option>
                                <option value="gloss">Gloss</option>
                                <option value="matte">Matte</option>
                                <option value="uncoated">Uncoated</option>
                                <option value="textured">Textured</option>
                                <option value="others">Others</option>
                            </select>
                            <input type="number" id="cover_grammage" name="cover_grammage"  placeholder="Paper Grammage (Cover)" value={formData.cover_grammage} onChange={handleChange} />
                            {/* <label htmlFor="color_options">Color Options (Cover):</label> */}
                            <select id="cover_color_options" name="cover_color_options" value={formData.cover_color_options} onChange={handleChange} required>
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
                    </div>
                    {formData.design_upload && (
                            <div className="file-info">
                                <p>{uploadMessage}</p>
                                <button type="button" onClick={handleFileRemove}>
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
                    <input type="date" id="completion_date" name="completion_date" value={formData.completion_date} onChange={handleChange} />

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
                    <input type="text" id="budget" name="budget" placeholder="Budget (Optional):" value={formData.budget} onChange={handleChange} />
                </section>

                <button type="submit" className="quote-submit-button">Request Quote</button>
                <br />
                {submissionStatus && <p>{submissionStatus}</p>}
            </form>
        </div>
        
    );
};

export default QuotationForm;
