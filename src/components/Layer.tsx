import React from 'react';
import type { layer } from './Layers';

interface LayerProps {
  layer: layer;
  icon: string;
}

function Layer({ layer, icon }: LayerProps) {
  return (
    <li className='pl-5 relative list-none'>
      <span className='absolute left-0'>{icon}</span>
      {layer.name} ({layer.type})
    </li>
  );
}

export default Layer;
