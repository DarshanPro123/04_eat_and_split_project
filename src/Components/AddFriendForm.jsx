import CommonBtn from "./CommonBtn";

// eslint-disable-next-line react/prop-types
const AddFriendForm = ({ handleAddForm }) => {
  return (
    <>
      <div className="overLay"></div>
      <div className="add_list_box">
        <h1>Add list form</h1>
        <form className="form_content">
          <label> Friend Name👥 :</label>
          <input type="text" />

          <label> Img Url🌅 :</label>
          <input type="text" />
          <CommonBtn>Add</CommonBtn>
          <div className={`close`} onClick={handleAddForm}>
            ❌
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFriendForm;
