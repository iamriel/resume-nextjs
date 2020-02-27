import Layout from '../components/Layout';
import ExperienceList from '../components/ExperienceList';
import SkillList from '../components/SkillList';
import LanguageList from '../components/LanguageList';

export default () => (
  <Layout>
    <div className="flex">
      <div className="w-2/3 pr-2">
        <ExperienceList />
      </div>
      <div className="w-1/3 pl-3">
        <SkillList />
        <LanguageList />
      </div>
    </div>
  </Layout>
);
