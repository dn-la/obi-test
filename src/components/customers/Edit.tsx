import React from "react";
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin';

const CustomerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="objectId" />
            <TextInput source="gatherCode" />
            <TextInput source="gatherId" />
            <TextInput source="name" />
            <TextInput source="avatarUrl" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
            <TextInput source="id" />
        </SimpleForm>
    </Edit>
);

export default CustomerEdit;