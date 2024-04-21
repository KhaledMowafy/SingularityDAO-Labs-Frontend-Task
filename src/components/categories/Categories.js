"use client"
import React from 'react'
import { PokemonContainer, PokemonGrid } from '@/style/CustomTags'
import { useAllPokemons } from '@/utils/Hooks';

function Categories() {
    const { data} = useAllPokemons();

  return (
    <div>
      <PokemonContainer>
        {data?.map((item,index)=>(
            <PokemonGrid key={item.name} href={`/category/${item.url.substring(item.url.indexOf('type/') + 'type/'.length)}`}>{item.name}</PokemonGrid>
        ))}
    </PokemonContainer>
    </div>
  )
}

export default Categories
