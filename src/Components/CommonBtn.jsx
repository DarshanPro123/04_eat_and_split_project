// eslint-disable-next-line react/prop-types
const CommonBtn = ({ children, onClick }) => {
  return (
    <>
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default CommonBtn;
