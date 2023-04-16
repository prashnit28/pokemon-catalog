import React, { useState } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Button, Modal } from 'react-bootstrap';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
function Detailimg({ item }) {
    const color = {
        Poison: "#b97fc9",
        Grass: "#9bcc50",
        Water: "#4592c4",
        Fire: "#fd7d24",
        Flying: "#3dc7ef",
        Bug: "#729f3f",
        Normal: "#a4acaf",
        Electric: "#eed535",
        Ground: "#ab9842",
        Fairy: "#fdb9e9",
        Fighting: "#d56723",
        Rock: "#a38c21",
        Psychic: "#f366b9",
        Steel: "#9eb7b8",
        Ice: "#51c4e7",
        Ghost: "#7b62a3",
        Dragon: "#f16e57",
    }
    // console.log(item)
    const [modalonimg, setmodalonimg] = useState(false);
    const [evaluation, setevaluation] = useState([]);
    const callEvaluation = async () => {
        const client = new ApolloClient({
            uri: 'https://graphql-pokemon2.vercel.app/',
            cache: new InMemoryCache()
        });

        const { data } = await client.query({
            query: gql`
            query pokemon($id: String, $name: String) {
                pokemon(id: $id, name: $name) {
                  id
                  name
                  evolutions {
                    id
                    number
                    name
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
              }              
            `,
            variables: { id: item.data.id, name: item.data.name }
        });
        // console.log("this is res", data.pokemon.evolutions);
        setevaluation(data.pokemon.evolutions);
        // console.log(element.types)
        // settype(data.pokemon.evolutions.types);
        // console.log("this is evaluation", evaluation);
        setmodalonimg(true);
    }
    return (
        <>
            <div className='row shadow text-center ttt' style={{ width: '500px', height: '500px', borderRadius: '10px', marginRight: "10px" }}>
                <img src={item.data.image} alt="Card image cap" style={{ width: '100%', height: '85%' }} />
                <div>
                    <button type="button" className="btn btn-info " style={{ fontSize: "25px", width: '150px', boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", color: 'black' }} onClick={callEvaluation}>Evolutions</button>
                </div>
            </div>
            <Modal
                size="sm"
                show={modalonimg}
                onHide={() => setmodalonimg(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        <h4>
                            Evolutions
                        </h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col'>
                            <div className='text-center'>
                                <img src={item.data.image} className='p-3 shadow-lg' alt="" style={{ width: '150px', height: '150px', borderRadius: '30%', border: "5px solid #707070" }} />
                                <h4 className='m-2'>{item.data.name} <span style={{ color: '#616161' }}>#{item.data.number}</span></h4>

                                {
                                    item.data.types.map((type) => (
                                        <button type="button" className="m-1" style={{ width: '80px', height: '25px', fontSize: '15px', borderRadius: '5px', border: 'none', backgroundColor: `${color[type]}`, boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", color: 'black' }}>{type}</button>
                                    ))
                                }
                                {evaluation &&
                                    evaluation.map((key) => (
                                        <div className='text-center'>
                                            <div style={{ marginTop: '0px' }}>
                                                <MdOutlineKeyboardArrowDown size={100} color='#616161' />
                                            </div>
                                            <img src={key.image} alt="" className='p-3 shadow-lg' style={{ width: '150px', height: '150px', borderRadius: '30%', border: "5px solid #707070" }} />
                                            <h4 className='m-2'>{key.name} <span style={{ color: '#616161' }}>#{key.number}</span></h4>
                                            {
                                                key.types.map((type) => (
                                                    <button type="button" className="m-1" style={{ width: '80px', height: '25px', fontSize: '15px', borderRadius: '5px', border: 'none', backgroundColor: `${color[type]}`, boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", color: 'black' }}>{type}</button>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='text-center'>
                        <Button variant="secondary" onClick={() => { setmodalonimg(false) }} style={{backgroundColor:'red',border:'none'}}>
                            Close
                        </Button>

                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Detailimg