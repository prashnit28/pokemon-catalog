import React from 'react'
import { useRouter } from 'next/router'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Detailcard from '@/components/Detailcard';
import Ndetailcard from '@/components/NdetailCard';
export const getStaticPaths = async () =>{

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
    // console.log("this is main data",data)
    const paths = data.pokemons.map((item) =>{
        return {
            params:{
                pokemon:item.id.toString() + item.name.toString() ,
            }
        }
    })
    return {
        paths,
        fallback:false
    }    
}

export const getStaticProps = async (context) => {
    const client = new ApolloClient({
      uri: 'https://graphql-pokemon2.vercel.app/',
      cache: new InMemoryCache()
    });
    const id = context.params.pokemon;
    // console.log("this is id ",id)
    const { data } = await client.query({
      query: gql`
      query pokemon($id: String, $name: String){
        pokemon(id: $id, name: $name){
          id
          number
          name
          weight{
            minimum
            maximum
          }
          height{
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
      variables: { id,name:"" }
    });
    // console.log(data.pokemon)
    return {
        props: {
          data: data.pokemon
        },
      };
};
function Pokemon ({data}) {
    // console.log("this is data",data)
  return (
    <>
        {/* <h1>{id}</h1> */}
        {/* <h1>jdlfjlsd</h1> */}
        <Ndetailcard data = {data} />
     </>

  )
}

export default Pokemon 