import React from 'react';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const BotonFlotante = () => (
  // El FloatButton.BackTop se posicionará correctamente sin un div contenedor con altura específica.
  // Si necesitas algún padding alrededor, considera aplicarlo de otra manera o directamente al body/html si es global.
    <FloatButton.BackTop
       icon={<UpOutlined />}
       className="!bg-[#00d3f2] !border-[#1890ff] !text-white" // Clases de Tailwind
       visibilityHeight={100}
     />
);

export default BotonFlotante;