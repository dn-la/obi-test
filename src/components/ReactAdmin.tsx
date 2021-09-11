import { FunctionComponent } from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';
import dataProvider from '@/dataProvider';
// import CustomerList  from '@/components/customers/List';
import Layout from '@/layout/Layout';

const ReactAdmin: FunctionComponent = () => {

  return (
    <Admin dataProvider={dataProvider} layout={Layout}>
      {/* <Resource name="customers"/> */}
    </Admin>
  );
};

export default ReactAdmin;
