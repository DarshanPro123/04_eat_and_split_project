import CommonBtn from "./CommonBtn";

// eslint-disable-next-line react/prop-types
const OneList = ({ name, bal, img }) => {
  return (
    <>
      <div className="list" key={bal}>
        <img src={img} alt="" />

        <div className="main-content">
          <h3>{name}</h3>
          {bal < 0 && (
            <p className="red">
              You debt with {name} of $ {Math.abs(bal)}
            </p>
          )}
          {bal > 0 && (
            <p className="green">
              {name} debt with you of $ {bal}
            </p>
          )}
          {bal === 0 && <p className="blue">You debt with {name} clear </p>}
        </div>

        <CommonBtn>Select</CommonBtn>
      </div>
    </>
  );
};

export default OneList;
