import work_af_1 from "../assets/images/work_af_1.JPG";
import work_bf_1 from "../assets/images/work_bf_1.JPG";
import work_af_2 from "../assets/images/work_af_2.jpg";
import work_bf_2 from "../assets/images/work_bf_2.jpg";
import work_af_3 from "../assets/images/work_af_3.jpg";
import work_bf_3 from "../assets/images/work_bf_3.jpg";
import work_af_4 from "../assets/images/work_af_4.jpg";
import work_bf_4 from "../assets/images/work_bf_4.jpg";
import kurdistan from "../assets/images/Flag_of_Kurdistan.png";
import uk from "../assets/images/Flag_of_the_United_Kingdom.png";
import iraq from "../assets/images/Flag_of_Iraq.svg.png";
import Card1 from "../assets/images/Vectors/Icon 1.png";
import Card2 from "../assets/images/Vectors/Icon 2.png";
import Card3 from "../assets/images/Vectors/Icon 3.png";
import Card4 from "../assets/images/Vectors/Icon 4.png";
import {
  FaClipboardCheck,
  FaClinicMedical,
  FaMicroscope,
  FaUserMd,
  FaPhoneVolume,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

export const works = [
  {
    id: 1,
    afterImage: work_af_1,
    beforeImage: work_bf_1,
    title: "smile_makeover",
    subTitle: "smile_makeover_subtitle",
    videoId: "RlkiFgb2SFk?si=npVA1_pgExuW_CiB",
  },
  {
    id: 2,
    afterImage: work_af_2,
    beforeImage: work_bf_2,
    title: "restorative_tentistry",
    subTitle: "restorative_tentistry_subtitle",
    videoId: "7Ug1qLQ7osg?si=X7sXod7repTxQjkk",
  },
  {
    id: 3,
    afterImage: work_af_3,
    beforeImage: work_bf_3,
    title: "orthodontic_success",
    subTitle: "orthodontic_success_subtitle",
    videoId: "lZzVqjUsdps?si=JwLEl-kh8AJIMKiP",
  },
  {
    id: 4,
    afterImage: work_af_4,
    beforeImage: work_bf_4,
    title: "dental_implants",
    subTitle: "dental_implants_subtitle",
    videoId: "-WFobqKlcfY?si=zOsKrT7QnSZBiL6J",
  },
];
export const navItems = [
  {
    id: 1,
    name: "home",
    link: "/",
    sectionName: "/",
  },
  {
    id: 2,
    name: "about",
    link: "/About",
    sectionName: "About",
  },
  {
    id: 3,
    name: "services",
    link: "/Services",
    sectionName: "Services",
  },
  {
    id: 4,
    name: "our_works",
    link: "/Works",
    sectionName: "Works",
  },
  {
    id: 5,
    name: "location",
    link: "/Location",
    sectionName: "Location",
  },
  {
    id: 6,
    name: "contact",
    link: "/Contact",
    sectionName: "Contact",
  },
];

export const Languages = [
  { id: 1, name: "English", logo: uk, lang: "en" },
  { id: 2, name: "Kurdish", logo: kurdistan, lang: "ku" },
  { id: 3, name: "Arabic", logo: iraq, lang: "ar" },
];

export const MobileContent = [
  {
    id: 1,
    title: "comprehensive_dental_check_ups",
    description: "comprehensive_dental_check_ups_subtitle",
    card: Card1,
    types: [
      {
        id: 1,
        title: "orthodontic_care",
        description: "orthodontic_care_subtitle",
        icon: "dentistry.svg",
      },
      {
        id: 2,
        title: "comprehensive_dental_check_ups",
        description: "comprehensive_dental_check_ups_subtitle",
        icon: "implants.svg",
      },
      {
        id: 3,
        title: "advanced_dental_treatments",
        description: "advanced_dental_treatments_subtitle",
        icon: "oral.svg",
      },
      {
        id: 4,
        title: "patient_centered_care",
        description: "patient_centered_care_subtitle",
        icon: "general.svg",
      },
    ],
  },
  {
    id: 2,
    title: "orthodontic_care",
    description: "orthodontic_care_subtitle",
    card: Card2,
    types: [
      {
        id: 1,
        title: "routine_cleanings",
        description: "routine_cleanings_subtitle",
        icon: "dentistry.svg",
      },
      {
        id: 2,
        title: "oral_examinations",
        description: "oral_examinations_subtitle",
        icon: "implants.svg",
      },
      {
        id: 3,
        title: "x_ray_diagnostics",
        description: "x_ray_diagnostics_subtitle",
        icon: "oral.svg",
      },
      {
        id: 4,
        title: "oral_cancer_screenings",
        description: "oral_cancer_screenings_subtitle",
        icon: "general.svg",
      },
    ],
  },
  {
    id: 3,
    title: "advanced_dental_treatments",
    description: "advanced_dental_treatments_subtitle",
    card: Card3,
    types: [
      {
        id: 1,
        title: "routine_cleanings",
        description: "routine_cleanings_subtitle",
        icon: "dentistry.svg",
      },
      {
        id: 2,
        title: "oral_examinations",
        description: "oral_examinations_subtitle",
        icon: "implants.svg",
      },
      {
        id: 3,
        title: "x_ray_diagnostics",
        description: "x_ray_diagnostics_subtitle",
        icon: "oral.svg",
      },
      {
        id: 4,
        title: "oral_cancer_screenings",
        description: "oral_cancer_screenings_subtitle",
        icon: "general.svg",
      },
    ],
  },
  {
    id: 4,
    title: "advanced_dental_treatments",
    description: "advanced_dental_treatments_subtitle",
    card: Card4,
    types: [
      {
        id: 1,
        title: "routine_cleanings",
        description: "routine_cleanings_subtitle",
        icon: "dentistry.svg",
      },
      {
        id: 2,
        title: "oral_examinations",
        description: "oral_examinations_subtitle",
        icon: "implants.svg",
      },
      {
        id: 3,
        title: "x_ray_diagnostics",
        description: "x_ray_diagnostics_subtitle",
        icon: "oral.svg",
      },
      {
        id: 4,
        title: "oral_cancer_screenings",
        description: "oral_cancer_screenings_subtitle",
        icon: "general.svg",
      },
    ],
  },
];

export const content = [
  {
    title: "comprehensive_dental_check_ups",
    description: "comprehensive_dental_check_ups_subtitle",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={Card1}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    types: [
      {
        id: 1,
        title: "routine_cleanings",
        description: "routine_cleanings_subtitle",
        icon: "dentistry.svg",
      },
      {
        id: 2,
        title: "oral_examinations",
        description: "oral_examinations_subtitle",
        icon: "implants.svg",
      },
      {
        id: 3,
        title: "x_ray_diagnostics",
        description: "x_ray_diagnostics_subtitle",
        icon: "oral.svg",
      },
      {
        id: 4,
        title: "oral_cancer_screenings",
        description: "oral_cancer_screenings_subtitle",
        icon: "general.svg",
      },
    ],
  },

  {
    title: "orthodontic_care",
    description: "orthodontic_care_subtitle",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={Card2}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    types: [
      {
        id: 1,
        title: "routine_cleanings",
        description: "routine_cleanings_subtitle",
        icon: "dentistry.svg",
      },
      {
        id: 2,
        title: "oral_examinations",
        description: "oral_examinations_subtitle",
        icon: "implants.svg",
      },
      {
        id: 3,
        title: "x_ray_diagnostics",
        description: "x_ray_diagnostics_subtitle",
        icon: "oral.svg",
      },
      {
        id: 4,
        title: "oral_cancer_screenings",
        description: "oral_cancer_screenings_subtitle",
        icon: "general.svg",
      },
    ],
  },
  {
    title: "advanced_dental_treatments",
    description: "advanced_dental_treatments",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={Card3}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    types: [
      {
        id: 1,
        title: "routine_cleanings",
        description: "routine_cleanings_subtitle",
        icon: "dentistry.svg",
      },
      {
        id: 2,
        title: "oral_examinations",
        description: "oral_examinations_subtitle",
        icon: "implants.svg",
      },
      {
        id: 3,
        title: "x_ray_diagnostics",
        description: "x_ray_diagnostics_subtitle",
        icon: "oral.svg",
      },
      {
        id: 4,
        title: "oral_cancer_screenings",
        description: "oral_cancer_screenings_subtitle",
        icon: "general.svg",
      },
    ],
  },
  {
    title: "patient_centered_care",
    description: `patient_centered_care`,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={Card4}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    types: [
      {
        id: 1,
        title: "routine_cleanings",
        description: "routine_cleanings_subtitle",
        icon: "dentistry.svg",
      },
      {
        id: 2,
        title: "oral_examinations",
        description: "oral_examinations_subtitle",
        icon: "implants.svg",
      },
      {
        id: 3,
        title: "x_ray_diagnostics",
        description: "x_ray_diagnostics_subtitle",
        icon: "oral.svg",
      },
      {
        id: 4,
        title: "oral_cancer_screenings",
        description: "oral_cancer_screenings_subtitle",
        icon: "general.svg",
      },
    ],
  },
];

export const WhyChooseUsData = [
  {
    id: 1,
    title: "expert_care",
    description: "expert_care_subtitle",
    icon: <FaClipboardCheck size={50} color="#00b6db" />,
  },
  {
    id: 2,
    title: "state_of_the_art_facilities",
    description: "state_of_the_art_facilities_subtitle",
    icon: <FaClinicMedical size={50} color="#00b6db" />,
  },
  {
    id: 3,
    title: "comprehensive_services",
    description: "comprehensive_services_subtitle",
    icon: <FaMicroscope size={50} color="#00b6db" />,
  },
  {
    id: 4,
    title: "patient_centered_approach",
    description: "patient_centered_approach_subtitle",
    icon: <FaUserMd size={50} color="#00b6db" />,
  },
];
export const appointmentInfo = [
  {
    title: "phone",
    description: "07504494818, 07844494818",
    icon: <FaPhoneVolume className="text-white" />,
    animation: { "data-aos": "fade-right", "data-aos-duration": "1000" },
  },
  {
    title: "email",
    description: "info@drsheban.com",
    icon: <MdEmail className="text-white" />,
    animation: { "data-aos": "fade-left", "data-aos-duration": "1000" },
    link: "mailto:info@drsheban.com",
  },
  {
    title: "address",
    description: "address_subtitle",
    icon: <FaMapLocationDot className="text-white " />,
    animation: { "data-aos": "fade-right", "data-aos-duration": "1000" },
    link: "https://www.google.com/maps/dir//Dr+Sheban+farhad+near+aya+supermarket+Erbil,+Erbil+Governorate+44001/@36.2017803,44.0326096,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40072351fcefae9d:0xeb1be8815bad3f5f!2m2!1d44.0326096!2d36.2017803?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D",
  },
];
