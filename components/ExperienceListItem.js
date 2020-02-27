import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ExperienceListItem = ({ experience }) => {
  const { company, period, position, tasks, outcome } = experience;

  return (
    <div className="experience-item mt-4">
      <div className="flex justify-between items-center font-semibold">
        <div className="text-lg">{position}</div>
        {period && (
          <div className="italic text-primary-1 text-xs mr-2">
            {period.start} - {period.end}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <div className="text-base">{company.name}</div>
        <div className="italic text-primary-1 text-xs mr-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
          {company.location}
        </div>
      </div>

      <div className="italic text-gray-600">{company.description}</div>

      <div className="mt-1 italic text-primary-1">Tasks/Responsibilities</div>

      {tasks &&
        tasks.map((task, idx) => (
          <div key={idx} className="flex">
            <div>
              <span className="inline-block bg-primary-1 rounded-full h-2 w-2 mr-2 mt-1"></span>
            </div>
            <div>{task}</div>
          </div>
        ))}

      {outcome && (
        <div>
          <div className="mt-1 italic text-primary-1">Outcome</div>

          <div className="italic">{outcome}</div>
        </div>
      )}
    </div>
  );
};

export default ExperienceListItem;
