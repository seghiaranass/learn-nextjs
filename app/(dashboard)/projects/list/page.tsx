import styles from './projects.module.css'
import Link from 'next/link'
export default function Home(){
    return (
      <main>
        
        <h1>Project List</h1>

        <ul className={styles.ul}>
            <li>
                <Link href='/projects/jobit'>
                    JobIt
                </Link>
            </li>
            <li>
                <Link href='/projects/carrent'>
                    Car rent
                </Link>
            </li>
            <li>
                <Link href='/projects/hipnode'>
                    hipnode
                </Link>
            </li>
        </ul>
      </main>
    );
  }