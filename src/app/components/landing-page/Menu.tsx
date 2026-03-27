import styles from "@/src/app/page.module.css";
import { menuItems, MenuItem } from "@/lib/data/menu";

export default function Menu() {
  return (
    <section id="menu" className={styles["menu-section"]}>
      <p className={styles["section-label"]}>Menu — 001</p>

      {Object.entries(menuItems).map(([header, category], i) => {
        return (
          <div key={i}>
            <h2 className={styles["menu-header"]}>{header}</h2>
            <p className={styles["menu-sub-header"]}>{category.subHeader}</p>

            <div className={styles["menu-grid"]}>
              <div className={styles["menu-col"]}>
                {category.items
                  .slice(0, Math.ceil(category.items.length / 2))
                  .map((item: MenuItem) => (
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
                {category.items
                  .slice(Math.ceil(category.items.length / 2))
                  .map((item: MenuItem) => (
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
