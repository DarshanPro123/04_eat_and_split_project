import CommonBtn from "./CommonBtn";

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

export default OneList;
