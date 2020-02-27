import { skills } from '../data';

const SkillList = () => {
  return (
    <div>
      <div className="header">Skills / Technologies</div>
      <div className="mt-3">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-primary-1 text-white px-2 py-1 my-1 rounded-lg">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
