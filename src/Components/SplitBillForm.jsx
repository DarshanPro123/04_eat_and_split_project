import { useState } from "react";
import CommonBtn from "./CommonBtn";

// eslint-disable-next-line react/prop-types
const SplitBillForm = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmitBill = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <>
      <form className="form-split-bill" onSubmit={handleSubmitBill}>
        <h3>Split Bill with {selectedFriend.name}</h3>

        <label>Bill Val 💸</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => Number(setBill(e.target.value))}
        />

        <label>Your expense 💵 </label>
        <input
          type="text"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value)
            )
          }
        />

        <label>{selectedFriend.name} expense 💰</label>
        <input type="text" value={paidByFriend} readOnly disabled />

        <label>Who is Paying bill 🧐</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You 👼</option>
          <option value="friend">{selectedFriend.name} 🗣️</option>
        </select>

        <CommonBtn>Split Bill 🥵</CommonBtn>
      </form>
    </>
  );
};

export default SplitBillForm;
