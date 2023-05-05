import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function Card({ data }) {
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

    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />
            </Head>
            <div className="row" style={{ marginRight: '50px', marginLeft: '20px' }}>
                {
                    data.map((item) => (
                        <div className='col-2' style={{ marginRight: '30px', marginLeft: '12px' }}>
                            <div className="" style={{ width: '17rem', height: '17rem', margin: '10px', border: 'none' }}>
                                <Link href={`/${item.id}${item.name}`}>
                                    <img className="card-img-top shadow" src={item.image} alt="Card image cap" style={{ width: '85%', height: '60%', borderRadius: '10%' }} />
                                </Link>
                                <div className="card-body">
                                    <div>
                                        <p style={{ color: 'gray', fontWeight: 'bold' }}>#{item.number}</p>
                                        <h5 className="" style={{ marginTop: '-10px' }}>{item.name}</h5>
                                        {
                                            item.types.map((type) => (
                                                <button type="button" className="m-1" style={{ width: '110px', height: '25px', borderRadius: '5px', border: 'none', backgroundColor: `${color[type]}`, boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}>{type}</button>

                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Card