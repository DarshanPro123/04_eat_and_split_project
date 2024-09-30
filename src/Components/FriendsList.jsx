import friends from "../../public/data";
import CommonBtn from "./CommonBtn";

const FriendsList = () => {
  return (
    <div className="lists-box">
      <h2>My Friend List</h2>
      <div className="lists">
        <ul>
          {friends.map((friend) => {
            return (
              <>
                <li key={friend.id}>
                  <div className="content">
                    {" "}
                    <img src={friend.image} alt="" />
                    <div className="frnd-info">
                      <h3>{friend.name}</h3>
                      {friend.balance < 0 && (
                        <p className="red">
                          You debt with {friend.name} is $
                          {Math.abs(friend.balance)}
                        </p>
                      )}
                      {friend.balance > 0 && (
                        <p className="green">
                          {friend.name} debt with you is $
                          {Math.abs(friend.balance)}
                        </p>
                      )}
                      {friend.balance === 0 && (
                        <p>You and {friend.name} all clear</p>
                      )}
                    </div>
                  </div>
                  <CommonBtn>Select</CommonBtn>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FriendsList;
