/* eslint-disable react/prop-types */
import { Typography } from 'antd';

//Los titulos se unsan con tipografias en antd
const { Title } = Typography;

const Usuario = ({nombreUsuario, apellidoUsuario}) => {

    console.log(nombreUsuario);

    return (

        <Title level={3}> Hola, {nombreUsuario} {apellidoUsuario}</Title>
        
    );

};

export default Usuario;
