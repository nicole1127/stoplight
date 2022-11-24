import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Violations from "../components/Violations";
import Bottom from "../components/Bottom";


const violations = () => {
    return (
      <div>
        <Topbar/>
        <Sidebar/> 
        <Violations/>
        <Bottom/>
      </div>
    );
  };

  export default violations;