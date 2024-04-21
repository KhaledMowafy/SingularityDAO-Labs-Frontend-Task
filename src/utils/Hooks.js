"use client"
import { useQuery, useQueryClient, useMutation } from "react-query";
import {readAll, read} from './API';

const useAllPokemons = () => {
  return useQuery(['pokemonList'], ()=>readAll(`/type`));
};

const useAllCategory = (query='') => {
  const { data, isLoading } = useQuery('pokemonType', ()=>read(`/type/${query}`));
  console.log("API Response:", data);
  return { data, isLoading };
};
export {
useAllPokemons,
useAllCategory,

};