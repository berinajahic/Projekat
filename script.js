fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Services')
  .then(response => {
    return response.json();
  })
  .then(data => {
    renderService(data);
  })

const renderService = (services) => {
  const servicesRow = document.getElementById('service-row');
  let resultHtml = '';

  services.forEach(service => {
    resultHtml += `
       <div class="card col-4 mx-2 my-2" style="width: 18rem;">
            <img src= "${service.photoUrl}" class="card-img-top" alt="service">
             <div class="card-body">
                 <h5 class="card-title">${service.name}</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <button type="button" class="btn btn-primary" onclick="completeService(${service.id})">Complete</button>
                 <button type="button" class="btn btn-danger" onclick="deleteService(${service.id})">Delete</button>
                 <span class="badge bg-${service.isCompleted ? 'Done' : 'Not done'}">${service.isCompleted ? 'Completed' : 'Not completed'}</span>
             </div>
         </div>`;
  });

  servicesRow.innerHTML = resultHtml;
}
//Put updejta resurs na bekendu
// const completeBook = () => {
//   fetch('https://ptf-web-dizajn-2022.azurewebsites.net/books', {
//       method: 'PUT'
//     })
//     .then(res => {
//       console.log(res);
//     })
// }

const addService = () => {
   const serviceID = document.getElementById('service-id').value;
   const serviceName = document.getElementById('service-name').value;
   const servicePrice = document.getElementById('service-price').value;
   const serviceImage = document.getElementById('service-image').value;

   fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Services`, {
       method: 'POST',
       headers: new Headers({
         'content-type': 'application/json'
       }),
       body: JSON.stringify({

         id: serviceID,
         name: serviceName,
         price: servicePrice,
         image: serviceImage,

       })
   })
     .then(res => {
       console.log(res);
     })

 }

  const deleteService = (id) => {
      fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Services/${id}`, {
         method: 'DELETE'
     })
      .then(res => {
          console.log(res);
      })
  }
