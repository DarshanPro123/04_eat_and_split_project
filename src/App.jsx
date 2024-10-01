import { useState } from "react";
import "./App.css";
import AddFriendForm from "./Components/AddFriendForm";
import FriendsList from "./Components/FriendsList";
import SplitBillForm from "./Components/SplitBillForm";
// import friends from "../public/data";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddForm = () => {
    setShowAddForm((showAddForm) => !showAddForm);
  };
  return (
    <>
      <h1>My Split Bill App</h1>
      <div className="container">
        <FriendsList handleAddForm={handleAddForm} showAddForm={showAddForm} />
        {showAddForm && <AddFriendForm handleAddForm={handleAddForm} />}

        <SplitBillForm />
      </div>
    </>
  );
}

export default App;
