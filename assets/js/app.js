

fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9c458eabb6c442628b29700defb2ee83")
    .then(resp => resp.json())
    .then(myDate => {

        console.log(myDate.articles);
      myDate.articles.map(function(val) {
                 console.log(val);

                 const _shop = document.createElement('figure')

        _shop.classList.add('col-12','px-0', 'align-items-center', 'row', 'justify-content-center','overflow-hidden','mx-2', 'mx-0', 'col-md-6', 'col-lg-3')
        _shop.innerHTML = `
        
        <div class=" position-relative ">
        <img class="" src="${val.urlToImage}" alt="">

        <figcaption class="col-12">
            <div class=" position-absolute ps-4">
                <span class="d-flex mt-3">${val.source.name}</span>
                <span class="d-flex mt-3">${val.author}</span>
                <span class="d-flex mt-3">${val.source.id}</span>
                <span class="d-flex mt-3">${val.publishedAt}</span>
                <a class="position-absolute" href="#"> view Portfolio</a>
            </div>
           
        </figcaption>
       
    </div>
    <h3 class="text-center p-2">${val.title}</h3>
    <p class="text-center p-2">${val.content}</p>
    
    <a class="d-flex justify-content-center align-items-center" href="${val.url}" target="_blank">more</a>
    
        
        `
        document.getElementById('contant').appendChild(_shop)
       })
 
    })

/* 



 /* const _shop = document.createElement('figure')

        _shop.classList.add('col-12','px-0','overflow-hidden','border','mx-2', 'mx-0', 'col-md-6', 'col-lg-3')
        _shop.innerHTML = `
        
        <div class=" position-relative">
        <img class="" src="${val.image}" alt="">

        <figcaption class="col-12">
            <div class="col-12 position-absolute ps-4">
                <span class="d-flex mt-3">$${val.price}</span>
                <span class="d-flex mt-3">${val.category}</span>
                <span class="d-flex mt-3">${val.rating.rate} 56</span>
                <span class="d-flex mt-3">${val.rating.count} 90</span>
                <span class="d-flex mt-3">Hair red</span>
                <span class="d-flex mt-3">Eyes brown</span>
                <span class="d-flex mt-3">Hair 38</span>

                <a class="position-absolute" href="#"> view Portfolio</a>
            </div>
            
        </figcaption>

    </div>
    <p class="text-center p-2">${val.title}</p>
        
        `
        document.getElementById('contant').appendChild(_shop) */