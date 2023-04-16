import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { React, useState } from 'react';
import Link from 'next/link';
import Head from "next/head";
import Card from '@/components/card';
import Pagination from '@/components/Pagination';
export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
    query pokemons($first: Int!){
      pokemons(first: $first){
        id
        number
        name
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
        }
      }
    `,
    variables: { first: 6000 }
  });
  return {
    props: {
      data: data.pokemons
    },
  };
};

const index = ({ data }) => {

  const pageSize = 20;

  const [currentPage, setCurrentPage] = useState(1);


  const indexOfLastData = currentPage * pageSize;
  const indexOfFirstData = indexOfLastData - pageSize;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />
      </Head>
      <div className="row mb-5" style={{ marginRight: '50px', marginLeft: '53px',position:'sticky' }}>
        <nav className="navbar sticky-top navbar-light bg-light" style={{borderRadius:'10px',position:'sticky'}}>
          <form className="form-inline">
            <Link href='/Details'>
              <button className="btn btn-outline-success " style={{marginLeft:'10px'}} type="button">Detail Page</button>
            </Link>
          </form>
        </nav>
      </div>
      <Card data={currentData}></Card>
      <Pagination
        items={data.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default index