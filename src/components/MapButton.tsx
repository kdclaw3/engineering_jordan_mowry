import axios from 'axios';

interface MapButtonProps {
  setMapData: (data: { [key: string]: any }) => any;
  setIsLoading: (isLoading: boolean) => any;
}

function MapButton({ setMapData, setIsLoading }: MapButtonProps) {
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        'https://maps.tr.qld.gov.au/arcgis/rest/services/External/External_TRMaps/MapServer?f=pjson'
      );

      setMapData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={fetchData}
      >
        Load Map Data
      </button>
    </div>
  );
}

export default MapButton;
