import { useState, useEffect } from "react";
import CommonBtn from "./CommonBtn";

// eslint-disable-next-line react/prop-types
const EditFriendsForm = ({ selectEditFriend, onEdit }) => {
  const [editName, setEditName] = useState("");
  const [url, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Effect to set initial values based on selected friend
  useEffect(() => {
    if (selectEditFriend) {
      // eslint-disable-next-line react/prop-types
      setEditName(selectEditFriend.name);
      // eslint-disable-next-line react/prop-types
      setUrl(selectEditFriend.image);
    }
  }, [selectEditFriend]);

  const handleEditSave = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!editName || !url) {
      setErrorMessage("Both fields are required.");
      return;
    }

    console.log(editName, url);

    // Call onEdit function and reset form
    onEdit(url, editName);
    setEditName("");
    setUrl("");
    setErrorMessage(""); // Clear error message after successful submission
  };

  return (
    <>
      <form className="edit-friend" onSubmit={handleEditSave}>
        <h1>Edit List</h1>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <label htmlFor="img-url">Img Url 🌅</label>
        <input
          id="img-url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <label htmlFor="friend-name">Name</label>
        <input
          id="friend-name"
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />

        <CommonBtn>Save☁️</CommonBtn>
      </form>
    </>
  );
};

export default EditFriendsForm;
