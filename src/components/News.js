import React, {useEffect, useState} from 'react';

const News = (props) => {
    const [info, setInfo] = useState([]);
    const [search, setSearch] = useState("")
    const [display, setDisplay] = useState([])

    

    const getNews = ()=> {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=dc3063ef0bce4718a88a3ac000ec7448')
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setInfo(response.articles)
                setDisplay(response.articles)
            })
            .catch(err=> {
                console.log(err)
            })
    }

    // useEffect(()=>{
    //     console.log("search term is:", search)
    //     console.log(info)
    //     if(info[0] != undefined){
    //         console.log("okay now we safe")
    //         console.log(info[0].description)
    //         let newinfo = info.filter((x,i) => {
    //             if (info[i].description != null){
    //                 return x.description.includes(search)
    //             }
                
    //         })
    //         setInfo(newinfo)
    //         setDisplay(newinfo)
    //     }
        
    //     // setInfo(info.filter(article => article.description.includes(search)))
    // }, [search])

    const changeHandler = (e)=>{
        setSearch(e.target.value)
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=dc3063ef0bce4718a88a3ac000ec7448')
            .then(response => response.json())
            .then(response => {
                console.log(response)
                // setInfo(response.articles)
                if(search.length >0){
                    let newinfo = info.filter((x,i) => {
                        if (info[i].description != null){
                            return x.description.includes(search)
                        }   
                    })
                    setDisplay(newinfo)
                }
                
            })
            .catch(err=> {
                console.log(err)
            })

    }

    // useEffect(()=>{
    //     fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=dc3063ef0bce4718a88a3ac000ec7448')
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response)
    //             setInfo(response.articles)
    //         })
        
    // }, [])

    

    
        return (

        <div className = "container">
            <div className="jumbotron">
                <h1>News from this week</h1>
                <button className = "mb-3"onClick= {getNews}>Fetch News</button>
                <div className="row is-scrollable">
                    <div className="col-sm-8">
                        <div className="form-group">
                            <input type="text" name="" id="" className="form-control"  onChange = {changeHandler}placeholder = "Search articles..."/>
                        </div>
                    </div>
                    {display.map((article, i)=>{
                    return <div className = "card mb-2 p-3 " key = {i}>
                        <h5>{article.description}</h5>
                        </div>
                })}
                </div>
                
                
            </div>
            
        </div>
    );
    }

    

export default News;

// const getPokemon=()=>{
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
//         .then(response => response.json())
//         .then(response => setPokemon(response.results))
// };

// return (
//     <div style={{textAlign:"center", width:300, marginLeft:600}}>
//         <button onClick={getPokemon}>Fetch Pokemon</button>
//         <ul style={{textAlign:"center"}}>
//         {pokemon.length > 0 && pokemon.map((mon, index)=>{
//             return (<li key={index}>{index+1}  {mon.name}</li>)
//         })}
//         </ul>
//     </div>
// );
// }