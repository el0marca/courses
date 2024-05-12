import * as React from "react";
import type { PageProps } from "gatsby";
import { useFetchCourses } from "@hooks";
import { DisplayCourses } from "@components/DisplayCourses";
import { Circles } from "react-loader-spinner";
import * as styles from "./index.module.scss";

const IndexPage: React.FC<PageProps> = () => {
  const [courses, isLoading] = useFetchCourses();

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (courses.length) {
    return <DisplayCourses courses={courses} />;
  }
};

export default IndexPage;
