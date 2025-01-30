import React from 'react'
import { client } from '../lib/client';

import { Product, FooterBanner, HeroBanner } from '../components';
import { getServerSideProps } from 'next/dist/build/templates/pages';

const Home = ({products, bannerData}) => {
  return (
   <>
   <HeroBanner />
   {console.log(bannerData)}

   <div className='products-heading'>
    <h2>Best Selling Products</h2>
    <p>Speakers of many variations</p>
   </div>

   <div className='products-container'>
    { products?.map(
      (product) => product )}
    </div>

    <FooterBanner />
   </>
  )
};

export default getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}