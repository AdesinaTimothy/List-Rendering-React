import StudentComponent from "./StudentComponent.jsx"

function ListData () {
    const students = [
        {
            studentName: "Joseph Brendan",
            studentEmail: "joseph@gmail.com",
            studentScore: 77,
            StudentID: "H58Z002"
        },
        {
            studentName: "Lindsay Lohan",
            studentEmail: "lindlohan@gmail.com",
            studentScore: 88,
            StudentID: "H58k001"
        },
        {
            studentName: "Wendy Loafers",
            studentEmail: "wendyloaf@gmail.com",
            studentScore: 66,
            StudentID: "H58M003"
        }
    ]

    return (
        <div className="main-container">
            {students.map((student, index) => (
                <div key = {index}>
                    {student.studentScore > 40? <StudentComponent 
                    studentname = {student.studentName}
                    studentid = {student.StudentID}
                    studentemail = {student.studentEmail}
                    /> : ""}
                </div>
            ))}
        </div>
    )
}

export default ListData