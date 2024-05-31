import PropTypes from "prop-types";
import Navigation from "./components/NavigationBar/Navigation";
import useCustomLocation from "./hooks/useCustomLocation";
import { useLocation } from "react-router-dom";

const App = ({ children }) => {
  const location = useLocation();
  const isChatApp = location.pathname.includes("app/@me/chat");

  return (
    <main>
      <div className="relative w-full h-full bg-[#fff2f2] dark:bg-[#202937]">
        {isChatApp ? null : <Navigation />}
        {children}
      </div>
    </main>
  );
};

App.propTypes = { children: PropTypes.node.isRequired };

export default App;
