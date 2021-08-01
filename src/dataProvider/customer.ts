import axios from 'axios';
import {
  DataProvider,
  GetOneParams,
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
      return {
        total: result.data.results.length,
        data,
      };
    });
  },
  getOne: (resource: string, params: GetOneParams) => {
    const getUser = axios({
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
    })
    const getUserJourney = axios({
      url: 'https://obi-parse.home.hpd.io/parse/classes/CustomerEvent',
      method: 'GET',
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      accept: 'application/x-www-form-urlencoded;charset=utf-8',
      'X-Parse-Application-Id': 'obi-parse'
      },
      params: {
          where: `{"customer":{"__type":"Pointer","className":"Customer","objectId":"${params.id}"}}`
      }
  })
    return Promise.all([getUser,getUserJourney]).then((result) => {
      const[user, journeys] = result;
      const typedJourney = journeys.data.results.map((journey)=>{
        let type = 'message';
        if (journey.name === 'productPage_view_product') type = 'product'
        if (journey.name.includes('scanToCompare')) type = 'compare'
        return{
          type,
          ...journey
        }
      })
      console.log({id: params.id, ...user.data.results[0], journey: typedJourney})
      return {
        data: {id: params.id, ...user.data.results[0], journey: typedJourney},
      };
    });
  },
 
};

export default customers;
