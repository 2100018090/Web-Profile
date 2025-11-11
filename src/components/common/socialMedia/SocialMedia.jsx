import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faFacebookF, link: "https://www.facebook.com/share/1CM9wEcQbS/" },
  { icon: faInstagram, link: "https://www.instagram.com/onemoresit?igsh=MWMwN3kzN3h0azdueg==" },
  { icon: faLinkedin, link: "https://linkedin.com/in/muhammad-kus-prasetyo-a00abb2a4" },
  { icon: faGithub, link: "https://github.com/2100018090" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
