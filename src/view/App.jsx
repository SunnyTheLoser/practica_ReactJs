// Importaciones

import Prueba from "./Prueba"
import Calendario from "./Calendario"
import Valoracion from "./Valoracion"
import Usuario from "./Usuario"
import { Col, Row } from 'antd';
import { purple, } from '@ant-design/colors';



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
      <br></br>
      <Valoracion />
      <Valoracion />

<Row style={{ backgroundColor: purple[3] }}>
  <Col span={24}>col</Col>
</Row>
<Row>
  <Col span={12} style={{ backgroundColor: purple[4] }}>col-12</Col>
  <Col span={12} style={{ backgroundColor: purple[5] }}>col-12</Col>
</Row>
<Row>
  <Col span={8} style={{ backgroundColor: purple[6] }}>col-8</Col>
  <Col span={8} style={{ backgroundColor: purple[7] }}>col-8</Col>
  <Col span={8} style={{ backgroundColor: purple[8] }}>col-8</Col>
</Row>
<Row>
  <Col span={6} style={{ backgroundColor: purple[9] }}>col-6</Col>
  <Col span={6} style={{ backgroundColor: purple[8] }}>col-6</Col>
  <Col span={6} style={{ backgroundColor: purple[7] }}>col-6</Col>
  <Col span={6} style={{ backgroundColor: purple[6] }}>col-6</Col>
</Row>
<br></br>
<br></br>
</>

  )

}

// Exportaciones

export default App
