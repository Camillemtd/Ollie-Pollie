import logo from "../../assets/logo.png"
import './CharmScreen.css'; 

const CharmScreen = () => {
  return (
	<div className="flex items-center justify-center h-screen bg-gray-900 flex-col">
		<div className="w-1/4"><img src={logo} className="w-full"/></div>
	  <h1 className="text-6xl textAnimation text-shadow text-white font-light">OlliePollie&Co</h1>
  </div>
  );
}

export default CharmScreen;