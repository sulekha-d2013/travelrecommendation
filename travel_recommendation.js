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

            let C0 = 0;
            let C1 = 0;
            let C2 = 0;

            if (condition0 && input.length > 0) {
              console.log(condition0);
              C0 = 1;
              for (let i = 0; i < condition0.cities.length; i++) {

                resultDiv.innerHTML += `<h2>${condition0.cities[i].name}</h2>`;
                resultDiv.innerHTML += `<img src="${condition0.cities[i].imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition0.cities[i].description}</p>`;
              }
            }

            if (C0 === 0 && input.includes("countr"))
            {
                const condition0 = data.countries;
                const L = condition0.length;
                const R0 = Math.floor(Math.random() * L);
                const R1 = (R0 + 1)%L;

                resultDiv.innerHTML += `<h2>${condition0[R0].cities[0].name}</h2>`;
                resultDiv.innerHTML += `<img src="${condition0[R0].cities[0].imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition0[R0].cities[0].description}</p>`;

                resultDiv.innerHTML += `<h2>${condition0[R1].cities[0].name}</h2>`;
                resultDiv.innerHTML += `<img src="${condition0[R1].cities[0].imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition0[R1].cities[0].description}</p>`;

            }

            const condition1 = data.temples;
            if (input.includes("temple")) {
              C1 = 1;
              resultDiv.innerHTML += `<h2>${condition1[0].name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition1[0].imageUrl}" alt="hjh">`;
              resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition1[0].description}</p>`;

              resultDiv.innerHTML += `<h2>${condition1[1].name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition1[1].imageUrl}" alt="hjh">`;
              resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition1[1].description}</p>`;

            }

            const condition2 = data.beaches;
            if (input.includes("beach")) {
              C2 = 1;
              resultDiv.innerHTML += `<h2>${condition2[0].name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition2[0].imageUrl}" alt="hjh">`;
              resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition2[0].description}</p>`;

              resultDiv.innerHTML += `<h2>${condition2[1].name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition2[1].imageUrl}" alt="hjh">`;
              resultDiv.innerHTML += `<p><strong>Description:</strong> ${condition2[1].description}</p>`;

            }

            if (C0 === 0 && C1 === 0 && C2 === 0){
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
