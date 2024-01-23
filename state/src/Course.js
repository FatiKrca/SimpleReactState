import React from "react";
import Angular from "../src/images/angular.jpg";
import Bootstrap from "../src/images/bootstrap5.png";
import Ccsharp from "../src/images/ccsharp.png";
import Kompleweb from "../src/images/kompleweb.jpg";
import "./Course.css";

const courseMap = {
  Angular,
  Bootstrap,
  Ccsharp,
  Kompleweb,
};

function Course(courseName) {
  console.log(courseName.courseName);
  console.log(courseMap[courseName.courseName]);
  return (
      
        <div className="courseDiv">
          <img
            className="course"
            src={courseMap[courseName.courseName]}
            alt="Resim yok"
          />
        </div>
      
  );
}

export default Course;
