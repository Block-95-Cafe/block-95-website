export default function Menu({ styles }) {
  const menuItems = {
    "Limited Espresso": {
      subHeader: "Hot / Iced · Prepared in limited daily quantities",
      items: [
        { name: "Classic Latte", price: "8oz / $4.00" },
        { name: "Americano", price: "8oz / $3.00" },
        { name: "Cappuccino", price: "8oz / $3.50" },
        { name: "Iced Latte", price: "12oz / $4.50" },
        { name: "Iced Americano", price: "12oz / $3.50" },
        { name: "Iced Chai", price: "12oz / $4.50" },
      ],
      addons: {
        "Oat or Almond Milk": "+$0.75",
        "Extra Espresso Shot": "+$1.00",
        "Vanilla / Sugar Cane Syrup": "+$0.75",
      },
    },
    Teas: {
      subHeader: "Hot · 8oz",
      items: [
        { name: "Black Tea", price: "8oz / $2.00" },
        { name: "Green Tea", price: "8oz / $2.00" },
        { name: "Hot Chocolate", price: "8oz / $4.00" },
        { name: "Chai Latte", price: "8oz / $4.00" },
      ],
    },
    Smoothies: {
      subHeader: "Iced · 8oz",
      items: [{ name: "Berry Blast", price: "12oz / $6.00" }],
    },
  };

  return (
    <section id="menu" className={styles["menu-section"]}>
      <p className={styles["section-label"]}>Menu — 001</p>

      {Object.keys(menuItems).map((header, i) => {
        return (
          <div key={i}>
            <h2 className={styles["menu-header"]}>{header}</h2>
            <p className={styles["menu-sub-header"]}>
              {menuItems[header].subHeader}
            </p>

            <div className={styles["menu-grid"]}>
              <div className={styles["menu-col"]}>
                {menuItems[header].items
                  .slice(0, Math.ceil(menuItems[header].items.length / 2))
                  .map((item) => (
                    <div className={styles["menu-item"]} key={item.name}>
                      <span className={styles["menu-item-name"]}>
                        {item.name}
                      </span>
                      <span className={styles["menu-item-price"]}>
                        {item.price}
                      </span>
                    </div>
                  ))}
              </div>
              <div className={styles["menu-col"]}>
                {menuItems[header].items
                  .slice(Math.ceil(menuItems[header].items.length / 2))
                  .map((item) => (
                    <div className={styles["menu-item"]} key={item.name}>
                      <span className={styles["menu-item-name"]}>
                        {item.name}
                      </span>
                      <span className={styles["menu-item-price"]}>
                        {item.price}
                      </span>
                    </div>
                  ))}
              </div>

              {/*To-Do: Fix rendering menu addons*/}
              {/*{menuItems[header]?.addons && (
                <div className={styles["menu-addons"]}>
                  {Object.keys(menuItems[header].addons).map((addon, i) => {
                    return (
                      <div key={i} className={styles["menu-addon"]}>
                        <span>{addon} </span>
                        <strong>{menuItems[header].addons[addon]}</strong>
                      </div>
                    );
                  })}
                </div>
              )}*/}
            </div>
          </div>
        );
      })}
    </section>
  );
}
