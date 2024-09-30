import friends from "../../public/data";
import CommonBtn from "./CommonBtn";

const FriendsList = () => {
  return (
    <div className="lists-box">
      <h2>My Friend List</h2>
      <div className="lists">
        {friends.map((friend) => {
          return (
            <>
              <div className="list" key={friend.id}>
                <img src={friend.image} alt="" />

                <div className="main-content">
                  <h3>{friend.name}</h3>
                  {friend.balance < 0 && (
                    <p className="red">
                      You debt with {friend.name} of ${" "}
                      {Math.abs(friend.balance)}
                    </p>
                  )}
                  {friend.balance > 0 && (
                    <p className="green">
                      {friend.name} debt with you of $ {friend.balance}
                    </p>
                  )}
                  {friend.balance === 0 && (
                    <p className="blue">You debt with {friend.name} clear </p>
                  )}
                </div>

                <CommonBtn>Select</CommonBtn>
              </div>
            </>
          );
        })}
      </div>
      <CommonBtn>Add List</CommonBtn>
    </div>
  );
};

export default FriendsList;
