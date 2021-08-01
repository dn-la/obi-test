import { FunctionComponent } from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';
import dataProvider from '@/dataProvider';
import CustomerList  from '@/components/customers/List';
import CustomerShow  from '@/components/customers/Show';
import Layout from '@/layout/Layout';

export enum PageType {
  create = 'CREATE',
  edit = 'EDIT',
  list = 'LIST',
  show = 'SHOW',
}

const ReactAdmin: FunctionComponent = () => {

  return (
    <Admin dataProvider={dataProvider} layout={Layout}>
      <Resource name="customers" list={CustomerList} show={CustomerShow}/>
      <Resource name="journeys" />
    </Admin>
  );
};

export default ReactAdmin;
