// Importaciones

import Prueba from "./Prueba"
import Calendario from "./Calendario"
import Valoracion from "./Valoracion"
import Usuario from "./Usuario"
import { Col, Row } from 'antd';

// Funciones Principales

function App() {
  return (
    <>
      <Usuario nombreUsuario={"Sunny"} />
      <Usuario nombreUsuario={"JuanJo"} apellidoUsuario={"Monzon"}/>
      <Usuario nombreUsuario={"Esteban"} />
      <Usuario nombreUsuario={"Pedrito"} apellidoUsuario={"Mejia"}/>
      <Usuario nombreUsuario={"Kendra"} />
      <Prueba />
      <Calendario />
      <Valoracion />
      <br></br>
      <Valoracion />
      <br></br>
      <Valoracion />

<Row>
  <Col span={24}>col</Col>
</Row>
<Row>
  <Col span={12}>col-12</Col>
  <Col span={12}>col-12</Col>
</Row>
<Row>
  <Col span={8}>col-8</Col>
  <Col span={8}>col-8</Col>
  <Col span={8}>col-8</Col>
</Row>
<Row>
  <Col span={6}>col-6</Col>
  <Col span={6}>col-6</Col>
  <Col span={6}>col-6</Col>
  <Col span={6}>col-6</Col>
</Row>
</>
  )
}

// Exportaciones

export default App
