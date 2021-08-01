import React from "react";
import { Datagrid, DateField, List, TextField } from "react-admin";
import CustomerLinkField from '@/components/customers/CustomerLinkField';

export const CustomerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <CustomerLinkField />
            <TextField source="gatherCode" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);