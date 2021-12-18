import React,{ useEffect,useState } from "react";
import { TextField,ArrayField,Datagrid,DatagridBody} from 'react-admin';
import { DataGridItem } from './DataGridItem';
import { Dashboard } from '@material-ui/icons';
export const PostIcon = Dashboard;

const record = {
    id: Math.floor(Math.random()*10)+1,
    data: []
};

export const Grid = (props) => {
    
    const  [dataList, setDataList] = useState(record);

    const CustomDatagridBody = props => <DatagridBody {...props} row={<DataGridItem />} />;

    const CustomDatagrid = props => <Datagrid {...props} body={<CustomDatagridBody />} />; 

    useEffect(()=>{
        fetch("http://localhost:3000/dashboard").then((res) => res.json())
        .then((json) => {
        setDataList({...dataList,data:json})
        }).catch((err)=>{
        setDataList({...dataList,data:[]})
        })   
    },[]);

    return  (
        <ArrayField fieldKey="id" source="data" record={dataList}>
                    <CustomDatagrid>
                        <TextField></TextField>
                        <TextField label="ID" source="id" />
                        <TextField label="Account name" source="name" />
                        <TextField label="Email" source="email" />
                        <TextField label="Expiry" source="date" />
                    </CustomDatagrid>
        </ArrayField>
    )
};

/*
<List {...props}>
                    <CustomDatagrid>
                        <TextField label="ID" source="id" />
                        <TextField label="Account name" source="name" />
                        <TextField label="Email" source="email" />
                        <TextField label="Expiry" source="date" />
                    </CustomDatagrid>
</List>
*/