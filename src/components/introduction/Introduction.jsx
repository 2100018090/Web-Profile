import person from "../../assets/images/foto_webprofile.jpeg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import CVFile from "../../assets/CV Muhammad Kus Prasetyo.pdf";


// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Project",
    description: "15 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "250+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, Saya
            <span className="text-nowrap shrink-0 inline-block w-full">
              Muhammad Kus Prasetyo
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-justify">
            Saya lulusan Informatika Universitas Ahmad Dahlan dengan minat pada pengembangan web menggunakan
            <span className="bg-highlight"> Laravel </span> dan
            <span className="bg-highlight"> Spring Boot</span>.
            Pernah mengikuti program Bangkit 2024 (Cloud Computing) serta magang di Seven Inc,
            di mana saya mengembangkan aplikasi berbasis Laravel.
            Terbiasa mengelola database MySQL, autentikasi, dan validasi data.
            Siap terus belajar dan berkontribusi di bidang web development.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href={CVFile}
              download="CV_MuhammadPrasetyo.pdf"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </p>
        </div>
        {/* <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div> */}
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
