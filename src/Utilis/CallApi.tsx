
import { useDataMutation } from "../Store/api/apiData";

/*Call Data from api */
export function useApiData() {
  const [sendRequest, { data, isLoading, error }] = useDataMutation();

  const handleRequest = async (
    url: string,
    method: string,
    token?: string,
    databody?: any,
    refetch?: () => void
  ) => {
    try {
      const response = await sendRequest({
        urldata: url,
        method,
        data: databody,
        token,
      }).unwrap();

      console.log("answer of back :", response);

      if (refetch) {
        refetch(); // rafraîchir les données
      }

      return response;
    } catch (err) {
      console.error(" Error API :", err);
      throw err;
    }
  };

  return { data, error, isLoading, handleRequest };
}
