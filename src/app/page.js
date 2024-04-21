'use client'
import {useState} from 'react';
import styles from "./page.module.css";
import { Hone, SearchInput } from "@/style/CustomTags";
import Categories from "@/components/categories/Categories";
import { PokemonContainer } from "@/style/CustomTags";
import { useAllCategory } from "@/utils/Hooks";
import PokemonDetails from '@/components/PokemonDetails/PokemonDetails';

export default function Home() {
  const [name, setName] = useState(null)
  const [typingTimeout, setTypingTimeout] = useState();
  const [loading, setLoading] = useState(false);
  const HandleName = (e)=>{
    // Clear existing timeout
    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }

    // Set a new timeout after user stops typing
    const timeout = setTimeout(() => {
        // Set the name after 3 seconds of inactivity
        setName(e.target.value);
    }, 3000);

    setTypingTimeout(timeout);
  }
 
  return (
    <main className={styles.main}>
      <PokemonContainer>
        <Hone>Pokemon</Hone>
        <SearchInput type='text'onChange={HandleName}/>
      </PokemonContainer>
      {name!==null?
      <PokemonDetails name={name}/>:''}
      
        <Categories/>
    </main>
  );
}
