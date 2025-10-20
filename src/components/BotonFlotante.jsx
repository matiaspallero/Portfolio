import React from 'react';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const BotonFlotante = () => (
    <FloatButton.BackTop
       icon={<UpOutlined />}
       className="!bg-cyan-500 !border-[#1890ff] !text-white"
       visibilityHeight={100}
       style={{
        left: 'auto',
        right: '16px',
        bottom: '16px',
        zIndex: 9999,
       }}
     />
);

export default BotonFlotante;