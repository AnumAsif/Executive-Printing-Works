// import businesscard2 from './Products/electrician-business-card2.jpg'
// import brouchure from './Products/fishing-charter-tourism-tri-fold-brochure.jpg'
// import hanger2 from './Products/home-inspection-services-door-hanger2.png'
// import flyer from './Products/pool-cleaning-flyer.jpg'
import businesscard from './Products/electrician_business_card1.png';
import hanger from './Products/doorhanger.png';
import postcard from './Products/postcard.png';
import tabletent from './Products/view_menu_restaurant_table_tent.png';
import catelog from './Products/catalogue1.png';
import deskcalendar from './Products/desk-calendar.png';
import brouchure from './Products/brouchure.png';
import flyer from './Products/flyer.png';
import folder from './Products/folder2.png';
import hardcoverbook from './Products/hard-cover-book.png';
import label from './Products/label2.png';
import magazine from './Products/magazines.png';
import menu from './Products/menu2.png';
import sleeve from './Products/sleeve3.png';
import spiralboundbook from './Products/spiralbound.png';
import sticker from './Products/sticker2.png';
import wallcalendar from './Products/wallcalendar.png';
import notebook from './Products/wire_o_bound.png';
import booklet1 from './Products/saddlestitched.png';
import booklet2 from './Products/Perfect_bound_booklet.png'
import notepad from './Products/notepad.png';
import envelope from './Products/envelope.png';
import businesscard2 from './Products/Colored_Foil_Business_Cards.png';
import businesscard3 from './Products/card_die_stamping.png';
import envelope2 from './Products/envelope gold foil.png';
import tag2 from './Products/tag die cutting.png';
import envelope3 from './Products/card_thermo_embossing.png';
import weddingcard from './Products/wedding_card_gold_foil_1.png';
const products = [
  {
    id: 1,
    name: 'Business Card',
    category: 'Business',
    description: 'Premium business card printing services that enhance your professional image.',
    binding_type: null,
    finishing_type:[],
    image: businesscard
  },
  {
    id: 2,
    name: 'Door Hanger',
    category: 'Marketing',
    description: 'Custom door hanger printing for targeted local marketing and promotions.',
    binding_type: null,
    finishing_type:[],
    image: hanger
  },
  {
    id: 3,
    name: 'Postcard',
    category: 'Marketing',
    description: 'High-quality postcard printing for impactful direct mail campaigns and advertising.',
    binding_type: null,
    finishing_type:[],
    image: postcard
  },
  {
    id: 4,
    name: 'Table Tent',
    category: 'Cards',
    description: 'Stylish table tent printing for restaurants, events, and promotional displays.',
    binding_type: null,
    finishing_type:[],
    image: tabletent
  },
  {
    id: 5,
    name: 'Catalogue',
    category: 'Books & Reports',
    description: 'Comprehensive catalogue printing for showcasing products and services with detailed information.',
    binding_type: null,
    finishing_type:[],
    image: catelog
  },
  {
    id: 6,
    name: 'Desk Calendar',
    category: 'Calendars',
    description: 'Professional desk calendar printing to keep your brand on display all year round.',
    binding_type: null,
    finishing_type:[],
    image: deskcalendar
  },
  {
    id: 7,
    name: 'Brochure',
    category: 'Marketing',
    description: 'Efficient brochure printing for effective marketing and promotional needs.',
    binding_type: null,
    finishing_type:[],
    image: brouchure
  },
  {
    id: 8,
    name: 'Flyer',
    category: 'Marketing',
    description: 'Eye-catching flyer printing for quick and effective advertising and event promotion.',
    binding_type: null,
    finishing_type:[],
    image: flyer
  },
  {
    id: 9,
    name: 'Presentation Folder',
    category: 'Business',
    description: 'Custom presentation folder printing for organizing documents and enhancing professional presentations.',
    binding_type: null,
    finishing_type:[],
    image: folder
  },
  {
    id: 10,
    name: 'Hard Cover Book',
    category: 'Books & Reports',
    description: 'Expert hardcover book printing services for durable, high-quality publications.',
    binding_type: 'Hard Cover',
    finishing_type:[],
    image: hardcoverbook
  },
  {
    id: 11,
    name: 'Label',
    category: 'Custom Products',
    description: 'Versatile label printing for branding, packaging, and product identification.',
    binding_type: null,
    finishing_type:[],
    image: label
  },
  {
    id: 12,
    name: 'Magazine',
    category: 'Books & Reports',
    description: 'Professional magazine printing for vibrant, engaging content and advertising.',
    binding_type: null,
    finishing_type:[],
    image: magazine
  },
  {
    id: 13,
    name: 'Menu',
    category: 'Marketing',
    description: 'Custom menu printing for restaurants and cafes to showcase your culinary offerings.',
    binding_type: null,
    finishing_type:[],
    image: menu
  },
  {
    id: 14,
    name: 'Product Sleeve',
    category: 'Custom Products',
    description: 'High-quality product sleeve printing for added protection and branding.',
    binding_type: null,
    finishing_type:[],
    image: sleeve
  },
  {
    id: 15,
    name: 'Spiral Bound Book',
    category: 'Books & Reports',
    description: 'Reliable spiral-bound book printing for easy-to-use manuals, planners, and notebooks.',
    binding_type: 'Spiral Bound',
    finishing_type:[],
    image: spiralboundbook
  },
  {
    id: 16,
    name: 'Sticker',
    category: 'Custom Products',
    description: 'Custom sticker printing for creative branding, marketing, and decoration.',
    binding_type: null,
    finishing_type:[],
    image: sticker
  },
  {
    id: 17,
    name: 'Wall Calendar',
    category: 'Calendars',
    description: 'Attractive wall calendar printing to keep your brand visible year-round.',
    binding_type: null,
    finishing_type:[],
    image: wallcalendar
  },
  {
    id: 18,
    name: 'Notepad',
    category: 'Business',
    description: 'Custom notepad printing for personalized stationery and promotional items.',
    binding_type: null,
    finishing_type:[]
,    image: notepad
  },
  {
    id: 19,
    name: 'Envelope',
    category: 'Business',
    description: 'Custom envelope printing for professional correspondence and branding.',
    binding_type: null,
    finishing_type:[],
    image: envelope
  },
  {
    id: 20,
    name: 'Notebook',
    category: 'Books & Reports',
    description: 'High-quality notebook printing for personalized stationery and promotional items.',
    binding_type: 'Wire-O Bound',
    finishing_type:[],
    image: notebook
  },
  {
    id: 21,
    name: 'Saddle Stitched Booklet',
    category: 'Books & Reports',
    description: 'Professional saddle-stitched booklet printing for catalogs, manuals, and more.',
    binding_type: 'Saddle Stitched',
    finishing_type:[],
    image: booklet1
  },
  {
    id: 22,
    name: 'Perfect Bound Booklet',
    category: 'Books & Reports',
    description: 'High-quality perfect-bound booklet printing for a professional look and feel.',
    binding_type: 'Perfect Bound',
    finishing_type:[],
    image: booklet2
  },
  {
    id: 23,
    name: 'Colored Foil Business Card',
    category: 'Business',
    description: 'Eye-catching business card with colored foil to enhance your design with a metallic finish.',
    binding_type: null,
    finishing_type: ['Colored Foil'],
    image: businesscard2
  },
  {
    id: 24,
    name: 'Die Stamping Business Card',
    category: 'Business',
    description: 'Professional business card with die stamping for an embossed look and feel.',
    binding_type: null,
    finishing_type: ['Die Stamping'],
    image: businesscard3
  },
  {
    id: 25,
    name: 'Gold Foil Envelope',
    category: 'Business',
    description: 'Elegant envelopes featuring gold foil finishing to enhance your brand’s image.',
    binding_type: null,
    finishing_type: ['Gold Foil'],
    image: envelope2
  },
  {
    id: 26,
    name: 'Die Cut Tag',
    category: 'Custom Products',
    description: 'Creative tags with die-cutting for unique shapes and customized designs.',
    binding_type: null,
    finishing_type: ['Die Cutting'],
    image: tag2
  },
  {
    id: 27,
    name: 'Thermo Embossed Envelope',
    category: 'Business',
    description: 'Envelopes featuring thermo embossing for a raised, textured finish.',
    binding_type: null,
    finishing_type: ['Thermo Embossing'],
    image: envelope3
  },
  {
    id: 28,
    name: 'Wedding Card',
    category: 'Cards',
    description: 'Elegant wedding card printing with gold foil for a luxurious and memorable touch.',
    binding_type: null,
    finishing_type: ['Gold Foil'],
    image: weddingcard
  }

];

export default products;
