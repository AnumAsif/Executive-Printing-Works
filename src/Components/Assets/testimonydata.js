import consultation from './consultation.jpg'
import editing from './editing.jpg'
import printing from './printing.jpg'
import finishing from './finishing.jpg'
import AlySir from './TestimonyImages/EHS_ASM.png';
import KAM from './TestimonyImages/KAM.jpeg';
import tamarind from './TestimonyImages/tamarind_group.png';

// import delivery from './delivery.jpg'

// import offsetmachine from './offset.jpg'

let testimony_data = [
    {
        id:1,
        client_name:"Aly S. Maherali Dip CII (CII Award), Chief Executive Officer, Aetna",
        client_image:AlySir,
        client_testimony:'Executive Printing Works Ltd consistently delivers exceptional quality and timely printing services at reasonable prices. From calendars to brochures, their professionalism and ability to offer alternatives in print specifications and paper quality are impressive. We highly recommend their services.',
    },
    {
        id:2,
        client_name:'Aneez Rahemtulla, Director, Kam Pharmacy (Wholesale) Ltd.',
        client_image:KAM,
        client_testimony:"Executive Printing Works Ltd has consistently delivered professional, high-quality printing services for us and our affiliated companies. Their work is timely, efficient, and competitively priced. We highly recommend their dedicated team.",
    },
    {
        id:3,
        client_name:"Geraldine Dunford, Sales & Marketing Director, THE TAMARIND GROUP",
        client_image:tamarind,
        client_testimony:"Executive Printing Works Ltd has consistently provided professional and high-quality printing services for the Tamarind Group. Their work is always delivered on time, with competitive pricing. Fast and efficient, they are a reliable partner.",
    },
    {
        id:4,
        client_name:'Finishing',
        client_image:finishing,
        client_testimony:"Elevate your printed materials with professional finishing such as laminating, binding, die-cutting & embossing. Finishing services add a professional touch that enhances the durability and appeal of your prints.",
    }
]
export default testimony_data;