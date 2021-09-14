import React from "react";
import ComposedGraph from "./ComposedGraph";
import { Box } from "@material-ui/core";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const data = require("../data/posts.json");

const Graph = () => {
    return(
        <div>
            
            <Box bgcolor="primary.main"
                 color="primary.contrastText"
                 p={2}
                 textAlign="center"
            >
                
                   GRÁFICA LINEAL
            </Box>
           
            <Box
                display="flex" justifyContent="center" m={10} p={1} bgcolor="background.paper"
             >
               
                
                <LineChart width={600} height={300} data={data} title="hola">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="hum"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="temp" stroke="#85ca9d" />
                    <Line type="monotone" dataKey="viento" stroke="ba000d" />
                    <Line type="monotone" dataKey="vel" stroke="#002884" />
                </LineChart>
            </Box>

            <Box bgcolor="primary.main"
                 color="primary.contrastText"
                 p={2}
                 textAlign="center"
            >
                   GRÁFICO DE BARRAS
            </Box>

            <Box
                display="flex" justifyContent="center" m={10} p={1} bgcolor="background.paper"
             >
                      
              <ComposedGraph />
            </Box>

        </div>
    )
}

export default Graph