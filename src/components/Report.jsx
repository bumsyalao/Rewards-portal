import React from 'react';

class Report extends React.Component {
    render() {
        return (
            <div className="report-page">
            <table>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name </th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Last Login Date</th>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Remilekun</td>
                    <td>Chibundu</td>
                    <td>iswtester@yahoo.com</td>
                    <td>08180000321</td>
                    <td>26 Oct 2017</td>
                </tr>
            </table>
            </div>
        );
    }
}

export default Report;
