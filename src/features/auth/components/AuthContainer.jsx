const AuthContainer = ({ children }) => {
  return (
    <main>
      <div className="min-h-screen overflow-auto bg-[#f4f4f4] dark:bg-[#2f3b50]">
        {children}
      </div>
    </main>
  );
};

export default AuthContainer;
