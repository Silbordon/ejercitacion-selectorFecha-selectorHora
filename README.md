# Comentarios

### Utilizamos material-ui pickers
(https://material-ui-pickers.dev/)

### Descargas
1- npm i @material-ui/pickers
2-npm i @date-io/date-fns@1.x date-fns
3-npm i @material-ui/core

### Consideraciones
*** En index.js *** 
1- Importar:
* import {MuiPickersUtilsProvider} from '@material-ui/pickers'
* import DateFnsUtils from '@date-io/date-fns' 
2- Envolver el componente principal "App": 
** <MuiPickersUtilsProvider utils={DateFnsUtils}> 
        <App /> 
    </MuiPickersUtilsProvider>
