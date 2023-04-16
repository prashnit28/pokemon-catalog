import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Detailcard from '@/components/Detailcard';
import Link from 'next/link';
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
    variables: { first: 20 }
  });
  // console.log("this is data",data.pokemons)
  // const check = await data.pokemons.json();
  return {
    props: {
      data: data.pokemons
    },
  };
};

function index({ data }) {
  return (
    <>
      <div className="row" style={{ marginRight: '100px', marginLeft: '103px', position: 'sticky' }}>
        <nav className="navbar sticky-top navbar-light bg-light" style={{ borderRadius: '10px', position: 'sticky' }}>
          <form className="form-inline">
            <Link href='/'>
              <button className="btn btn-outline-success " style={{ marginLeft: '10px' }} type="button">Home Page</button>
            </Link>
          </form>
        </nav>
      </div>
      {
        data.map((item) => (
          <Detailcard data={item}></Detailcard>
        ))
      }
    </>
  )
}

export default index