
"use client"
import { useAllCategory } from '@/utils/Hooks';
import { FlexColumn, Hone, PokemonContainer, PokemonGrid } from '@/style/CustomTags';

const Category = ({ params }) => {
  const { data} = useAllCategory(`/type/${params.slug}`);
  return (
    <FlexColumn>
      <Hone>Pokemon Type: {data?.name}</Hone>
   <PokemonContainer>
    {data?.pokemon.map((item,index)=>(
        <PokemonGrid key={item.pokemon.name} href={`/pokemon/${item.pokemon.url.substring(item.pokemon.url.indexOf('pokemon/') + 'pokemon/'.length)}`}>{item.pokemon.name}</PokemonGrid>
    ))}
  </PokemonContainer>
  </FlexColumn>
);
};

export default Category;