const AuthContainer = ({ children }) => {
  return (
    <main>
      <div className='min-h-screen overflow-auto'>{children}</div>
    </main>
  );
};

export default AuthContainer;
