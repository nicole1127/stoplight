import React from 'react'
import styles from './Table.module.css'
import { useTable } from 'react-table'
import GetRow1 from './GetRow1'
import GetRow2 from './GetRow2'

function Table() {

    const columns = React.useMemo( () => [
        {
            Header: 'ID',
            accessor: 'id',// accessor is the "key" in the data
        },
        {
            Header: 'Vehicle Plate Number',
            accessor: 'platenum',
        },
        {
            Header: 'Date',
            accessor: 'date',
        },
        {
            Header: 'Time',
            accessor: 'time',
        },
        {
            Header: 'Location',
            accessor: 'loc',
        },
        {
            Header: 'Violation Type',
            accessor: 'type',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
        {
            Header: 'Action',
            accessor: 'action',
        },
    ],
    []
    )

    const data = React.useMemo( () => [
       {
            id: '1',
            platenum: 'XHJ 277',
            date: 'November 28, 2022',
            time: '11:35 AM',
            loc: 'Congressional Ave, Dasmariñas, Cavite',
            type: 'Red Light',
            status: 'Unverified',
            action: <GetRow1/>,
       },
       {
            id: '2',
            platenum: 'DEB 701',
            date: 'December 1, 2022',
            time: '3:46 PM',
            loc: 'R-2 Emilio Aguinaldo Hwy, Dasmariñas, Cavite',
            type: 'Red Light',
            status: 'Unverified',
            action: <GetRow2/>,
       },
    ],
    []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable ({ columns, data })
    
    return (
    <div className={styles.container}>
        <table className={styles.table} {...getTableProps()}>
            
            <thead>
                {headerGroups.map((headerGroup) => {
                const { key, ...restHeaderGroupProps } =
                    headerGroup.getHeaderGroupProps();
                return (
                    <tr key={key} {...restHeaderGroupProps}>
                    {headerGroup.headers.map((column) => {
                        const { key, ...restColumn } = column.getHeaderProps();
                        return (
                        <th key={key} {...restColumn} className={styles.th} >
                            {column.render("Header")}
                        </th>
                        );
                    })}
                    </tr>
                );
                })}
            </thead>
            
            <tbody {...getTableBodyProps}>
                {rows.map((row) => {
                prepareRow(row);
                const { key, ...restRowProps } = row.getRowProps();
                return (
                    <tr key={key} {...restRowProps}>
                    {row.cells.map((cell) => {
                        const { key, ...restCellProps } = cell.getCellProps();
                        return (
                        <td key={key} {...restCellProps} className={styles.td} >
                            {cell.render("Cell")}
                        </td>
                        );
                    })}
                    </tr>
                );
                })}
            </tbody>
       </table>
    </div>
    )
}

export default Table