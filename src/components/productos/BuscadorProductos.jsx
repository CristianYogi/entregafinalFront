import * as React from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useRef } from 'react';


function valuetext(value) {
    return `${value}$`;
  }

const BuscadorProductos = () => {
    const valorInicial = [50, 15000]

    const refMin = useRef()
    const refMax = useRef()

    const [value, setValue] = React.useState(valorInicial);

    const minDistance = 5000;

    const handleChange = (event, newValue, activeThumb) => {
        
        if (!Array.isArray(newValue)) {
            return;
          }
      
          if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
          } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
          }

        // setValue(newValue)
        refMin.current.value = value[0]
        refMax.current.value = value[1]
    }
    const handleBlur = (event, newValue) => {
       if(+refMax.current.value < +refMin.current.value){
            const newMax = +refMin.current.value + minDistance
            setValue([+refMin.current.value, +newMax]);
            refMax.current.value = newMax
       }else{
            setValue([+refMin.current.value, +refMax.current.value]);
       }        
    }

    return(
        <main>
            <div id='buscador-contenedor'>
                <h1>Buscador</h1>
                <div id='range-input-container'>
                    <div className='range-text-input'>
                        <label htmlFor="min">Min</label>
                        <input ref={refMin} className='range-input' onBlur={handleBlur} defaultValue={valorInicial[0]} type="number" name='min' />
                    </div>
                    <div className='range-text-input'>
                        <label htmlFor="max">Max</label>
                        <input ref={refMax} className='range-input' onBlur={handleBlur} defaultValue={valorInicial[1]} type="number" name='max'/>
                    </div>
                </div>
                <Box sx={{ width: '75%' }}>
                    <Slider
                        getAriaLabel={() => 'Minimum distance'}
                        value={value}
                        max={50000}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        step={1000}
                        disableSwap
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
                <Button variant="contained" onClick={() => {
                    alert(value)
                }} component="span">Buscar</Button>
            </div>

        </main>
    )
}

export default BuscadorProductos