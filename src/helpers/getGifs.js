

    export const getGifs = async ( category ) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=5&api_key=9MOAWy0rMRZaY9jtq1SGd5J0ZwuODCSl`;
        const response = await fetch ( url );
        const { data } = await response.json();

        const gifs = data.map( d => {
            return {
                id: d.id,
                title: d.title,
                url: d.images?.downsized_medium.url
            }
        })
        
        return gifs;

    }