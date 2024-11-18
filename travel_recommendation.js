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

              for (let i = 0; i < condition0.cities.length; i++) {

                resultDiv.innerHTML += `<h2>${condition0.cities[i].name}</h2>`;
                resultDiv.innerHTML += `<img src="${condition0.cities[i].imageUrl}" alt="hjh">`;

                resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition0.cities[i].description}</p>`;
              }
            }

            const condition1 = data.temples;
            if (input.includes("temple")) {

              console.log(condition1.name, condition1.imageUrl, condition1.description);
              resultDiv.innerHTML += `<h2>${condition1[0].name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition1[0].imageUrl}" alt="hjh">`;
              resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition1[0].description}</p>`;

              resultDiv.innerHTML += `<h2>${condition1[1].name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition1[1].imageUrl}" alt="hjh">`;
              resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition1[1].description}</p>`;

            }

            const condition2 = data.beaches;
            if (input.includes("beach")) {

              resultDiv.innerHTML += `<h2>${condition2[0].name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition2[0].imageUrl}" alt="hjh">`;
              resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition2[0].description}</p>`;

              resultDiv.innerHTML += `<h2>${condition2[1].name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition2[1].imageUrl}" alt="hjh">`;
              resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition2[1].description}</p>`;

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

        function resetForm() {
          const resultDiv = document.getElementById('result');
          resultDiv.innerHTML = '';
        }

        btnClear.addEventListener('click', resetForm);
