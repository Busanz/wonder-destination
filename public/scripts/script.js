export const showListItem = (title, arr) => {
  return `
    <div class="main_place_list">
      <h3>${title}</h3>
      ${arr.map((item) => `<p class="main_place_list-item"><span>🔹 </span>${item}</p>`).join('')}
    </div>
  `;
};

export const convertFirstLetterCapital = (str) => {
  const capitalized =
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() + ` page`;
  return capitalized;
};
