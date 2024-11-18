    const btnSearch = document.getElementById('btnSearch');
    function searchCondition() {
        const input = document.getElementById('conditionInput').value.toLowerCase();
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

        fetch('./travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
            console.log('data:', data);
            const condition0 = data.countries.find(item => item.name.toLowerCase().includes(input));

            if (condition0) {
              console.log(condition0);
              const L = condition0.cities.length;
              const R = Math.floor(Math.random() * (L + 1));
              console.log("length:", L, "Selected:", R);
              resultDiv.innerHTML += `<h2>${condition0.cities[R].name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition0.cities[R].imageUrl}" alt="hjh">`;

              resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition0.cities[R].description}</p>`;
            }

            const condition1 = data.temples.find(item => item.name.toLowerCase().includes(input));
            if (condition1) {

              console.log(condition1.name, condition1.imageUrl, condition1.description);
              resultDiv.innerHTML += `<h2>${condition1.name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition1.imageUrl}" alt="hjh">`;

              resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition1.description}</p>`;
            }

            const condition2 = data.beaches.find(item => item.name.toLowerCase().includes(input));
            if (condition2) {

              resultDiv.innerHTML += `<h2>${condition2.name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition2.imageUrl}" alt="hjh">`;

              resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition2.description}</p>`;
            }

            if (!condition0 && !condition1 && !condition2){
              resultDiv.innerHTML = 'Location not found.';
            }
          })
          .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
          });
      }
        btnSearch.addEventListener('click', searchCondition);
