import s from "./UserBar.module.css";

function UserBar({ onChange, name, email, phone, address }) {
  return (
    <div className={s.userBox}>
      <div className={s.inputBox}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          ></input>
        </label>
      </div>
      <div className={s.inputBox}>
        <label className={s.label}>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          ></input>
        </label>
      </div>
      <div className={s.inputBox}>
        <label className={s.label}>
          <span>Phone:</span>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={onChange}
            required
          ></input>
        </label>
      </div>
      <div className={s.inputBox}>
        <label className={s.label}>
          <span>Address:</span>
          <input
            type="text"
            name="address"
            value={address}
            onChange={onChange}
            required
          ></input>
        </label>
      </div>
    </div>
  );
}

export default UserBar;
