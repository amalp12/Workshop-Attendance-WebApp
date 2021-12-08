import styles from '../styles/Loader.module.css';
import Image from 'next/image';


export default function Loader() {

    return (
        <div className={styles["loaderContainer"]}>
            <Image src= "/loading.svg" layout ="fill" alt="loader" />
            <div>Loading...</div>

        </div>
    )

}