import { experiences } from '../data';
import ExperienceListItem from './ExperienceListItem';

const ExperienceList = () => {
  return (
    <div>
      <div className="header">Work Experience</div>
      {experiences.map((experience, idx) => (
        <ExperienceListItem key={idx} experience={experience} />
      ))}
    </div>
  );
};

export default ExperienceList;
