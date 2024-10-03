import { useState } from "react";
import CommonBtn from "./CommonBtn";
import PropTypes from "prop-types";

const SplitBillForm = ({ selectedFriend }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  return (
    <>
      <form className="form-split-bill">
        <h3>Split Bill with {selectedFriend.name}</h3>

        <label>Bill Val 💸</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />

        <label>Your expense 💵 </label>
        <input
          type="text"
          value={paidByUser}
          onChange={(e) => setPaidByUser(e.target.value)}
        />

        <label>{selectedFriend.name} expense 💰</label>
        <input type="text" value={paidByFriend} readOnly />

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

SplitBillForm.propTypes = {
  selectedFriend: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default SplitBillForm;
