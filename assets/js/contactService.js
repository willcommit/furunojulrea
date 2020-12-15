
var westgrid = document.getElementById('westgrid')
var eastgrid = document.getElementById('eastgrid')
var southgrid = document.getElementById('southgrid')


const url = 'https://cms.furuno.se/furuno_new_cms/items/resellers?fields=*.*.*'

var Contacts = []

fetch(url)
  .then(response => response.json())
  .then(data => {

    data.data.forEach(element => {
      const Contact = {}
      Contact.name = element.name
      Contact.location = element.location
      Contact.coast = element.coast
      Contact.type = element.type
      Contact.phone = element.phone
      Contact.email = element.email
      Contact.webpage = element.webpage
      Contacts.push(Contact)
    });

    Contacts.forEach(contact => {
      const contactCard = document.createElement('div');
      var contactCardContent = `
                <div class="card-content">
                  <div class="text-container">
                    <div class="contact-details">
                      <p class="contact-name">${contact.name}</h4>
                      <div class="contact-location">Ort: ${contact.location}</div>
                      <p class="contact-type">${contact.type[0]}<br>${contact.type[1]}<br>${contact.type[2]}</p>

                      <p class="contact-phone">Tel: <a href="tel:${contact.phone}">${contact.phone}</a> </p>
                      
                      <p class="contact-email">Email: <a href="mailto:${contact.email}">${contact.email}</a> </p>
                      
                      <p class="contact-webpage">Hemsida: <a href="${contact.webpage}">${contact.webpage}</a></p>
                    </div>
                  </div>
                </div>
            `
      contactCard.classList.add("contact-card")
      contactCard.innerHTML = contactCardContent

      // if (!product.inStock) {
      //   productCard.children[0].classList.remove("ribbon-display")
      // }

      console.log(contact)

      contact.coast.forEach(element => {
        switch (element) {
          case "east":
            eastgrid.appendChild(contactCard)
            break;
          case "west":
            westgrid.appendChild(contactCard)
            break;
          case "south":
            sothgrid.appendChild(contactCard)
            break;
          default:
            break;
        }        
      });         
    })
  })
