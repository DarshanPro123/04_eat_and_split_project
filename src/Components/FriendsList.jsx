import CommonBtn from "./CommonBtn";
import OneList from "./OneList";
import PropTypes from "prop-types";

const FriendsList = ({
  handleAddForm,
  showAddForm,
  friends,
  onSelectFriend,
  selectedFriend,
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
  handleAddForm: PropTypes.func.isRequired,
  showAddForm: PropTypes.bool.isRequired,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Assuming id is a string; adjust if it's a different type
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    })
  ).isRequired,
  onSelectFriend: PropTypes.func.isRequired,
  selectedFriend: PropTypes.shape({
    id: PropTypes.string.isRequired, // Assuming id is a string; adjust if it's a different type
  }).isRequired,
};

export default FriendsList;
