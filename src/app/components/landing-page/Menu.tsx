import styles from "@/src/app/page.module.css";
import { MenuItem, Category } from "@/lib/data/types";
import { useEffect, useState } from "react";

export default function Menu() {
  const [categoriesAndItems, setCategoriesAndItems] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMenu() {
      try {
        const response = await fetch("/api/menu", {
          signal: controller.signal,
        });
        if (!response.ok)
          throw new Error(`Failed to load menu (${response.status})`);
        const data: Category[] = await response.json();
        setCategoriesAndItems(data);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchMenu();
    return () => controller.abort();
  }, []);

  return (
    <section id="menu" className={styles["menu-section"]}>
      <p className={styles["section-label"]}>Menu — 001</p>

      {loading && (
        <div className={styles["menu-loading"]}>
          <div className={styles["menu-loading-spinner"]} />
          <span className={styles["menu-loading-label"]}>Loading Menu</span>
        </div>
      )}

      {error && <p className={styles["menu-error"]}>{error}</p>}

      {!loading &&
        !error &&
        categoriesAndItems.map((category: Category) => {
          return (
            <div key={category.id}>
              <h2 className={styles["menu-header"]}>{category.name}</h2>

              <div className={styles["menu-grid"]}>
                <div className={styles["menu-col"]}>
                  {category.items
                    .slice(0, Math.ceil(category.items.length / 2))
                    .map((item: MenuItem) => (
                      <div className={styles["menu-item"]} key={item.name}>
                        <span className={styles["menu-item-name"]}>
                          {item.name}
                        </span>
                        <span className={styles["menu-item-details"]}>
                          {item.oz}OZ / ${item.price}
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
                        <span className={styles["menu-item-details"]}>
                          {item.oz}OZ / ${item.price}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
}
