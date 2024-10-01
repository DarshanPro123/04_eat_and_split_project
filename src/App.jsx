import { useState } from "react";
import "./App.css";
import initialFriends from "../public/data";
import AddFriendForm from "./Components/AddFriendForm";
import FriendsList from "./Components/FriendsList";
import SplitBillForm from "./Components/SplitBillForm";

function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSElectedFriend] = useState(null);

  const handleAddForm = () => {
    setShowAddForm((prev) => !prev); // Toggle the form visibility
  };

  const handleFriendList = (friend) => {
    setFriendList((friends) => [...friends, friend]);
    setShowAddForm(false);
  };
  console.log(friendList); // Add new friend to the list

  return (
    <>
      <h1>My Split Bill App</h1>
      <div className="container">
        <FriendsList
          handleAddForm={handleAddForm}
          showAddForm={showAddForm}
          friends={friendList}
        />
        {showAddForm && (
          <AddFriendForm
            handleAddForm={handleAddForm}
            onFriend={handleFriendList}
          />
        )}

        {selectedFriend && <SplitBillForm />}
      </div>
    </>
  );
}

export default App;
