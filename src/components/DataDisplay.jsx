import React from "react";
import Data from "../data/posts.json"
import { Divider
 } from "@material-ui/core";

/**
 * Our data
 * ------------------------
 */


/**
 * Our React component where we should display data
 * ------------------------
 */
 const DataDisplay = () => {
 

  return (
    <div className="DataDisplay">
      {/* Show user data here */}
      <div className="posts">

        {Data.map(post => {
            return(
            <div>
                <Divider />
                <h3>
                    En la muestra {post.name} se han recogido los siguientes datos:
                </h3>
                <p>
                    Una humedad relativa del {post.hum} %, con una temperatura de {post.temp} grados centígrados.
                </p>
                <p>
                    La dirección del  viento es {post.viento} y con una velocidad de  {post.vel} km/h.
                </p>

            </div>

                
                     
                    

              
                    


            )
        })}
        
        

      </div>
    </div>
  );
}
export default DataDisplay