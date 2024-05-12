import React, { useState } from "react";
import { useGroupedCoursesByTags } from "@hooks";
import { Course } from "@types";
import * as styles from "./styles.module.scss";

interface CoursesDisplayProps {
  courses: Course[];
}

export const DisplayCourses: React.FC<CoursesDisplayProps> = ({ courses }) => {
  const [groupedByTags, initialTag] = useGroupedCoursesByTags(courses);
  const [activeTag, setActiveTag] = useState(initialTag);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <ul>
          {[...groupedByTags.keys()].map((tag) => (
            <li
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={tag === activeTag ? `${styles.active}` : ""}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>
        {groupedByTags.get(activeTag)?.map((course) => (
          <div key={course.id} className={styles.card}>
            <img
              src={course.image}
              alt={course.name}
              className={styles.image}
              style={{
                backgroundColor: course.bgColor,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}
            />
            <h3 className={styles.card_title}>{course.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
