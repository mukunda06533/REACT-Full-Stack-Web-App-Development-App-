import { useState } from "react";

function Promote() {
    const [employees, setEmployees] = useState(['Kiran', 'Brunda', 'Sowmya', 'Sushama']);
    return (
        <><h1> Empoloyee Promotion Module!!</h1>
            <table>
                <thead>
                    <th>Employee#</th>
                    <th>Employee Name</th>
                    <th>Promotion Status</th>
                </thead>
                <tbody>
                  {
                    employees.map((emp,index)=>(
                        <tr>
                            <td>{index+1}</td>
                            <td>Mr/Mrs. <strong>{emp}</strong></td>
                            <td>
                                <button>Promote</button>
                            </td>
                        </tr>
                    ))
                  }
                </tbody>
            </table>
            </>



    );
}
export default Promote;