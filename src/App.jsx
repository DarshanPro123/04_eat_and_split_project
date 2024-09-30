import "./App.css";
import AddFriendForm from "./Components/AddFriendForm";
import FriendsList from "./Components/FriendsList";
// import friends from "../public/data";

function App() {
  return (
    <>
      <h1>My Split Bill App</h1>
      <div className="container">
        <FriendsList />
        <AddFriendForm />
      </div>
    </>
  );
}

export default App;
