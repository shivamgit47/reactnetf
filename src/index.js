import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cards from './Cards';
import Sdata from "./Sdata";

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
  <h1 className='heading_style'>List of top 5 favourite webseries</h1>
  {Sdata.map((vals,index,arr)=>{
  
    return(
      <Cards
      key={vals.id}
      imgsrc={vals.imgsrc}
      title={vals.title}
      sname={vals.sname}
      links={vals.links}
      />
    )
  })}
   
  {/* <Cards 
  imgsrc={Sdata[0].imgsrc}
  title={Sdata[0].title}
  sname={Sdata[0].sname}
  links={Sdata[0].links}
  ></Cards>
   <Cards 
  imgsrc={Sdata[1].imgsrc}
  title={Sdata[1].title}
  sname={Sdata[1].sname}
  links={Sdata[1].links}
  ></Cards>
   <Cards 
  imgsrc={Sdata[2].imgsrc}
  title={Sdata[2].title}
  sname={Sdata[2].sname}
  links={Sdata[2].links}
  ></Cards>
   <Cards 
  imgsrc={Sdata[3].imgsrc}
  title={Sdata[3].title}
  sname={Sdata[3].sname}
  links={Sdata[3].links}
  ></Cards>
   <Cards 
  imgsrc={Sdata[4].imgsrc}
  title={Sdata[4].title}
  sname={Sdata[4].sname}
  links = {Sdata[4].imgsrc}
  ></Cards> */}
  </>
);
    
    

