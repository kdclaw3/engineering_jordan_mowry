import Layer from './Layer';
import { RandomEmojiGenerator } from '../utils';

export type layer = {
  id: number;
  name: string;
  parentLayerId: number;
  defaultVisibility: boolean;
  subLayerIds: null | number[];
  minScale: number;
  maxScale: number;
  type: string;
  geometryType: string;
};

interface LayersProps {
  layers: layer[];
}

function Layers({ layers }: LayersProps) {
  return (
    <div>
      <h3 className='font-bold text-lg'>Layers</h3>
      <ul>
        {layers.map((layer) => (
          <Layer
            key={layer.id}
            layer={layer}
            icon={new RandomEmojiGenerator().generate()}
          />
        ))}
      </ul>
    </div>
  );
}

export default Layers;
