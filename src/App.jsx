import { useState } from "react";
import "./App.css";
import initialFriends from "../public/data"; // Ensure this path is correct
import AddFriendForm from "./Components/AddFriendForm";
import FriendsList from "./Components/FriendsList";
import SplitBillForm from "./Components/SplitBillForm";
import EditFriendsForm from "./Components/EditFriendsForm";

function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [selectEditFriend, setSelectEditFriend] = useState(null);

  const toggleAddForm = () => {
    setShowAddForm((prev) => !prev);
  };

  const addFriendToList = (friend) => {
    setFriendList((friends) => [...friends, friend]);
    setShowAddForm(false);
  };

  const selectFriend = (friend) => {
    setSelectedFriend((current) =>
      current && current.id === friend.id ? null : friend
    );
    setShowAddForm(false);
    setSelectEditFriend(null); // Reset edit selection when selecting a friend
  };

  const splitBillForFriend = (value) => {
    if (!selectedFriend) return; // Prevent errors if no friend is selected
    setFriendList((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id ? { ...friend, balance: value } : friend
      )
    );
    setSelectedFriend(null);
  };

  const editFriendSelection = (friend) => {
    setSelectEditFriend((current) =>
      current && current.id === friend.id ? null : friend
    );
  };

  const saveEditedFriend = (url, newName) => {
    setFriendList((friends) =>
      friends.map((friend) =>
        friend.id === selectEditFriend.id
          ? { ...friend, image: url, name: newName }
          : friend
      )
    );
    setSelectEditFriend(null); // Reset edit selection after saving
  };

  return (
    <>
      <h1>My Split Bill App</h1>
      <div className="container">
        <FriendsList
          onSelectFriend={selectFriend}
          handleAddForm={toggleAddForm}
          showAddForm={showAddForm}
          friends={friendList}
          selectedFriend={selectedFriend}
          selectEditFriend={selectEditFriend}
          onEditFriend={editFriendSelection}
        />
        {showAddForm && (
          <AddFriendForm
            handleAddForm={toggleAddForm}
            onFriend={addFriendToList}
          />
        )}
        {selectedFriend && (
          <SplitBillForm
            selectedFriend={selectedFriend}
            onSplitBill={splitBillForFriend}
          />
        )}
        {selectEditFriend && (
          <EditFriendsForm
            selectEditFriend={selectEditFriend}
            onEdit={saveEditedFriend} // Pass edited data as an object
          />
        )}
      </div>
    </>
  );
}

export default App;
