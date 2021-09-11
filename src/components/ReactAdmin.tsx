import { FunctionComponent } from 'react';
import { Admin, Resource, EditGuesser} from 'react-admin';
import dataProvider from '@/dataProvider';
import CustomerList  from '@/components/customers/List';
import CustomerEdit  from '@/components/customers/Edit';
import Layout from '@/layout/Layout';

const ReactAdmin: FunctionComponent = () => {

  return (
    <Admin dataProvider={dataProvider} layout={Layout}>
      <Resource name="customers" list={CustomerList} edit={EditGuesser}/>
    </Admin>
  );
};

export default ReactAdmin;
