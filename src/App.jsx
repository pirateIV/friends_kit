import PropTypes from "prop-types";
import Navigation from "./components/NavigationBar/Navigation";

const App = ({ children }) => {
  return (
    <main>
      <div className="relative w-full h-full bg-[#f4f4f4] dark:bg-[#202937]">
        <Navigation />
        {children}
      </div>
    </main>
  );
};

App.propTypes = { children: PropTypes.node.isRequired };

export default App;
