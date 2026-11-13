import { useState } from "react";
import "./assets/App.css";

function App() {
  
const students = [
  { name: "Ali Ahmed", rollNumber: 1, section: "A", grade: "A", gender: "Male" },
  { name: "Sara Khan", rollNumber: 2, section: "A", grade: "B", gender: "Female" },
  { name: "Usman Malik", rollNumber: 3, section: "A", grade: "A+", gender: "Male" },
  { name: "Ayesha Noor", rollNumber: 4, section: "A", grade: "A", gender: "Female" },
  { name: "Hamza Shah", rollNumber: 5, section: "A", grade: "B+", gender: "Male" },
  { name: "Fatima Ali", rollNumber: 6, section: "A", grade: "A", gender: "Female" },
  { name: "Bilal Ahmed", rollNumber: 7, section: "A", grade: "C", gender: "Male" },
  { name: "Zainab Iqbal", rollNumber: 8, section: "A", grade: "A+", gender: "Female" },
  { name: "Hassan Raza", rollNumber: 9, section: "A", grade: "B", gender: "Male" },
  { name: "Maryam Aslam", rollNumber: 10, section: "A", grade: "A", gender: "Female" },

  { name: "Ahmed Hassan", rollNumber: 11, section: "B", grade: "B+", gender: "Male" },
  { name: "Hira Tariq", rollNumber: 12, section: "B", grade: "A", gender: "Female" },
  { name: "Saad Khan", rollNumber: 13, section: "B", grade: "A+", gender: "Male" },
  { name: "Iqra Shah", rollNumber: 14, section: "B", grade: "B", gender: "Female" },
  { name: "Danish Ali", rollNumber: 15, section: "B", grade: "C+", gender: "Male" },
  { name: "Laiba Noor", rollNumber: 16, section: "B", grade: "A", gender: "Female" },
  { name: "Umar Farooq", rollNumber: 17, section: "B", grade: "B", gender: "Male" },
  { name: "Maham Raza", rollNumber: 18, section: "B", grade: "A+", gender: "Female" },
  { name: "Talha Javed", rollNumber: 19, section: "B", grade: "B+", gender: "Male" },
  { name: "Anaya Malik", rollNumber: 20, section: "B", grade: "A", gender: "Female" },

  { name: "Abdullah Khan", rollNumber: 21, section: "C", grade: "A", gender: "Male" },
  { name: "Sana Ahmed", rollNumber: 22, section: "C", grade: "B+", gender: "Female" },
  { name: "Zubair Shah", rollNumber: 23, section: "C", grade: "C", gender: "Male" },
  { name: "Eman Fatima", rollNumber: 24, section: "C", grade: "A+", gender: "Female" },
  { name: "Farhan Malik", rollNumber: 25, section: "C", grade: "B", gender: "Male" },
  { name: "Noor Hassan", rollNumber: 26, section: "C", grade: "A", gender: "Female" },
  { name: "Rehan Ali", rollNumber: 27, section: "C", grade: "B+", gender: "Male" },
  { name: "Areeba Khan", rollNumber: 28, section: "C", grade: "A", gender: "Female" },
  { name: "Shayan Raza", rollNumber: 29, section: "C", grade: "C+", gender: "Male" },
  { name: "Dua Iqbal", rollNumber: 30, section: "C", grade: "A+", gender: "Female" },

  { name: "Ahmad Raza", rollNumber: 31, section: "D", grade: "B", gender: "Male" },
  { name: "Mehwish Ali", rollNumber: 32, section: "D", grade: "A", gender: "Female" },
  { name: "Ibrahim Khan", rollNumber: 33, section: "D", grade: "A+", gender: "Male" },
  { name: "Minal Shah", rollNumber: 34, section: "D", grade: "B+", gender: "Female" },
  { name: "Waleed Ahmed", rollNumber: 35, section: "D", grade: "C", gender: "Male" },
  { name: "Amna Tariq", rollNumber: 36, section: "D", grade: "A", gender: "Female" },
  { name: "Sameer Malik", rollNumber: 37, section: "D", grade: "B", gender: "Male" },
  { name: "Hafsa Noor", rollNumber: 38, section: "D", grade: "A+", gender: "Female" },
  { name: "Rayan Javed", rollNumber: 39, section: "D", grade: "B+", gender: "Male" },
  { name: "Sadia Aslam", rollNumber: 40, section: "D", grade: "A", gender: "Female" },

  { name: "Ahsan Ali", rollNumber: 41, section: "A", grade: "B", gender: "Male" },
  { name: "Zoya Ahmed", rollNumber: 42, section: "A", grade: "A+", gender: "Female" },
  { name: "Muneeb Shah", rollNumber: 43, section: "A", grade: "C+", gender: "Male" },
  { name: "Komal Khan", rollNumber: 44, section: "A", grade: "A", gender: "Female" },
  { name: "Noman Raza", rollNumber: 45, section: "A", grade: "B+", gender: "Male" },
  { name: "Alina Noor", rollNumber: 46, section: "A", grade: "A", gender: "Female" },
  { name: "Junaid Malik", rollNumber: 47, section: "A", grade: "B", gender: "Male" },
  { name: "Hania Iqbal", rollNumber: 48, section: "A", grade: "A+", gender: "Female" },
  { name: "Fahad Hassan", rollNumber: 49, section: "A", grade: "C", gender: "Male" },
  { name: "Rida Fatima", rollNumber: 50, section: "A", grade: "A", gender: "Female" },

  { name: "Arham Khan", rollNumber: 51, section: "B", grade: "A+", gender: "Male" },
  { name: "Sabeen Ali", rollNumber: 52, section: "B", grade: "B", gender: "Female" },
  { name: "Asad Ahmed", rollNumber: 53, section: "B", grade: "B+", gender: "Male" },
  { name: "Misha Noor", rollNumber: 54, section: "B", grade: "A", gender: "Female" },
  { name: "Dawood Shah", rollNumber: 55, section: "B", grade: "C", gender: "Male" },
  { name: "Rimsha Khan", rollNumber: 56, section: "B", grade: "A+", gender: "Female" },
  { name: "Shahzaib Ali", rollNumber: 57, section: "B", grade: "B", gender: "Male" },
  { name: "Esha Malik", rollNumber: 58, section: "B", grade: "A", gender: "Female" },
  { name: "Taha Raza", rollNumber: 59, section: "B", grade: "B+", gender: "Male" },
  { name: "Maira Ahmed", rollNumber: 60, section: "B", grade: "A", gender: "Female" },

  { name: "Saif Hassan", rollNumber: 61, section: "C", grade: "B+", gender: "Male" },
  { name: "Kinza Ali", rollNumber: 62, section: "C", grade: "A", gender: "Female" },
  { name: "Rizwan Khan", rollNumber: 63, section: "C", grade: "C+", gender: "Male" },
  { name: "Sehrish Noor", rollNumber: 64, section: "C", grade: "A+", gender: "Female" },
  { name: "Imran Shah", rollNumber: 65, section: "C", grade: "B", gender: "Male" },
  { name: "Nimra Ahmed", rollNumber: 66, section: "C", grade: "A", gender: "Female" },
  { name: "Zeeshan Malik", rollNumber: 67, section: "C", grade: "B+", gender: "Male" },
  { name: "Sonia Fatima", rollNumber: 68, section: "C", grade: "A", gender: "Female" },
  { name: "Adeel Raza", rollNumber: 69, section: "C", grade: "C", gender: "Male" },
  { name: "Imaan Khan", rollNumber: 70, section: "C", grade: "A+", gender: "Female" },

  { name: "Haris Ahmed", rollNumber: 71, section: "D", grade: "B", gender: "Male" },
  { name: "Nida Ali", rollNumber: 72, section: "D", grade: "A", gender: "Female" },
  { name: "Kamran Shah", rollNumber: 73, section: "D", grade: "B+", gender: "Male" },
  { name: "Sania Khan", rollNumber: 74, section: "D", grade: "A+", gender: "Female" },
  { name: "Rameez Malik", rollNumber: 75, section: "D", grade: "C+", gender: "Male" },
  { name: "Huda Noor", rollNumber: 76, section: "D", grade: "A", gender: "Female" },
  { name: "Adnan Raza", rollNumber: 77, section: "D", grade: "B", gender: "Male" },
  { name: "Aiman Ahmed", rollNumber: 78, section: "D", grade: "A+", gender: "Female" },
  { name: "Owais Ali", rollNumber: 79, section: "D", grade: "B+", gender: "Male" },
  { name: "Sahar Fatima", rollNumber: 80, section: "D", grade: "A", gender: "Female" },

  { name: "Zain Ahmed", rollNumber: 81, section: "A", grade: "B+", gender: "Male" },
  { name: "Nashwa Khan", rollNumber: 82, section: "A", grade: "A", gender: "Female" },
  { name: "Rafay Ali", rollNumber: 83, section: "A", grade: "C", gender: "Male" },
  { name: "Maham Noor", rollNumber: 84, section: "A", grade: "A+", gender: "Female" },
  { name: "Shahmir Shah", rollNumber: 85, section: "A", grade: "B", gender: "Male" },
  { name: "Anum Malik", rollNumber: 86, section: "A", grade: "A", gender: "Female" },
  { name: "Daniyal Raza", rollNumber: 87, section: "A", grade: "B+", gender: "Male" },
  { name: "Sehr Ahmed", rollNumber: 88, section: "A", grade: "A+", gender: "Female" },
  { name: "Huzaifa Khan", rollNumber: 89, section: "A", grade: "C+", gender: "Male" },
  { name: "Aqsa Ali", rollNumber: 90, section: "A", grade: "A", gender: "Female" },

  { name: "Moiz Hassan", rollNumber: 91, section: "B", grade: "B", gender: "Male" },
  { name: "Sana Noor", rollNumber: 92, section: "B", grade: "A+", gender: "Female" },
  { name: "Faris Ahmed", rollNumber: 93, section: "B", grade: "B+", gender: "Male" },
  { name: "Maham Fatima", rollNumber: 94, section: "B", grade: "A", gender: "Female" },
  { name: "Affan Shah", rollNumber: 95, section: "B", grade: "C", gender: "Male" },
  { name: "Aiza Khan", rollNumber: 96, section: "B", grade: "A+", gender: "Female" },
  { name: "Sameer Ali", rollNumber: 97, section: "B", grade: "B", gender: "Male" },
  { name: "Rania Malik", rollNumber: 98, section: "B", grade: "A", gender: "Female" },
  { name: "Ehtisham Raza", rollNumber: 99, section: "B", grade: "B+", gender: "Male" },
  { name: "Mahnoor Ahmed", rollNumber: 100, section: "B", grade: "A+", gender: "Female" }
];

const [currentPage, setCurrentPage] = useState(1);

const studentsPerPage = 10;

const totalPages = Math.ceil(students.length / studentsPerPage);

const startIndex = (currentPage - 1) * studentsPerPage;

const currentStudents = students.slice(
  startIndex,
  startIndex + studentsPerPage
);
  
   return (
  <div className="container mt-5">
    <h1 className="text-center text-primary mb-4">
      Students List
    </h1>

    <div className="table-responsive shadow">
      <table className="table table-striped table-hover table-bordered align-middle mb-0">
        <thead className="table-dark">
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Section</th>
            <th>Grade</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>
          {currentStudents.map((student) => (
            <tr key={student.rollNumber}>
              <td>{student.rollNumber}</td>
              <td>{student.name}</td>
              <td>{student.section}</td>
              <td>
                <span className="badge bg-primary">
                  {student.grade}
                </span>
              </td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3">
      <p className="mb-0">
        Showing {startIndex + 1}–
        {Math.min(startIndex + studentsPerPage, students.length)}
        {" "}of {students.length} students
      </p>

      <nav aria-label="Student table pages">
  <ul className="pagination justify-content-center flex-wrap mb-0">

    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
      <button
        className="page-link"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
    </li>

    {Array.from({ length: totalPages }, (_, index) => (
      <li
        key={index + 1}
        className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
      >
        <button
          className="page-link"
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      </li>
    ))}

    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
      <button
        className="page-link"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </li>

  </ul>
</nav>
    </div>
  </div>
);
}

export default App;
