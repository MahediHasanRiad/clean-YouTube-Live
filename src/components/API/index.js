import axios from "axios";

const key = import.meta.env.VITE_API_KEY;

const getPlaylistItem = async ( playlistId, pageToken = '', result = [] ) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=50&playlistId=${playlistId}&key=${key}&pageToken=${pageToken}`;

  try {
    const { data } = await axios.get(URL);
    result = [...result, ...data.items]    

    if(data.nextPageToken){
        result = await getPlaylistItem(playlistId, data.nextPageToken, result)
    }

    result = result.map(item => {
        const { title, description, resourceId: { videoId }, thumbnails: { medium } } = item.snippet

        return {
            playlistId,
            title,
            description,
            videoId,
            thumbnail: medium
        }
    })
    return result

  } catch (error) {
    console.log(
      "Error",
      error.response?.data?.error?.message || "Something went wrong"
    );
    return []
  }
};



const getPlaylist = async (playlistId) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails%2Csnippet&id=${playlistId}&key=${key}`

    try {
        const { data } = await axios.get(URL)
        const playlistItems = await getPlaylistItem(playlistId)
    
        const { title, description, thumbnails: { medium } } = data.items[0].snippet
    
        return {
            playlistTitle: title,
            playlistDescription: description,
            playlistThumbnail: medium,
            playlistItems
        }
    } catch (error) {
        console.log('Error', error)
    }
}

export default getPlaylist;
