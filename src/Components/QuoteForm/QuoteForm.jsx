// import React, {useState} from 'react';
// import './QuoteForm.css'; // Import the CSS file
// import axios from 'axios';

// const QuoteForm = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         orderDetails: '',
//     });
//     const [file, setFile] = useState(null);
//     const [submissionStatus, setSubmissionStatus] = useState('');
//     // Handle form input changes
//     const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//         ...formData,
//         [name]: value,
//     });
//     };

//     // Handle file input changes
//     const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//     };

//     // Handle form submission
//     const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent the default form submission behavior

//     const data = new FormData();
//     data.append('firstName', formData.firstName);
//     data.append('lastName', formData.lastName);
//     data.append('email', formData.email);
//     data.append('phone', formData.phone);
//     data.append('orderDetails', formData.orderDetails);
//     if (file) {
//         data.append('design_upload', file);
//     }

//     try {
//         const response = await axios.post('http://localhost:4000/api/quotes/submit-quotation', data, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//         });
//         console.log('Success:', response.data);
//         setSubmissionStatus('Successful');
//     } catch (error) {
//         console.error('Error:', error.message);
//         setSubmissionStatus('Error submitting form');
//     }
//     };
//     return (
//         <div className="quote-form-container">
//             <h1>Get a Quote Now</h1>
//             <p>Get a Quote within a Day Upon Form Submission</p>
//             <form className="quote-form" encType="multipart/form-data" id="quoteForm">
//                 <div className="form-group name">
//                     <input type="text" name="firstName" placeholder="First name" required />
//                     <input type="text" name="lastName" placeholder="Last name" required />
//                 </div>
//                 <div className="form-group name">
//                     <input type="email" name="email" placeholder="Email address" required />
//                     <input type="tel" name="phone" placeholder="Phone" required />
//                 </div>
//                 <div className="form-group">
//                     <textarea name="orderDetails" placeholder="Order details: Submit Your Order Information - Item Name, Decoration Size, Quantity, Due Date and any other details" required />
//                 </div>
//                 <div className="form-group">
//                     <input type="file" name='design_upload'/>
//                 </div>
//                 <button type="submit" className="submit-button">Send Request</button>
//                 <br />
//                 {submissionStatus && <p>{submissionStatus}</p>}
//             </form>
//         </div>
//     );
// };

// export default QuoteForm;
import React, { useState } from 'react';
import axios from 'axios';

function FileUploadForm() {
  const [file, setFile] = useState(null);

  // Handle file input change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData();
    if (file) {
      formData.append('file', file); // Append file to formData
    }

    try {
      const response = await axios.post('http://localhost:4000/api/quotes/submit-file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Specify the content type for file uploads
        },
      });
      console.log('Success:', response.data);
    //   'File uploaded successfully!');
    } catch (error) {
      console.error('Error:', error.message);
    //   alert('Error occurred during file upload: ' + error.message);
    }
  };

  return (
    <div className="file-upload-form-container">
      <h1>Upload a File</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Upload</button>
      </form>
    </div>
  );
}

export default FileUploadForm;
