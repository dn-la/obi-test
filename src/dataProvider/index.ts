import {
  CreateParams,
  DataProvider,
  DeleteManyParams,
  DeleteParams,
  GetListParams,
  GetManyParams,
  GetManyReferenceParams,
  GetOneParams,
  UpdateManyParams,
  UpdateParams,
} from 'react-admin';
import customerDataProvider from '@/dataProvider/customer'

const dataProviders = [
  { resource: 'customers', dataProvider: customerDataProvider },
];

function mappingDataProvider(resource, method, params) {
  const { dataProvider } = dataProviders.find(
    (provider) => provider.resource === resource
  );

  return (
    (dataProvider[method] && dataProvider[method](resource, params)) ||
    Promise.reject(new Error(`Method not implemented: ${resource}-${method}`))
  );
}

const appDataProvider: DataProvider = {
  getList: (resource: string, params: GetListParams) => {
    return mappingDataProvider(resource, 'getList', params);
  },
  getOne: (resource: string, params: GetOneParams) => {
    return mappingDataProvider(resource, 'getOne', params);
  },
  create: (resource: string, params: CreateParams) => {
    return mappingDataProvider(resource, 'create', params);
  },
  update: (resource: string, params: UpdateParams) => {
    return mappingDataProvider(resource, 'update', params);
  },
  delete: (resource: string, params: DeleteParams) => {
    return mappingDataProvider(resource, 'delete', params);
  },
  getMany: (resource: string, params: GetManyParams) => {
    return mappingDataProvider(resource, 'getMany', params);
  },
  getManyReference: (resource: string, params: GetManyReferenceParams) => {
    return mappingDataProvider(resource, 'getManyReference', params);
  },
  updateMany: (resource: string, params: UpdateManyParams) => {
    return mappingDataProvider(resource, 'updateMany', params);
  },
  deleteMany: (resource: string, params: DeleteManyParams) => {
    return mappingDataProvider(resource, 'deleteMany', params);
  },
};

export default appDataProvider;
