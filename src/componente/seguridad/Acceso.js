import React, { useState } from 'react';
import style from '../Tool/Style';
import { Avatar, Button, Container, TextField, Typography, Grid } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';


const Acceso = () => {

    const [usuario, setUsuario] = useState({
        password :''
        });

    const [ErrorPassword, setErrorPassword] = useState(0);
    
    const ValidatePassword = e => {
        const{name, value} = e.target;
        setUsuario( anterior => ({
            ...anterior,
            [name] : value
        }))
        console.log(value);
        const minValue=value.length>4;
        const maxValue=value.length<16;
        const onliLet=/^.{4,16}$/.test(value);

        console.log("min",minValue);
        console.log("maxValue",maxValue);
        console.log("onliLet",onliLet);

        if (onliLet === false) {
            setErrorPassword(1);
        } else if (!minValue) {
            setErrorPassword(2);
        } else {
            setErrorPassword(3);
        }

        if (onliLet === true && minValue && maxValue) {
            setErrorPassword(0);
        }
        setUsuario(value);
    }

    const loginUsuarioBoton = e => {
     
    }

    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Votacion AIE Asamblea General Extraordinaria Electoral
                </Typography>
                <Avatar style={style.avatar}>
                    <LockIcon style={style.icon}/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    CANDIDATUTA ELECCIONES AIE PRESIDENTE Y DEMAS MIEMBROS DEL CONSEJO DE ADMINISTRACION
                </Typography>
                <Typography component="h1" variant="h5">
                    Codigo de acceso a la votacion
                </Typography>
                <form style={style.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                    <Grid item xs={12} md={4}></Grid>
                        <TextField 
                                id="codigo"
                                required
                                name="codigo"
                                error={ErrorPassword} 
                                value={usuario.pasword} 
                                onChange={ValidatePassword} 
                                variant="outlined" 
                                type="password" 
                                label="Ingrese su codigo de acceso" 
                                helperText="Ingrese un codigo de acceso valido"
                                fullWidth 
                                style={style.submit}
                                />
                    </Grid>
                    <Grid item xs={12} md={4}></Grid>
                    <Grid item xs={12} md={4}></Grid>
                        <Button onClick={loginUsuarioBoton} type="submit" fullWidth variant="contained" color="primary" style={style.paper}>
                            Enviar
                        </Button>
                </Grid>
                </form>
            </div>
        </Container>
    );
};

export default Acceso; 


