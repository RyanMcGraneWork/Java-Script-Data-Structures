import  {useState, useEffect} from 'react';

function useFetch(url)
{
    const [responseJSON, setResponseJSON] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let shouldCancel = false;

        const callFetch = async () => {
            setIsLoading(true);

            try{
                const response = await fetch(url)
                const newResponseJSON = await response.json();

                if(shouldCancel)
                    return;

                setResponseJSON(newResponseJSON)
                seterror(null);
            }
            catch(newError){
                if(shouldCancel)
                    return;
                setError(newError);
                serResponseJSON(null)
            }
            setIsLoading(false);
        };

        callFetch();

        return () => (shouldCancel = true);
    }, [url]);

    return{
        responseJSON,
        isLoading,
        error
    };  
}
   

exports.useFetch = useFetch
