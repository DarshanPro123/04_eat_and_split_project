import { useState } from "react";
import "./App.css";
import initialFriends from "../public/data"; // Ensure this path is correct
import AddFriendForm from "./Components/AddFriendForm";
import FriendsList from "./Components/FriendsList";
import SplitBillForm from "./Components/SplitBillForm";

function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null); // Fixed naming

  const handleAddForm = () => {
    setShowAddForm((prev) => !prev); // Toggle the form visibility
  };

  const handleFriendList = (friend) => {
    setFriendList((friends) => [...friends, friend]);
    setShowAddForm(false);
  };

  const handleSelectionFriend = (friend) => {
    setSelectedFriend((cur) => (cur && cur?.id === friend.id ? null : friend));
  };

  return (
    <>
      <h1>My Split Bill App</h1>
      <div className="container">
        <FriendsList
          onSelectFriend={handleSelectionFriend}
          handleAddForm={handleAddForm}
          showAddForm={showAddForm}
          friends={friendList}
          selectedFriend={selectedFriend}
        />
        {showAddForm && (
          <AddFriendForm
            handleAddForm={handleAddForm}
            onFriend={handleFriendList}
          />
        )}
        {selectedFriend && <SplitBillForm selectedFriend={selectedFriend} />}
      </div>
    </>
  );
}

export default App;
