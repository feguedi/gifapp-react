const getGifs = async (category) => {
    const api_key = 'zCtudgAhUOymBXkrwNmYwma8nYw56zgl'

    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${api_key}`
        const respuesta = await fetch(url)
        const {data} = await respuesta.json()
        const gifs = data.map(img => ({ id: img.id, title: img.title, url: img.images?.downsized_medium.url}))            
        console.log('gifs:', gifs)
        return gifs
    } catch (error) {
        return []
    }
}

export default getGifs
