
 export const getGifs  = async( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=i6uh6c7NIY4a86OQkmAN4JOCL8jVBiDT&q=${ category }&limit=10`

    const resp  =  await fetch( url ) 
    const { data } =  await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_still.url

    })) 
    return gifs;
}