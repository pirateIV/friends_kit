import PropTypes from "prop-types";
import CustomButtonGroup from "./CustomButtonGroup";
import useCustomLocation from "@/hooks/useCustomLocation";

const SignupCard = ({ children, prev, next }) => {
  const isAccountCreated = useCustomLocation("signup/created");
  return (
    <section className="relative py-5 max-w-[540px] w-full mx-auto">
      <div className="bg-white p-[30px] shadow-tiny rounded-lg dark:bg-[#202836]">
        {children}
      </div>
      {!isAccountCreated ? <CustomButtonGroup prev={prev} next={next} /> : null}
    </section>
  );
};

SignupCard.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default SignupCard;
