import React from "react";
import { Datagrid, DateField, List, TextField } from "react-admin";
import CustomerLinkField from '@/components/customers/CustomerLinkField';

const CustomerList = props => (
    <List {...props} pagination={false}>
        <Datagrid rowClick="show" >
            <CustomerLinkField />
            <TextField source="gatherCode" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export default CustomerList;