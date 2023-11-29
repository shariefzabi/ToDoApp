import React from "react"
import { useSelector } from "react-redux"
import './studentTable.css'

export function StudentTable() {
    const students = useSelector(state => state.studentReducer)
    console.log(students)
    return (
        <table className="border-for-table">
            <thead className="border-for-table">
                <tr className="border-for-table">
                    <th className="border-for-table">name</th>
                    <th className="border-for-table">marks</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => {
                    return (
                        <tr className="border-for-table">
                            <td className="border-for-table">{student.name}</td>
                            <td className="border-for-table">{student.marks}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}