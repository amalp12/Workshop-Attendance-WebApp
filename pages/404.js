import styles from '../styles/404.module.css';
import Link from 'next/link';

export default function NotFound()
{
    return ( 
        <div className={styles["conatiner-404"]}>
          <h1>404 NOT Found  Click <Link href="/"><a className={styles['here-link']}> here </a></Link> to go back to Home Page</h1>
        </div>)
}