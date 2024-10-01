import { useState } from "react";
import CommonBtn from "./CommonBtn";

// eslint-disable-next-line react/prop-types
const AddFriendForm = ({ handleAddForm, onFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/34");

  const handleFriendAdd = (e) => {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onFriend(newFriend); // Call the function to add a new friend

    // Reset fields
    setName("");
    setImage("https://i.pravatar.cc/34"); // Fixing typo here
  };

  return (
    <>
      <div className="overLay"></div>
      <div className="add_list_box">
        <h1>Add list form</h1>
        <form className="form_content" onSubmit={handleFriendAdd}>
          <label> Friend Name👥 :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label> Img Url🌅 :</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          {/* Change button type to "submit" */}
          <CommonBtn type="submit">Add</CommonBtn>
          <div className={`close`} onClick={handleAddForm}>
            ❌
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFriendForm;
