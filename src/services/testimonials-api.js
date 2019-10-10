const BASE_URL = '/api/testimonials';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(tes) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(tes)
  }).then(res => res.json());
}

export function update(tes) {
  return fetch(`${BASE_URL}/${tes._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(tes)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}

