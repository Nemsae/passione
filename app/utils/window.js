export function scrollIntoViewById(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
  });
}

export default {
  scrollIntoViewById,
};
