export function getKeyword() {
  const keywords = ['male', 'female'];
  const randomIdx = Math.floor(Math.random() + keywords.length - 1);
  return keywords.at(randomIdx);
}
