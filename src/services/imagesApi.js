import axios from 'axios';

export async function fetchImages (searchQuery, page) {
  const params = new URLSearchParams ({
    key: '31409515-1e05b025820d8f08d6d70aee0',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page,
  });

  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  return response.data;
}
