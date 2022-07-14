import s from "./ShoppingCartPage.module.css";

function ShoppingCart() {
  return (
    <>
      <section className={s.section}>
        <form className={s.form}>
          <div className={s.inputBox}>
            <label className={s.label}>
              <span className={s.span}>Name:</span>
              <input
                className={s.input}
                type="text"
                // value={}
                // onChange={onChange}
              ></input>
            </label>
          </div>
          <div className={s.inputBox}>
            <label className={s.label}>
              <span className={s.span}>Email:</span>
              <input
                className={s.input}
                type="text"
                // value={}
                // onChange={onChange}
              ></input>
            </label>
          </div>
          <div className={s.inputBox}>
            <label className={s.label}>
              <span className={s.span}>Phone:</span>
              <input
                className={s.input}
                type="text"
                // value={}
                // onChange={onChange}
              ></input>
            </label>
          </div>
          <div className={s.inputBox}>
            <label className={s.label}>
              <span className={s.span}>Address:</span>
              <input
                className={s.input}
                type="text"
                // value={}
                // onChange={onChange}
              ></input>
            </label>
          </div>
        </form>
        <form className={s.cart}>
          <ul className={s.listProducts}>
            <li className={s.itemProducts}>
              <img
                className={s.itemProductsImg}
                src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg"
                alt="cat"
              />
              <div className={s.descriptionBox}>
                <h1>McBurger</h1>
                <p>Price:</p>
                <div>
                  <input
                    className={s.inputQuantity}
                    type="number"
                    // list="priceList"
                    // step="1"
                    // min="1"
                    // max=""
                    // value=""
                    // id="quantity"
                    // name="quantity"
                  />
                </div>
              </div>
            </li>
            <li className={s.itemProducts}>
              <img
                className={s.itemProductsImg}
                src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg"
                alt="cat"
              />
              <div className={s.descriptionBox}>
                <h1>McBurger</h1>
                <p>Price:</p>
                <div>
                  <input
                    className={s.inputQuantity}
                    type="number"
                    // list="priceList"
                    // step="1"
                    // min="1"
                    // max=""
                    // value=""
                    // id="quantity"
                    // name="quantity"
                  />
                </div>
              </div>
            </li>
            <li className={s.itemProducts}>
              <img
                className={s.itemProductsImg}
                src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg"
                alt="cat"
              />
              <div className={s.descriptionBox}>
                <h1>McBurger</h1>
                <p>Price:</p>
                <div>
                  <input
                    className={s.inputQuantity}
                    type="number"
                    // list="priceList"
                    // step="1"
                    // min="1"
                    // max=""
                    // value=""
                    // id="quantity"
                    // name="quantity"
                  />
                </div>
              </div>
            </li>
          </ul>
          <div className={s.boxBtnSubmit}>
            <p>Total price:</p>
            <button type="submit" className={s.btnSubmit}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ShoppingCart;
