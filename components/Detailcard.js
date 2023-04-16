import Head from 'next/head'
import Detailimg from './Detailimg';
function Detailcard(data) {
    // console.log(data)
    var category = data.data.classification;
    category = category.substring(0, category.length - 8);
    const types = data.data.types;
    const weaknesses = data.data.weaknesses;
    const resistances = data.data.resistant;
    const color  = {
        Poison:"#b97fc9",
        Grass : "#9bcc50",
        Water : "#4592c4",
        Fire : "#fd7d24",
        Flying: "#3dc7ef",
        Bug: "#729f3f",
        Normal: "#a4acaf",
        Electric:"#eed535",
        Ground:"#ab9842",
        Fairy:"#fdb9e9",
        Fighting:"#d56723",
        Rock:"#a38c21",
        Psychic:"#f366b9",
        Steel:"#9eb7b8",
        Ice:"#51c4e7",
        Ghost:"#7b62a3",
        Dragon:"#f16e57",
        }
    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />
            </Head>
            <div className="container mt-4 mb-2">
                <div className="row">
                    <div className='col-12 text-center mb-3' style={{}}>
                        <h1>{data.data.name} <span style={{ color: '#616161' }}>#{data.data.number}</span></h1>
                    </div>
                    <div className="col-6" >
                        {/* <div className='row shadow text-center' style={{ width: "500px", height: '500px', borderRadius: '10px', marginRight: "10px" }}>
                            <img src={data.data.image} alt="Card image cap" style={{ width: '100%', height: '85%' }} />
                            <div>
                                <button type="button" className="btn btn-info " style={{ fontSize: "25px", width: '150px' }}>Evolutions</button>
                            </div>
                        </div> */}
                        <Detailimg item={data} />
                    </div>
                    <div className="col-6" >
                        <div className='row shadow text-center' style={{ borderRadius: '10px', backgroundColor: '#30a7d7',marginLeft:'0px' }}>
                            <div className='col mt-3 mb-3' >
                                <div>
                                    <h5 style={{ color: "white", }}>Height</h5>
                                    <h4>{data.data.height.minimum}</h4>
                                </div>
                                <div className='mt-3'>
                                    <h5 style={{ color: "white", }}>Weight</h5>
                                    <h4>{data.data.weight.minimum}</h4>
                                </div>
                            </div>
                            <div className='col mt-3'>
                                <div>
                                    <h5 style={{ color: "white", }}>Classification</h5>
                                    <h4>{category}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1" style={{margingLeft:"-100px"}}>
                            <h3>
                                Types
                            </h3>
                            <div className='row'>
                            {
                                types.map((type) => (
                                    
                                    <button type="button" className="m-1" style={{width:'150px',height:'30px',borderRadius:'5px',border:'none',backgroundColor:`${color[type]}`,boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",color:'black'}}>{type}</button>
                                ))
                            }
                            </div>
                        </div>
                        <div className="row mt-1" style={{margingLeft:"-100px"}}>
                            <h3>
                            Weaknesses
                            </h3>
                            {
                                weaknesses.map((weak) => (
                                    
                                    <button type="button" className="m-1" style={{width:'150px',height:'30px',borderRadius:'5px',border:'none',backgroundColor:`${color[weak]}`,boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",color:'black'}}>{weak}</button>
                                ))
                            }
                        </div>
                        <div className="row mt-1" style={{margingLeft:"-100px"}}>
                            <h3>
                            Resistances
                            </h3>
                            {
                                resistances.map((res) => (
                                    
                                    <button type="button" className="m-1" style={{width:'150px',height:'30px',borderRadius:'5px',border:'none',backgroundColor:`${color[res]}`,boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",color:'black'}}>{res}</button>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <hr className='mt-5' />
            </div>
        </>
    )
}

export default Detailcard