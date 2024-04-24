import { Outlet } from "react-router-dom";
import Navigation from "./components/NavigationBar/Navigation";

const App = () => {
  return (
    <main>
      <div className='relative w-full h-full bg-[#f4f4f4] dark:bg-[#2f3b50]'>
        <Navigation />
        <Outlet />
      </div>
    </main>
  );
};

export default App;
