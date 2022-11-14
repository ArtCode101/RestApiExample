import * as React from 'react';
import styles from './../../styles/Home.module.css'
import Products from '../../component/page/products';
import Layout from '../../component/common/Layout';
import { useRouter } from 'next/router';


const FruitsProduct = () => {
    const router = useRouter()
    const label = "Basket"

    const onBasketPage = () => {
        router.push("/fruitsCart")
    }
    return (       
        <div className={styles.main}>
            <Layout handle={onBasketPage} label={label}/>
            <Products />
        </div>
    )
}

export default FruitsProduct