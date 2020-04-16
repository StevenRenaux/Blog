let app = {

    // Propriété pour ne pas avoir à taper la base url
    apiBaseUrl : "http://localhost:8080",
    // Propritété contenant le nom des catégories
    categoriesList: [],
    // Propritété contenant le nom des auteurs
    authorList : [],

    init: function(){
        //console.log('app.init');

        //Méthode chargeant les catégories
        app.loadCategories();

        //Méthode chargeant les auteurs
        app.loadAuthors();

        //Méthode chargeant les posts (articles)
        app.loadPosts();

    },
    //Méthode chargeant les catégories
    loadCategories: function(){

        let fetchOptions = {
            // La méthode HTTP (GET, POST, etc.)
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };

        request = fetch(app.apiBaseUrl + '/categories', fetchOptions);

        request.then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(jsonResponse) {
                //console.log(jsonResponse);

                // On remplit notre propriété app.categoriesList avec id et name de chaque catégorie
                for (let i = 0; i < jsonResponse.length ; i++) {
                    let currentCategory = jsonResponse[i];
                    app.categoriesList[currentCategory.id] = currentCategory.name;
                }

                //Prise du ul de la Nav
                let ulElement = document.querySelector('.navbar-nav');

                //Prise du ul du Aside
                let ulAsideElement = document.querySelectorAll('.list-group-flush')[0];

                for(let i = 0 ; i < jsonResponse.length ; i++){
                    //POUR LA NAV
                    // Création de li qui s'incoporera dans le ul de la nav
                    let liElement = document.createElement('li');
                    liElement.classList.add('nav-item');

                    // Création de balises a qui s'incoporera dans le li ci-dessus
                    let aElement = document.createElement('a');
                    aElement.classList.add('nav-link');
                    aElement.setAttribute('href' , '#');

                    //POUR LE ASIDE catégories
                    // Création de li qui s'incoporera dans le ul du Aside
                    let liAsideElement = document.createElement('li');
                    liAsideElement.classList.add('list-group-item');

                    // Création de balises a qui s'incoporera dans le li ci-dessus
                    let aAsideElement = document.createElement('a');
                    aAsideElement.classList.add('list-group-link-category');
                    aAsideElement.setAttribute('href' , '#');

                    let currentCategory = jsonResponse[i];
                    // injection du nom de la catégorie, de son data-category-id et data-category sur chaque balises a
                    aElement.textContent = currentCategory.name;
                    aElement.dataset.categoryId = currentCategory.id;
                    aElement.dataset.category = currentCategory.name;

                    aAsideElement.textContent = currentCategory.name;
                    aAsideElement.dataset.categoryId = currentCategory.id;
                    aAsideElement.dataset.category = currentCategory.name;
                    // injection des balises a dans son li respectif
                    liElement.appendChild(aElement);
                    liAsideElement.appendChild(aAsideElement);
                    // injection des li dans le DOM en tant qu'enfant des ul 
                    ulElement.appendChild(liElement);
                    ulAsideElement.appendChild(liAsideElement);
                }

                //Mise sur écoute des boutons de catégories se trouvant dans la nav (Méthode pour filtrer les artciles selon une catégorie)
                let filterNavCategoryButton = document.querySelectorAll('.nav-link');
                for(let i = 0 ; i < filterNavCategoryButton.length ; i++){
                //console.log(filterCategoryButton[i])
                filterNavCategoryButton[i].addEventListener('click' , app.handleClickButtonForCategory);
                }

                //Mise sur écoute des boutons de catégories se trouvant dans le Aside (Méthode pour filtrer les articles selon une catégorie)
                let filterAsideCategoryButton = document.querySelectorAll('.list-group-link-category');
                for(let i = 0 ; i < filterAsideCategoryButton.length ; i++){
                //console.log(filterAsideCategoryButton[i])
                filterAsideCategoryButton[i].addEventListener('click' , app.handleClickButtonForCategory);
                }
            }
        );

    },
    //Méthode chargeant les auteurs
    loadAuthors: function(){
        let fetchOptions = {
            // La méthode HTTP (GET, POST, etc.)
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };

        request = fetch(app.apiBaseUrl + '/authors', fetchOptions);

        request.then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(jsonResponse) {
                //console.log(jsonResponse);

                // On remplit notre propriété app.authorList avec id et name de chaque auteur
                for (let i = 0; i < jsonResponse.length ; i++) {
                    let currentAuthor = jsonResponse[i];
                    app.authorList[currentAuthor.id] = currentAuthor.name;
                }

                //Prise du ul du Aside
                let ulAsideElement = document.querySelectorAll('.list-group-flush')[1];

                for(let i = 0 ; i < jsonResponse.length ; i++){
                    // Création de li qui s'incoporera dans le ul du Aside
                    let liAsideElement = document.createElement('li');
                    liAsideElement.classList.add('list-group-item');

                    // Création de balises a qui s'incoporera dans le li ci-dessus
                    let aAsideElement = document.createElement('a');
                    aAsideElement.classList.add('list-group-link-author');
                    aAsideElement.setAttribute('href' , '#');

                    let currentAuthor = jsonResponse[i];
                    // injection du nom de la catégorie et de son data-category_id sur chaque balises a
                    aAsideElement.textContent = currentAuthor.name;
                    aAsideElement.dataset.author = currentAuthor.name;
                    aAsideElement.dataset.authorId = currentAuthor.id;
                    // injection des balises a dans son li respectif

                    liAsideElement.appendChild(aAsideElement);
                    // injection des li dans le DOM en tant qu'enfant de ul 

                    ulAsideElement.appendChild(liAsideElement);
                }

                //Mise sur écoute des boutons auteurs se trouvant dans le Aside (Méthode pour filtrer les articles selon un auteur)
                let filterAsideAuhtorButton = document.querySelectorAll('.list-group-link-author');
                for(let i = 0 ; i < filterAsideAuhtorButton.length ; i++){
                //console.log(filterAsideAuhtorButton[i])
                filterAsideAuhtorButton[i].addEventListener('click' , app.handleClickButtonForAuthor);
                }
            }
        );
    },
    //Méthode chargeant les posts (articles)
    loadPosts: function(){
        let fetchOptions = {
            // La méthode HTTP (GET, POST, etc.)
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };

        request = fetch(app.apiBaseUrl + '/posts', fetchOptions);

        request.then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(jsonResponse) {
                //console.log(jsonResponse);

                for(let i = 0 ; i < jsonResponse.length ; i++){
                    let currentPost = jsonResponse[i];
                    //console.log(currentPost);

                    let id = currentPost.id;
                    let title = currentPost.title;
                    let resume = currentPost.resume;
                    let content = currentPost.content;
                    let authorId = currentPost.author_id
                    let author = currentPost.author.name;
                    // méthode .split pour ne garder que la date 
                    let publishDate = currentPost.published_date.split(' ' , 1);
                    let categoryId = currentPost.category_id;
                    // méthode .replace pour ne pas avoir d'espace et pouvoir faire (#MaVieDeDev)
                    let category = currentPost.category.name.replace(/ /gi , '');

                    // Méthode permettant de créer chaque articles
                    app.createPost(id, title, resume, content, authorId, author, publishDate, categoryId, category);
                }

            }
        );
    },
    // Méthode permettant de créer chaque articles en partant de loadPosts()
    createPost: function(id, title, resume, content, authorId, author, publishDate, categoryId, category){
        let newPostElement = document.getElementById('postTemplate').content.cloneNode(true);
        //console.log(newPostElement);

        //Personnalisation de l'article
        newPostElement.querySelector('.card').setAttribute('data-id' , id);
        newPostElement.querySelector('.card').setAttribute('data-category-id' , categoryId);
        newPostElement.querySelector('.card').setAttribute('data-category' , category);
        newPostElement.querySelector('.card').setAttribute('data-author-id' , authorId);

        newPostElement.querySelector('.card-title a').textContent = title;

        newPostElement.querySelector('.card-text').textContent = resume;

        newPostElement.querySelector('.infos a').textContent = author;
        newPostElement.querySelector('.infos a').setAttribute('data-author-id' , authorId);
        newPostElement.querySelector('.infos a').setAttribute('data-author' , author);

        newPostElement.querySelector('.infos time').setAttribute('datetime' , publishDate);
        newPostElement.querySelector('.infos time').textContent = publishDate;

        newPostElement.querySelectorAll('.card-link')[1].textContent = '#' + category;
        newPostElement.querySelectorAll('.card-link')[1].setAttribute('data-category-id' , categoryId);
        newPostElement.querySelectorAll('.card-link')[1].setAttribute('data-category' , category);

        //Mise sur écoute du bouton de catégorie sous l'article (Méthode pour filtrer les artciles selon une catégorie)
        let filterCategoryButton = newPostElement.querySelectorAll('.card-link')[1];
        filterCategoryButton.addEventListener('click' , app.handleClickButtonForCategory);

        //Mise sur écoute du bouton de l'auteur sous l'article (Méthode pour filtrer les artciles selon un auteur)
        let filterAuthorButton = newPostElement.querySelector('.infos a');
        filterAuthorButton.addEventListener('click' , app.handleClickButtonForAuthor);

        let parentPostElement = document.getElementById('container_posts');
        parentPostElement.prepend(newPostElement);
    },
    // Méthode pour filtrer les articles selon une catégorie
    handleClickButtonForCategory: function(evt){
        //console.log('filtre catégorie');
        let filterButton = evt.currentTarget;

        //console.log(filterButton.dataset.categoryId);
        //console.log(app.categoriesList.indexOf(filterButton.dataset.category , 1));

        if(filterButton.dataset.categoryId == app.categoriesList.indexOf(filterButton.dataset.category)){
            //console.log('Teamfront')
            app.getPostsOnNoneDisplay();

            let postElement = document.querySelectorAll('.card-post');
            for(let i = 0 ; i < postElement.length ; i++){
                if(postElement[i].dataset.categoryId === filterButton.dataset.categoryId){
                    postElement[i].style.display = "block";
                }
            }
        }
    },
    // Méthode pour filtrer les articles selon un auteur
    handleClickButtonForAuthor: function(evt){
        //console.log('filtre catégorie');
        let filterButton = evt.currentTarget;

        //console.log(filterButton.dataset.authorId);
        //console.log(app.authorList.indexOf(filterButton.dataset.author));

        if(filterButton.dataset.authorId == app.authorList.indexOf(filterButton.dataset.author)){
            //console.log('Teamfront')
            app.getPostsOnNoneDisplay();

            let postElement = document.querySelectorAll('.card-post');
            for(let i = 0 ; i < postElement.length ; i++){
                if(postElement[i].dataset.authorId === filterButton.dataset.authorId){
                    postElement[i].style.display = "block";
                }
            }
        }
    },
    // Méthode lié à la méthode handleClickButtonForCategory() et handleClickButtonForAuthor() pour passer tout les posts en display none
    getPostsOnNoneDisplay: function(){
        // On récupère tout les posts et on les passe à display none
        let postElement = document.querySelectorAll('.card-post');
        //console.log(taskElements);
        for(let i = 0 ; i < postElement.length ; i++){
            postElement[i].style.display = "none";
        }
    }
}

// On veut exécuter app.init une fois que la page chargée
document.addEventListener('DOMContentLoaded', app.init);