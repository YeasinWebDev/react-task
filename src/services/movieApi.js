const API_BASE_URL = "https://api.tvmaze.com";

async function request(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error("Unable to load shows right now.");
  }
  return response.json();
}

export function getShows() {
  return request("/shows");
}

export function searchShows(query) {
  return request(`/search/shows?q=${encodeURIComponent(query)}`);
}
