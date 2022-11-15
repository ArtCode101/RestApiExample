import * as React from 'react';
import styles from './../../styles/Home.module.css'
import Carts from '../../component/page/Carts';
import Layout from '../../component/common/Layout';
import { useRouter } from 'next/router';


const FruitsCart = () => {
    const router = useRouter()
    const label = "Back"

    const onProductPage = () => {
        router.push("/fruitsProduct")
    }
    return (       
        <div className={styles.main}>
            <Layout handle={onProductPage} label={label}/>
            <Carts />
        </div>
    )
}

export default FruitsCart