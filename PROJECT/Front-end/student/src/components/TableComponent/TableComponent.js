import "./Table.css"
const TableComponent = ({data}) => {

    return(
        <div className = 'table_wrapper col-md-6 d-flex align-items-start'>
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th scope = "col">Adm</th>
                        <th scope = "col">Name</th>
                        <th scope= "col">Date of Birth</th>
                        <th scope= "col">Class</th>
                        <th scope= "col">Division</th>
                        <th scope= "col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ? data.map((item, index) =>{
                            return (<tr key = {index}>
                                <th scope = "row">{item.admn}</th>
                                <td>{item.name}</td>
                                <td>{item.dob}</td>
                                <td>{item.cls}</td>
                                <td>{item.division}</td>
                                <td>{item.gender}</td>
                            </tr>
                            )
                        }):""
                    }
                </tbody>
            </table>
        </div>
    )

}

export default TableComponent