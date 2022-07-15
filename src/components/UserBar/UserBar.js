import s from "./UserBar.module.css";

function UserBar() {
  return (
    <div className={s.userBox}>
      <div className={s.inputBox}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            type="text"
            // value={}
            // onChange={onChange}
          ></input>
        </label>
      </div>
      <div className={s.inputBox}>
        <label className={s.label}>
          <span>Email:</span>
          <input
            type="text"
            // value={}
            // onChange={onChange}
          ></input>
        </label>
      </div>
      <div className={s.inputBox}>
        <label className={s.label}>
          <span>Phone:</span>
          <input
            type="text"
            // value={}
            // onChange={onChange}
          ></input>
        </label>
      </div>
      <div className={s.inputBox}>
        <label className={s.label}>
          <span>Address:</span>
          <input
            type="text"
            // value={}
            // onChange={onChange}
          ></input>
        </label>
      </div>
    </div>
  );
}

export default UserBar;
