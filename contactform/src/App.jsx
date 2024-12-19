import React, { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2024/student")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [])
  return (
    <div>
      <table>
        <th>id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <tbody> 
          {data.map((d) => (
            <tr>
              <td>{d.ID} </td>
              <td>{d.Name} </td>
              <td>{d.Mobile} </td>
              <td>{d.Email} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
