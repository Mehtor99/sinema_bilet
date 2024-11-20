import React from 'react'
import RatingStar from '../components/atoms/RatingStar'

function MoviePage() {
  return (
    <>

  


  <div
    className="p-5 text-center bg-image"
   style={{backgroundImage:'url(https://mdbcdn.b-cdn.net/img/new/slides/041.webp)',  backgroundSize:'cover', height:'100vh'}}
     

  >
    <div className="mask " style={{height:'500px'}} >
    
        <div className="row align-items-center text-white">
         
          <div className="col-6" style={{marginTop:'200px'}}>
            <div style={{textAlign:'left',marginLeft:'300px'}}>
            <h1   className="mb-3">Matrix</h1>
            </div>
           
            <div style={{marginLeft:'300px',textAlign:'left'}}><RatingStar/> <RatingStar/> <RatingStar/><RatingStar/><RatingStar/> </div>
            <br /><br /><br />
    
            <div>
            <input type='button'  className="btn btn-success" value={'Bilet Al'} style={{width:'400px',height:'50px'}}/>
            </div>
            <div>
            <input type='button'  className="btn btn-primary mt-4" value={'Fragmanı izle'} style={{width:'400px',height:'50px'}}/>
            </div>
           
          </div>
       
          <div className="col-3"></div>
          <div className="col-3">

          </div>
         
        
          
        </div>
      
    </div>
  </div>
  </>

  )
}

export default MoviePage