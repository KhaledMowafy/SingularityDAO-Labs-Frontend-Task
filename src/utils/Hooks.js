"use client"
import { useQuery, useQueryClient, useMutation } from "react-query";
import {readAll, read} from './API';

const useAllPokemons = (query='') => {
  return useQuery(['pokemonList'], ()=>readAll(`/type/${query}`),  {
    staleTime: 120000,
    cacheTime: 120000,
  });
};

const useAllCategory = (query='') => {
  const{data, isLoading} =  useQuery('pokemonType', ()=>readAll(`${query}`),  {
    staleTime: 120000,
    cacheTime: 120000,
  });

  return{data, isLoading}
};
export {
useAllPokemons,
useAllCategory,

};