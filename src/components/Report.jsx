import React from 'react';

class Report extends React.Component {
    render() {
        return (
            <div className="report-page">
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name </th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Last Login Date<i className="mdi mdi-chevron-down"/></th>
                </tr>
                </thead>
                <tbody>
                <tr className="table-body">
                    <td>10</td>
                    <td>Remilekun</td>
                    <td>Chibundu</td>
                    <td>iswtester@yahoo.com</td>
                    <td>08180000321</td>
                    <td>26 Oct 2017<i className="mdi mdi-dots-horizontal"/></td>
                </tr>
                <tr className="table-body">
                    <td>10</td>
                    <td>Remilekun</td>
                    <td>Chibundu</td>
                    <td>iswtester@yahoo.com</td>
                    <td>08180000321</td>
                    <td>26 Oct 2017<i className="mdi mdi-dots-horizontal"/></td>
                </tr>
                <tr className="table-body">
                    <td>10</td>
                    <td>Remilekun</td>
                    <td>Chibundu</td>
                    <td>iswtester@yahoo.com</td>
                    <td>08180000321</td>
                    <td>26 Oct 2017<i className="mdi mdi-dots-horizontal"/></td>
                </tr>
                <tr className="table-body">
                    <td>10</td>
                    <td>Remilekun</td>
                    <td>Chibundu</td>
                    <td>iswtester@yahoo.com</td>
                    <td>08180000321</td>
                    <td>26 Oct 2017<i className="mdi mdi-dots-horizontal"/></td>
                </tr>
                <tr className="table-body">
                    <td>10</td>
                    <td>Remilekun</td>
                    <td>Chibundu</td>
                    <td>iswtester@yahoo.com</td>
                    <td>08180000321</td>
                    <td>26 Oct 2017<i className="mdi mdi-dots-horizontal"/></td>
                </tr>
                <tr className="table-body">
                    <td>10</td>
                    <td>Remilekun</td>
                    <td>Chibundu</td>
                    <td>iswtester@yahoo.com</td>
                    <td>08180000321</td>
                    <td>26 Oct 2017<i className="mdi mdi-dots-horizontal"/></td>
                </tr>
                <tr className="table-body">
                    <td>10</td>
                    <td>Remilekun</td>
                    <td>Chibundu</td>
                    <td>iswtester@yahoo.com</td>
                    <td>08180000321</td>
                    <td>26 Oct 2017<i className="mdi mdi-dots-horizontal"/></td>
                </tr>
                </tbody>
            </table>
            <div className="table-footer">
                        <div>Displaying Users 1 - 39 of 39 in total</div>
                        <div className="page-scroll"><i className="mdi mdi-arrow-left"/> <div>Page 2 of 3</div><i className="mdi mdi-arrow-right right"/> </div>
                        <div><a>Download: CSV XML JSON</a></div>
                </div>
            </div>
        );
    }
}

export default Report;
