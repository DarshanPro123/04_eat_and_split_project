import "./App.css";
import friends from "../public/data";

function App() {
  return (
    <>
      <h1>MY APP</h1>
      {friends.map((friend) => {
        return (
          <>
            <h1>{friend.name}</h1>
          </>
        );
      })}
    </>
  );
}

export default App;
