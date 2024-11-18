    const btnSearch = document.getElementById('btnSearch');
    function searchCondition() {
        const input = document.getElementById('conditionInput').value.toLowerCase();
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

        fetch('./travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
            console.log('data:', data);
            const condition = data.conditions.find(item => item.name.toLowerCase() === input);

            if (condition) {

              resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

              resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition.description}</p>`;
            } else {
              resultDiv.innerHTML = 'Location not found.';
            }
          })
          .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
          });
      }
        btnSearch.addEventListener('click', searchCondition);
