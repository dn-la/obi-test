import axios from 'axios';
import {
  DataProvider,
  GetListParams,
  GetManyParams,
  GetManyReferenceParams,
  GetOneParams,
} from 'react-admin';


const journeys: Partial<DataProvider> = {
    getList: (resource: string, params: GetListParams) => {
        return axios({
            url: 'https://obi-parse.home.hpd.io/parse/classes/CustomerEvent',
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
        }).then((result) => {
            // console.log(result)
            return {
            data: {id: params.id, ...result.data},
            };
        });
    },
    getMany:(resource: string, params: GetManyParams) => {
        return axios({
            url: 'https://obi-parse.home.hpd.io/parse/classes/CustomerEvent',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                accept: 'application/json;charset=UTF-8',
                'X-Parse-Application-Id': 'obi-parse'
            },
            params: {
                where: `{"customer":{"__type":"Pointer","className":"Customer","objectId":"${params.ids[0]}"}}`
            }
        }).then((result) => {

            const data = result.data.results.map((result)=>{
                return{
                    ...result,
                    id: result.objectId
                }
            })

           

            return {
                data,
            };
        });
    },
    getManyReference:(resource: string, params: GetManyReferenceParams) => {
        return axios({
            url: 'https://obi-parse.home.hpd.io/parse/classes/CustomerEvent',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                accept: 'application/json;charset=UTF-8',
                'X-Parse-Application-Id': 'obi-parse'
            },
            params: {
                where: `{"customer":{"__type":"Pointer","className":"Customer","objectId":"${params.id}"}}`
            }
        }).then((result) => {

            const data = result.data.results.map((result)=>{
                return{
                    ...result,
                    id: result.objectId
                }
            })

            return {
                total: data.length,
                data,
            };
        });
    }
};

export default journeys;
