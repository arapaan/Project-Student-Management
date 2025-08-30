import { useEffect, useState } from "react";
import axios from "axios";

export default function Students() {
    const [students, setStudents] = useState([]);    

    useEffect(() => {
        axios.get("http://localhost:5000/api/students")
            .then(res => setStudents(res.data))
            .then(err => console.error(err));
    }, []);

    return (
        <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Daftar Siswa</h1>
        <table className="w-full border">
        <thead>
            <tr className="bg-gray-200">
            <th className="border p-2">NIS</th>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Kelas</th>
            <th className="border p-2">Jenis Kelamin</th>
            </tr>
        </thead>
        <tbody>
            {students.map((s) => (
            <tr key={s._id}>
                <td className="border p-2">{s.nis}</td>
                <td className="border p-2">{s.name}</td>
                <td className="border p-2">{s.class}</td>
                <td className="border p-2">{s.gender}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
}

