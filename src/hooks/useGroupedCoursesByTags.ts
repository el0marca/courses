import { Course } from "@types";
import { groupCoursesByTags } from "@utils";
import { useMemo } from "react";

const useGroupedCoursesByTags = (
  courses: Course[]
): [Map<string, Course[]>, string] => {
  const groupedByTags = useMemo(() => groupCoursesByTags(courses), [courses]);

  const initialTag = useMemo(
    () => groupedByTags.keys().next().value,
    [groupedByTags]
  );

  return [groupedByTags, initialTag];
};

export default useGroupedCoursesByTags;
