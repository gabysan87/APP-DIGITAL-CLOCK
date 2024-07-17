import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";


export const AppClock = () => {
  let time = new Date().toLocaleTimeString();  //Almacena la hora actual en formato de cadena utilizando toLocaleTimeString(), que devuelve la hora actual en el formato local.
  const [dateTime, setDateTime] = useState(time);
  

  // Se utiliza para manejar el intervalo.
  useEffect(() => {
    const updateTime = () => {
      let time = new Date().toLocaleTimeString(); 
      setDateTime(time);
    };
    setInterval(updateTime, 1000) //Configura el intervalo que actualiza la hora cada segundo.
  }, []);
  


  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "400px",
        margin: "auto",
        marginTop: "400px",
        border: "1px solid",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h1"
        component="div"
        sx={{ fontFamily: "monospace", fontWeight: "bold", color: "fuchsia" }}
      >
        {dateTime}
   
      </Typography>
    </Box>
  );
};


// Métodos de fecha
// Cuando se crea un objeto de fecha, existen varios métodos que permiten operar sobre él.

// Los métodos de fecha le permiten obtener y establecer el año, mes, día, hora, minuto, segundo y milisegundo de los objetos de fecha, utilizando la hora local o la hora UTC (universal o GMT).

// toLocaleTimeString(): Método que devuelve una cadena con la hora formateada según la configuración regional del usuario.