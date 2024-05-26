// FormTable.tsx
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface FormTableProps {
    data: { name: string; password: string }[];
}

const FormTable: React.FC<FormTableProps> = ({ data }) => {
    return (
        <div className="table-container">
            <DataTable value={data}>
                <Column field="name" header="Name" />
                <Column field="password" header="Password" />
            </DataTable>
        </div>
    );
};

export default FormTable;
