import CommonBtn from "./CommonBtn";

// eslint-disable-next-line react/prop-types
const AddFriendForm = ({ handleAddForm }) => {
  return (
    <div className="add_list_box">
      <h1>Add list form</h1>
      <form className="form_content">
        <label> Friend Name👥 :</label>
        <input type="text" />

        <label> Img Url🌅 :</label>
        <input type="text" />
        <CommonBtn>Add</CommonBtn>
      </form>
      <div className={`close`} onClick={handleAddForm}>
        ❌
      </div>
    </div>
  );
};

export default AddFriendForm;
