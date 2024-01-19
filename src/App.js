import './App.css';
import Contact from './component/Contact/Contact';
import ExperienceComponent from './component/ExperienceComponent/ExperienceComponent';
import ProjectContainer from './component/ProjectContainer/ProjectContainer';
import Skillset from './component/Skillset/Skillset';
import Topcontainer from './component/Topcontainer/Topcontainer';
import Header from "./component/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Topcontainer />
      <Skillset />
      <ProjectContainer />
      <ExperienceComponent />
      <Contact />
      
    </div>
  );
}

export default App;
