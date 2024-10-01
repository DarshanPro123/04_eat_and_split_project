// import { useState } from "react";
import CommonBtn from "./CommonBtn";

const SplitBillForm = () => {
  // const [bill, setBill] = useState("");
  // const [paidByUser, setPaidByUser] = useState("");
  // const paidByFriend = bill ? bill - paidByUser : "";
  // const [whoIsPaying, setWhoIsPaying] = useState("user");
  return (
    <>
      <form className="form-split-bill">
        <h3>SplitBill with X name</h3>

        <label>Bill Val 💸</label>
        <input type="text" />

        <label>Your expense 💵 </label>
        <input type="text" />

        <label>XYZ expense 💰</label>
        <input type="text" />

        <label>Who is Paying bill 🧐</label>
        <select>
          <option value="user">You 👼</option>
          <option value="friend">Xname 🗣️</option>
        </select>

        <CommonBtn>Split Bill 🥵</CommonBtn>
      </form>
    </>
  );
};

export default SplitBillForm;
