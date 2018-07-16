import React from 'react';

class Report extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="report-page">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Last Login Date<i className="mdi mdi-chevron-down" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="ID">10</td>
                            <td data-label="First Name">Remilekun</td>
                            <td data-label="Last Name">Chibundu</td>
                            <td data-label="Email">iswtester@yahoo.com</td>
                            <td data-label="Phone">08180000321</td>
                            <td data-label="Last Login Date">6 Oct 2017<i className="mdi mdi-dots-horizontal" /></td>
                        </tr>
                        <tr>
                            <td data-label="ID">10</td>
                            <td data-label="First Name">Remilekun</td>
                            <td data-label="Last Name">Chibundu</td>
                            <td data-label="Email">iswtester@yahoo.com</td>
                            <td data-label="Phone">08180000321</td>
                            <td data-label="Last Login Date">6 Oct 2017<i className="mdi mdi-dots-horizontal" /></td>
                        </tr>
                        <tr>
                            <td data-label="ID">10</td>
                            <td data-label="First Name">Remilekun</td>
                            <td data-label="Last Name">Chibundu</td>
                            <td data-label="Email">iswtester@yahoo.com</td>
                            <td data-label="Phone">08180000321</td>
                            <td data-label="Last Login Date">6 Oct 2017<i className="mdi mdi-dots-horizontal" /></td>
                        </tr>
                        <tr>
                            <td data-label="ID">10</td>
                            <td data-label="First Name">Remilekun</td>
                            <td data-label="Last Name">Chibundu</td>
                            <td data-label="Email">iswtester@yahoo.com</td>
                            <td data-label="Phone">08180000321</td>
                            <td data-label="Last Login Date">6 Oct 2017<i className="mdi mdi-dots-horizontal" /></td>
                        </tr>
                        <tr>
                            <td data-label="ID">10</td>
                            <td data-label="First Name">Remilekun</td>
                            <td data-label="Last Name">Chibundu</td>
                            <td data-label="Email">iswtester@yahoo.com</td>
                            <td data-label="Phone">08180000321</td>
                            <td data-label="Last Login Date">6 Oct 2017<i className="mdi mdi-dots-horizontal" /></td>
                        </tr>
                        <tr>
                            <td data-label="ID">10</td>
                            <td data-label="First Name">Remilekun</td>
                            <td data-label="Last Name">Chibundu</td>
                            <td data-label="Email">iswtester@yahoo.com</td>
                            <td data-label="Phone">08180000321</td>
                            <td data-label="Last Login Date">6 Oct 2017<i className="mdi mdi-dots-horizontal" /></td>
                        </tr>
                        <tr>
                            <td data-label="ID">10</td>
                            <td data-label="First Name">Remilekun</td>
                            <td data-label="Last Name">Chibundu</td>
                            <td data-label="Email">iswtester@yahoo.com</td>
                            <td data-label="Phone">08180000321</td>
                            <td data-label="Last Login Date">6 Oct 2017<i className="mdi mdi-dots-horizontal" /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="table-footer">
                    <div>Displaying Users 1 - 39 of 39 in total</div>
                    <div className="page-scroll"><i className="mdi mdi-arrow-left" /> <div>Page 2 of 3</div><i className="mdi mdi-arrow-right right" /> </div>
                    <div><a>Download: CSV XML JSON</a></div>
                </div>
            </div>

        );
    }
}

export default Report;
