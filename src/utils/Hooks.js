"use client"
import { useQuery, useQueryClient, useMutation } from "react-query";
import {readAll, read} from './API';

const useAllPokemons = (query='') => {
  return useQuery(['pokemonList'], ()=>readAll(`/type/${query}`));
};

const useAllCategory = (query='') => {
  const{data, isLoading} =  useQuery('pokemonType', ()=>readAll(`${query}`));

  return{data, isLoading}
};
export {
useAllPokemons,
useAllCategory,

};