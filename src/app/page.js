import styles from "./page.module.css";
import { Hone } from "@/style/CustomTags";
import Categories from "@/components/categories/Categories";
export default function Home() {
  
 
  return (
    <main className={styles.main}>
      <Hone>Pokemon</Hone>
        <Categories/>
    </main>
  );
}
