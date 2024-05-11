import { Dropdown as CustomDropdown, DropdownItem } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import { dropdownItems } from ".";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <CustomDropdown
        label=""
        className="w-72 z-40 transition-transform rounded-xl dark:bg-[#202836]"
        renderTrigger={() => (
          <span className="cursor-pointer bg-gray-100 p-2 pe-8 text-sm rounded-full dark:text-white dark:bg-[#202836]">
            All Friends
          </span>
        )}
        inline
      >
        <div id="dropdown-main">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="dropdown-items"
            >
              {dropdownItems.map((item, index) => (
                <DropdownItem
                  key={index}
                  className="!py-1.5 hover:dark:bg-[#202836]/70"
                >
                  <figure className="flex items-center gap-3">
                    <span>{item.icon}</span>
                    <div className="flex flex-col items-start">
                      <h3>{item.title}</h3>
                      <small className="text-[.875em] text-[#a2a59b]">
                        {item.description}
                      </small>
                    </div>
                  </figure>
                </DropdownItem>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </CustomDropdown>
    </div>
  );
};

export default Dropdown;
