import PropTypes from "prop-types";
import Navigation from "./components/NavigationBar/Navigation";
import useCustomLocation from "./hooks/useCustomLocation";

const App = ({ children }) => {
  const isChatApp = useCustomLocation("app/@me/chat");
  return (
    <main>
      <div className="relative w-full h-full bg-[#f4f4f4] dark:bg-[#202937]">
        {isChatApp ? null : <Navigation />}
        {children}
      </div>
    </main>
  );
};

App.propTypes = { children: PropTypes.node.isRequired };

export default App;
