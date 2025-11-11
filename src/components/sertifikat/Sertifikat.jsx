import Projects from "./Projects";
import card1 from "../../assets/images/sertifikat/Sertifikat Bangkit.jpg";
import card2 from "../../assets/images/sertifikat/Sertifikat Dibimbing.jpg";
import card3 from "../../assets/images/sertifikat/Sertifikat Magang.png";
import card4 from "../../assets/images/sertifikat/Sertifikat Git.png";
import card5 from "../../assets/images/sertifikat/Sertifikat Backend.png";
import card6 from "../../assets/images/sertifikat/Sertifikat Javascript.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "FRONTEND",
    title: "Sertifikat Bangkit",
    description:
      "Saya fokus pada pembuatan antarmuka yang halus dan responsif yang menyeimbangkan daya tarik estetika dengan fungsionalitas praktis.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "FRONTEND",
    title: "Sertifikat Backend Dibimbing",
    description:
      "Saya fokus pada pembuatan antarmuka yang halus dan responsif yang menyeimbangkan daya tarik estetika dengan fungsionalitas praktis.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "FRONTEND",
    title: "Sertifikat Magang",
    description:
      "Saya fokus pada pembuatan antarmuka yang halus dan responsif yang menyeimbangkan daya tarik estetika dengan fungsionalitas praktis.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "BACKEND",
    title: "Sertifikat Git Dicoding",
    description:
      "Saya fokus pada pembuatan antarmuka yang halus dan responsif yang menyeimbangkan daya tarik estetika dengan fungsionalitas praktis.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "BACKEND",
    title: "Sertifikat Javascript Dicoding",
    description:
      "Saya fokus pada pembuatan antarmuka yang halus dan responsif yang menyeimbangkan daya tarik estetika dengan fungsionalitas praktis.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "BACKEND",
    title: "Sertifikat Backend Dicoding",
    description:
      "Saya fokus pada pembuatan antarmuka yang halus dan responsif yang menyeimbangkan daya tarik estetika dengan fungsionalitas praktis.",
    link: "#!",
  },
];

const Sertifikat = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="sertifikat"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Sertifikat</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Berikut kumpulan sertifikat yang saya peroleh sebagai bukti kemampuan saya dalam membangun aplikasi web yang responsif, efisien, dan berorientasi.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        {/* <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a> */}
      </div>
    </div>
  );
};

export default Sertifikat;
