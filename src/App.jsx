import { useState } from "react";
import "./App.css";
import initialFriends from "../public/data";
import AddFriendForm from "./Components/AddFriendForm";
import FriendsList from "./Components/FriendsList";
import SplitBillForm from "./Components/SplitBillForm";

function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddForm = () => {
    setShowAddForm((prev) => !prev); // Toggle the form visibility
  };

  const handleFriendList = (friend) => {
    setFriendList((friends) => [...friends, friend]); // Add new friend to the list
    setShowAddForm(false);
  };

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

        <SplitBillForm />
      </div>
    </>
  );
}

export default App;
