import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ViolationData from "../components/ViolationData";


const violationData = () => {
    return (
      <div> 
        <Header/>
        <Sidebar />
        <ViolationData/>
      </div>
    );
  };

  
  export default violationData;