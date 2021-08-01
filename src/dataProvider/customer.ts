import axios from 'axios';
import {
  CreateParams,
  DataProvider,
  DeleteParams,
  GetOneParams,
  UpdateParams,
} from 'react-admin';
import qs from 'qs';


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
      return {
        total: result.data.results.length,
        data,
      };
    });
  },
  getOne: (resource: string, params: GetOneParams) => {
    return axios({
      url: 'https://obi-parse.home.hpd.io/parse/classes/Customer',
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        accept: 'application/x-www-form-urlencoded;charset=utf-8',
        'X-Parse-Application-Id': 'obi-parse'
      },
      params: {
        where: `{"objectId": "${params.id}"}`
      }
    }).then((result) => {
      console.log(result.data.results)
      return {
        data: {id: result.data.results[0].objectId, ...result.data.results[0]},
      };
    });
  },
 
};

export default customers;
