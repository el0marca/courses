import { Course } from "@types";

const groupCoursesByTags = (courses: Course[]) => {
  const groupedByTags = new Map<string, Course[]>();

  courses.forEach((course) => {
    course.tags.forEach((tag) => {
      if (groupedByTags.has(tag)) {
        const courses = groupedByTags.get(tag);
        if (courses) {
          courses.push(course);
        }
      } else {
        groupedByTags.set(tag, [course]);
      }
    });
  });

  return groupedByTags;
};

export { groupCoursesByTags };
