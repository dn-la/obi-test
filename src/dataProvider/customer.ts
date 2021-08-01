import axios from 'axios';
import {
  CreateParams,
  DataProvider,
  DeleteParams,
  GetOneParams,
  UpdateParams,
} from 'react-admin';


const customers: Partial<DataProvider> = {
  getList: () => {
    return axios({
      url: 'https://obi-parse.home.hpd.io/parse/classes/Customer',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        accept: 'application/json;charset=UTF-8',
        'X-Parse-Application-Id': 'obi-parse'
      },
    }).then((result) => {
        
        const data = result.data.results.map((result)=>{
            return{
                ...result,
                id: result.objectId
            }
        })
        console.log(data)
      return {
        total: result.data.results.length,
        data,
      };
    });
  },
//   getOne: (resource: string, params: GetOneParams) => {
//     return axios({
//       url: `/layout/v1/layout/${params.id}`,
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         accept: 'application/json;charset=UTF-8',
//       },
//       params: {
//         id: params.id,
//       },
//     }).then((result) => {
//       return {
//         data: result.data,
//       };
//     });
//   },
 
};

export default customers;
