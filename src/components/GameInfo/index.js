import React from 'react'

const TitleGame = () => {
    let title = db.map((a)=> a.name)
     return <h3>{title}</h3> 
}
export default TitleGame;



/*
     let title = db.map((a)=>a.name)
     return <h3>{title}</h3> 
*/