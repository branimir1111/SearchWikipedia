const urlFirst =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const urlSecond = 'http://en.wikipedia.org/?curid=';

export const app = (container, form, input, results) => {
  // fetching data
  const fetchArticles = async (searchValue) => {
    results.innerHTML = `<div class='loading'></div>`;
    try {
      const response = await fetch(`${urlFirst}${searchValue}`);
      const data = await response.json();
      const fetchData = data.query.search;
      if (fetchData.length < 1) {
        results.innerHTML = `<div class='error'>no matching results. Please try again</div>`;
        return;
      }
      renderResults(fetchData);
    } catch (error) {
      results.innerHTML = `<div class='error'>There was an error...</div>`;
    }
  };
  // submit request
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    if (!value) {
      results.innerHTML = `<div class='error'>Please provide valid search term!</div>`;
      return;
    }
    fetchArticles(value);
  });
  // render results
  const renderResults = (fetchData) => {
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

    results.innerHTML = `<div class="articles">${cardsList}</div>`;
  };
};
