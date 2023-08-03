import { useState } from 'react';
import MapButton from './components/MapButton';
import Layers from './components/Layers';

function App() {
  const [mapData, setMapData] = useState<null | { [key: string]: any }>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className='p-5 flex justify-center flex-col items-center'>
      <MapButton setIsLoading={setIsLoading} setMapData={setMapData} />
      {isLoading && <p className='my-4'>...Loading</p>}
      {mapData && <Layers layers={mapData.layers} />}
    </div>
  );
}

export default App;
