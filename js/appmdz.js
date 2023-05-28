const ciudades = [{nombre:'Mendoza Cd.',
                latitud:-32.89,
                longitud:-68.83
                },
                {nombre:'Malargüe',
                 latitud:-35.48,
                 longitud:-69.581
                },
                {nombre  :'Las Leñas',
                 latitud : -35.15,
                 longitud: -70.08
                  },
                 {nombre:'San Rafael',
                  latitud:-34.62,
                  longitud:-68.33
                 }
];

const cajas = [...document.querySelectorAll(".caja")];
const tituloClima= document.querySelector("#clima");
let latitud, longitud;
let url;

for (let i=0; i<ciudades.length;i++) { 
    latitud=ciudades[i].latitud;
    longitud=ciudades[i].longitud;
    let ciudad = cajas[i].querySelector(".ciudad");
    let temperatura = cajas[i].querySelector(".temperatura");
    let clima = cajas[i].querySelector(".clima");
  
    url=`https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&hourly=temperature_2m&current_weather=true&forecast_days=1&timezone=America%2FSao_Paulo`
    
    fetch(url)
        .then( res => res.json())
        .then(data => {
            ciudad.textContent = ciudades[i].nombre;
            temperatura.textContent = `${Math.round(data.current_weather.temperature)} 
                                        ${data.hourly_units.temperature_2m}`;
            
            if (i==ciudades.length-1) {
                let time = (data.current_weather.time);
                let fecha = time.substring(0,10);
                let hora =  time.substring(11,16);
                let texto = (fecha.substring(8,10) + "-" + fecha.substring(5,7) +
                            "-" + fecha.substring(0,4) + " " + hora);
                tituloClima.textContent = `Clima actualizado : ${texto}`;
            }    
            
            switch (data.current_weather.weathercode) {
            case 0:
                clima.textContent="Cielo limpio";
                break;
            case 1: 
                clima.textContent="Principalmente despejado";
                break;
            case 2:
                clima.textContent="Parcialmente nublado";
                break;
            case 3:	
                clima.textContent="Nublado"
                break;
            case 45 : 
                clima.textContent="Niebla";
                break;
            case 48	:
                clima.textContent="Niebla de escarcha depositada";
                break;
            case 51:
                clima.textContent="Llovizna ligera";
                break;
            case 53:
                clima.textContent="Llovizna moderada";
                break;
            case 55:
                clima.textContent="Llovizna densa";
                break;
            case 56:
                clima.textContent="Llovizna Engelante ligera";
                break;
            case 57:
                clima.textContent="Llovizna Engelante densa";
                break;
            case 61:
                clima.textContent="Lluvia leve";
                break;
            case 63:
                clima.textContent="Lluvia moderada";
                break;
            case 65:
                clima.textContent="Lluvia fuerte";
                break;
            case 66:
                clima.textContent="Lluvia helada ligera";
                break;
            case 67:
                clima.textContent="Lluvia helada fuerte";
                break;
            case 71:
                clima.textContent="Caída de nieve ligera";
                break;
            case 73:
                clima.textContent="Caída de nieve moderada";
                break;
            case 75:
                clima.textContent="Caída de nieve fuerte";
                break;
            case 77:
                clima.textContent="Granos de nieve";
                break;
            case 80:
                clima.textContent="Lluvia leve";
                break;
            case 81:
                clima.textContent="Lluvia moderada"
                break;
            case 82:
                clima.textContent="Lluvia violenta";
                break;
            case 85:
                clima.textContent="Chubascos de nieve leves";
                break;
            case 86:	
                clima.textContent="Chubascos de nieve fuertes";
                break;
            case 95:
                clima.textContent="Tormenta Ligera o moderada";
                break;
            case 96:
                clima.textContent="Tormenta con granizo leve";
                break;
            case 99:
                clima.textContent="Tormenta con granizo fuerte";
                break;
            default :
                clima.textContent=" ";
            }

        })
        .catch (error => console.log(error));

}