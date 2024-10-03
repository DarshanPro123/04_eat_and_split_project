import CommonBtn from "./CommonBtn";
import OneList from "./OneList";
import PropTypes from "prop-types";

const FriendsList = ({
  handleAddForm,
  showAddForm,
  friends,
  onSelectFriend,
  selectedFriend,
  onEditFriend,
  selectEditFriend,
}) => {
  return (
    <div className="lists-box">
      <h2>My Friend List</h2>
      <div className="lists">
        {/* Map over friends and render OneList for each friend */}
        {friends &&
          friends.map((friend) => {
            return (
              <OneList
                friend={friend}
                key={friend.id} // Place key here on OneList
                img={friend.image}
                name={friend.name}
                bal={friend.balance}
                onSelectFriend={onSelectFriend}
                selectedFriend={selectedFriend}
                selectEditFriend={selectEditFriend}
                onEditFriend={onEditFriend}
              />
            );
          })}
      </div>
      <CommonBtn onClick={handleAddForm}>
        {showAddForm ? "Remove" : "Add List"}
      </CommonBtn>
    </div>
  );
};

// Define prop types for validation
FriendsList.propTypes = {
  handleAddForm: PropTypes.func,
  showAddForm: PropTypes.bool,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Assuming id is a string; adjust if it's a different type
      image: PropTypes.string,
      name: PropTypes.string,
      balance: PropTypes.number,
    })
  ).isRequired,
  onSelectFriend: PropTypes.func.isRequired,
  onEditFriend: PropTypes.func.isRequired,
  selectEditFriend: PropTypes.func.isRequired,
  selectedFriend: PropTypes.shape({
    id: PropTypes.string, // Assuming id is a string; adjust if it's a different type
  }).isRequired,
};

export default FriendsList;
