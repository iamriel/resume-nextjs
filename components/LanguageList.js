const LanguageList = () => {
  const languages = [
    {
      name: 'English',
      level: 'Full Professional Proficiency',
    },
    {
      name: 'Filipino',
      level: 'Native Speaker',
    },
  ];

  return (
    <div className="mt-10">
      <div className="header">Languages</div>
      <div className="mt-2">
        {languages && languages.map((language, idx) => (
          <div key={idx} className="py-1 my-1">
            <div>{language.name}</div>
            <div className="italic text-primary-1">{language.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageList;
