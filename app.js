const urlFirst =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=10&format=json&origin=*&srsearch=';

const urlSecond = 'http://en.wikipedia.org/?curid=';

export const app = (form, input, results, total) => {
  // fetching data
  const fetchArticles = async (searchValue) => {
    results.innerHTML = `<div class='loading'></div>`;
    try {
      const response = await fetch(`${urlFirst}${searchValue}`);
      const data = await response.json();
      console.log(data);
      const numOfItems = data.query.searchinfo.totalhits;
      const fetchData = data.query.search;
      if (fetchData.length < 1) {
        total.innerHTML = null;
        results.innerHTML = `<div class='error'>no matching results. Please try again</div>`;
        return;
      }
      renderResults(fetchData, numOfItems);
    } catch (error) {
      total.innerHTML = null;
      results.innerHTML = `<div class='error'>There was an error...</div>`;
    }
  };
  // submit request
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    if (!value) {
      total.innerHTML = null;
      results.innerHTML = `<div class='error'>Please provide valid search term!</div>`;
      return;
    }
    fetchArticles(value);
  });
  // render results
  const renderResults = (fetchData, numOfItems) => {
    const cardsList = fetchData
      .map((item) => {
        const { title, snippet, pageid } = item;
        return `
          <a href='${urlSecond}${pageid}' target='_blank'>
           <h4>${title}</h4>
           <p>${snippet}t</p>
          </a>
         `;
      })
      .join('');
    total.innerHTML = `<div id='total'><p><strong>${numOfItems}</strong> results found</p></div>`;
    results.innerHTML = `<div class="articles">${cardsList}</div>`;
  };
};
