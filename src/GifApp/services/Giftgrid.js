export const GiftgridService = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=NTvAuy9riMu2l5O1CFOTZXjQM0dLzkvk&q=${encodeURIComponent(category)}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title || 'No title',
      url: img.images.downsized_medium.url,
    }));

    return gifs;
};
