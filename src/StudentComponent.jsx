function StudentComponent({studentname, studentid, studentemail}) {
    return (
        <div className="student-container">
            <div className="left-content-section">
                <div className="student-name-container">
                    <h1>{studentname}</h1>
                </div>

                <div className="student-ID-container">
                    <p>ID: {studentid}</p>
                </div>
            </div>

            <div className="right-content-section">
                <div className="student-email-container">
                    <p>{studentemail}</p>
                </div>
            </div>
        </div>
    )
}

export default StudentComponent