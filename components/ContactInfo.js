import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const ContactInfo = () => {
  const items = [
    {
      icon: faEnvelope,
      text: 'me@iamriel.com',
    },
    {
      icon: faMapMarkerAlt,
      text: 'Davao City, Philippines',
    },
    {
      icon: faGlobe,
      text: 'iamriel.com',
    },
    {
      icon: faGithub,
      text: 'github.com/iamriel',
    },
    {
      icon: faLinkedin,
      text: 'linkedin.com/in/rieljun-liguid-89508b51',
    },
    {
      icon: faStackOverflow,
      text: 'stackoverflow.com/users/4436641/rieljun-liguid',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-1 text-white">
      {items.map(({ icon, text }, idx) => (
        <div key={idx}>
          <FontAwesomeIcon icon={icon} className="mr-4" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
