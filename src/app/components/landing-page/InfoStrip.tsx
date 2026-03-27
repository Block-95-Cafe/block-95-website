import styles from "@/src/app/page.module.css";
import { block95 } from "@/lib/data/block95";
import { useEffect, useState } from "react";

export default function InfoStrip() {
  const [currentSchedule, setCurrentSchedule] = useState<string>(
    Object.keys(block95.schedule)[0],
  );

  // Logic to change the schedule text every 3.5 seconds
  useEffect(() => {
    const days = Object.keys(block95.schedule);

    const intervalId = setInterval(() => {
      setCurrentSchedule((prev) => {
        const currentIndex = days.indexOf(prev);
        return days[(currentIndex + 1) % days.length];
      });
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles["info-strip"]}>
      <div className={styles["info-cell"]}>
        <p className={styles["info-cell-label"]}>Hours</p>
        <p className={styles["info-cell-value"]}>
          {currentSchedule}
          <br />
          {block95.schedule[currentSchedule]}
        </p>
      </div>
      <div className={styles["info-cell"]}>
        <p className={styles["info-cell-label"]}>Location</p>
        <p className={styles["info-cell-value"]}>
          {block95.address}
          <br />
          {block95.cityAndState}
        </p>
      </div>
    </div>
  );
}
