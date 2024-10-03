import CommonBtn from "./CommonBtn";
import PropTypes from "prop-types";

const OneList = ({
  friend,
  name,
  bal,
  img,
  onSelectFriend,
  selectedFriend,
  onEditFriend,
  selectEditFriend,
}) => {
  const isSelected = selectedFriend?.id === friend.id;
  const isEditable = selectEditFriend?.id === friend.id;

  return (
    <div className={`list ${isSelected ? "selected" : ""}`} key={bal}>
      <div
        className="edit-btn"
        onClick={() => {
          onEditFriend(friend);
        }}
      >
        {isEditable ? "📁" : "🖋️"}
      </div>
      <img src={img} alt={name} />

      <div className="main-content">
        <h3>{friend.name}</h3>
        {bal < 0 && (
          <p className="red">
            You owe {name} $ {Math.abs(bal)}
          </p>
        )}
        {bal > 0 && (
          <p className="green">
            {name} owes you $ {bal}
          </p>
        )}
        {bal === 0 && <p className="blue">You and {name} are clear</p>}
      </div>

      <CommonBtn onClick={() => onSelectFriend(friend)}>
        {isSelected ? "close" : "Select"}
      </CommonBtn>
    </div>
  );
};

// Define prop types for validation
OneList.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.string.isRequired, // Assuming id is a string; adjust if it's a different type
  }).isRequired,
  name: PropTypes.string.isRequired,
  bal: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  onSelectFriend: PropTypes.func.isRequired,
  onEditFriend: PropTypes.func.isRequired,
  selectEditFriend: PropTypes.func.isRequired,
  selectedFriend: PropTypes.shape({
    id: PropTypes.string.isRequired, // Assuming id is a string; adjust if it's a different type
  }).isRequired,
};

export default OneList;
