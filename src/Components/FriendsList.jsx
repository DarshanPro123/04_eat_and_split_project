import friends from "../../public/data";
import CommonBtn from "./CommonBtn";
import OneList from "./OneList";

// eslint-disable-next-line react/prop-types
const FriendsList = ({ handleAddForm, showAddForm }) => {
  return (
    <div className="lists-box">
      <h2>My Friend List</h2>
      <div className="lists">
        {friends.map((friend) => {
          return (
            <>
              <OneList
                key={friend.id}
                img={friend.image}
                name={friend.name}
                bal={friend.balance}
              />
            </>
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
