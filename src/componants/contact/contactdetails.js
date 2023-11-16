import { AiOutlineExclamationCircle, AiOutlineMail, AiOutlineQuestionCircle, AiOutlineClockCircle } from 'react-icons/ai';
import { IoIosAirplane } from 'react-icons/io';


const Contactdetail =
[
    {
        id:1,
        Title:"Business & partnership",
        iconOne: <AiOutlineExclamationCircle/>,
        number: '+02010 1050 6405',
        dete: 'Mon-Fri:10am-9pm',
        iconTwo: <AiOutlineMail />,
        Email: 'eslam.shoir@gmail.com',
        prag: 'General business questions'
    },
    {
        id:2,
        Title:"Customers support",
        iconOne: <AiOutlineQuestionCircle/>,
        number: '+02010 1050 6405',
        dete: '24/7 Users support',
        iconTwo: <AiOutlineMail />,
        Email: 'eslam.shoir@gmail.com',
        prag: 'General questions'
    },
    {
        id:1,
        Title:"Our location",
        iconOne: <AiOutlineClockCircle/>,
        number: 'Mon-Fri:10am-9pm',
        dete: 'Business hours can vary',
        iconTwo: <IoIosAirplane />,
        Email: '121 Rock Sreet, 21 Avenue, New York, NY 92103-9000',
        prag: 'Please inform us about your visit'
        
    },
]
export default Contactdetail;

