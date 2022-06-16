import * as React from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useRef } from 'react';


function valuetext(value) {
    return `${value}$`;
  }

const BuscadorProductos = () => {
    const refMin = useRef(null)
    const refMax = useRef(null)

    const [value, setValue] = React.useState([0, 15000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        refMin.current.value = newValue[0]
        refMax.current.value = newValue[1]
    }
    const handleBlur = (event, newValue) => {
       
        setValue([+refMin.current.value, +refMax.current.value]);
    }

    return(
        <main>
            <div id='buscador-contenedor'>
                <h1>Buscador</h1>
                <div id='range-input-container'>
                    <div className='range-text-input'>
                        <label htmlFor="min">Min</label>
                        <input ref={refMin} className='range-input' onBlur={handleBlur} type="text" name='min' />
                    </div>
                    <div className='range-text-input'>
                        <label htmlFor="max">Max</label>
                        <input ref={refMax} className='range-input' onBlur={handleBlur} type="text" name='max'/>
                    </div>
                </div>
                <Box sx={{ width: '75%' }}>
                    <Slider
                        getAriaLabel={() => 'Price Range'}
                        value={value}
                        max={50000}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </Box>

                <div id='lugar-lista-container' className='opciones-container'>
                    <h2>Ubicacion</h2>
                    <ul className='categorias-lista'>
                        <li>Urquiza</li>
                        <li>Capital</li>
                        <li>Savedra</li>
                        <li>San Luis</li>
                        <li>Tucuman</li>
                        <li>La esquina</li>
                    </ul>
                </div>

                <div id='categorias-lista-container' className='opciones-container'>
                    <h2>Categorias</h2>
                    <ul className='categorias-lista'>
                        <li>Electrodomesticos</li>
                        <li>Limpieza</li>
                        <li>Juegos</li>
                        <li>Perisfericos</li>
                        <li>Ropa</li>
                        <li>Muebles</li>
                    </ul>
                </div>
                <Button variant="contained" component="span">Buscar</Button>
            </div>

        </main>
    )
}

export default BuscadorProductos