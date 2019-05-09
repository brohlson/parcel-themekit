const search = {
  init: () => {
    if (window.location.pathname === "/search") {
      $("#SearchInput").keyup(search.onSearch);
    }
  },
  onSearch: async e => {
    const query = e.target.value;
    const { results, count } = await search.getResults(query);
    const html = results.map(search.generateItemHtml).join("");
    $(".list-view-items")
      .empty()
      .append(html);
    search.updateSearchText(query, count);
  },
  updateSearchText: (query, count) => {
    $("h1").html(`
    <span class="visuallyhidden">Search result:</span>
    ${count} results for "${query}"
  `);
  },
  generateItemHtml: item => {
    return `
    <li class="list-view-item">
      <a href="/products/${item.handle}" class="list-view-item__link">
          <img class="list-view-item__image" src="${item.featured_image}">
          <div class="list-view-item__title">${item.title}</div>
          <span class="product-price__price">${item.price}</span>
      </a>
    </li>
  `;
  },
  getResults: query => $.getJSON(`/search?view=json&q=${query}`)
};
export default search;
