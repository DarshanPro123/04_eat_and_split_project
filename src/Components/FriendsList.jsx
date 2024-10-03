import CommonBtn from "./CommonBtn";
import OneList from "./OneList";

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

export default FriendsList;
