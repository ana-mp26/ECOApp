import React from "react";
import MaterialTable from 'material-table'
import { Box } from "@material-ui/core";


const data = require("../data/posts.json");

const Tabla = () => {

    const columnas=[
        {
            title:'Nº de Muestra',
            field:'name'
        },

        {
            title:'Temperatura (°C)',
            field:'temp'
        },

        {
            title:'Humedad (%)',
            field:'hum'
        },

        {
            title:'Velocidad (km/h)',
            field:'vel'
        },

        {
            title:'Dir. Viento',
            field:'viento'
        }
    ]
    return (
        <div>

            <Box   
                display="flex" justifyContent="center" m={10} p={1} bgcolor="background.paper"
             >
            <MaterialTable
                columns={columnas}
                data={data} 
                title='Tabla de sensores' 
            />
            </Box>

        </div>



    )




}
export default Tabla