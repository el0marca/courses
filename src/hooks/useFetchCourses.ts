// hooks/useFetchCourses.ts
import { Course } from "@types";
import { useState, useEffect } from "react";

const BASE_URL = "https://logiclike.com";

const useFetchCourses = (): [Course[], boolean] => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${BASE_URL}/docs/courses.json`);
        const result: Course[] = await response.json();
        setCourses(result);
      } catch (error) {
        console.error("Error fetching courses", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return [courses, isLoading];
};

export default useFetchCourses;
