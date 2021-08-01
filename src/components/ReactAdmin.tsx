import { FunctionComponent } from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';
import dataProvider from '@/dataProvider';
import { CustomerList } from './customers/List';
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
      <Resource name="customers" list={CustomerList}/>
    </Admin>
  );
};

export default ReactAdmin;
