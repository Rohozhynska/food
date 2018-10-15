class ReceptList {
    constructor (receptsUrl, renderContainer) {
        
        fetch(receptsUrl)
            .then(result => result.json() )
            .then(recepts => {
                this.recepts = recepts;
                this.renderRecepts(renderContainer, recepts);
                this.addEventListeners();
            })
    }
    getReceptById(id) {
        return this.recepts.find(el => el.id === id);
    }
    renderRecepts(container, recepts) {
        let receptListDomString = ''
        recepts.forEach(recept => {
            receptListDomString += 
                `<div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                  <div class="card recept">
                  <div class="recept_img">
                    <img class="card-img-top" src="img/recepts/${recept.image}" 
                        alt="${recept.title}">
                </div>
                    <div class="card-body">
                      <h4 class="card-title">${recept.title}</h4>
                    <div class="card-description">${recept.description}</div>
                     <div class="more">
                     
                      <button class="btn btn-info" data-toggle="modal"
                        data-target="#receptInfoModal" data-id="${recept.id}">ДЕТАЛЬНІШЕ
                      </button>
                      </div>
                    </div>
                  </div>
                </div>`;
        });
        container.html(receptListDomString);
    }
    addEventListeners() {
        $('#receptInfoModal').on('show.bs.modal', event => {
            const button = $(event.relatedTarget); // Button that triggered the modal
            const id = String(button.data('id')); // Extract info from data-* attributes
            const recept = this.getReceptById(id);
            const modal = $('#receptInfoModal');
            modal.find('.modal-body .card-img-top')
                .attr('src', 'img/recepts/'+recept.image)
                .attr('alt', recept.title);
            modal.find('.modal-body .card-text').text(recept.description);
            modal.find('.modal-header .card-title').text(recept.title);
         });
       
    }

    
}
