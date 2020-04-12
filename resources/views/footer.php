<aside class="col-lg-3">

        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Rechercher un article..."
            aria-label="Rechercher un article..." aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Allez</button>
          </div>
        </div>

        <div class="card">
          <h3 class="card-header">À vous de jouer</h3>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"><a href ="./formulaire" >Ajouter un article</a></li>
          </ul>
        </div>


        <div class="card">
          <h3 class="card-header">Catégories</h3>
          <ul class="list-group list-group-flush">
            <?php foreach($allCategories as $currentCategory) : ?>
              <li class="list-group-item"><a href ="./category&ID=<?= $currentCategory->id ?>" ><?= $currentCategory->name ?></a></li>
            <?php endforeach ?>
          </ul>
        </div>

        <div class="card">
          <h3 class="card-header">Auteurs</h3>
          <ul class="list-group list-group-flush">
          <?php foreach($allAuthors as $currentAuthor) : ?>
            <li class="list-group-item"><a href ="./author&ID=<?= $currentAuthor->id ?>" ><?= $currentAuthor->name ?></a></li>
          <?php endforeach ?>
          </ul>
        </div>

      </aside>
    </div><!-- /.row -->


    <footer>

      <div class="row justify-content-center text-center">
        <div class="col-6 social-networks">
          <!-- Je créé une liste: https://getbootstrap.com/docs/4.1/components/list-group/ -->
          <ul class="list-inline">
            <li class="list-inline-item"><a href="#"><i class="fa fa-twitter-square"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fa fa-facebook-square"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fa fa-github-square"></i></a></li>
          </ul>
        </div>
      </div>

      <div class="row justify-content-center text-center">
        <div class="col-9 links">
          <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Nous contacter</a></li>
            <li class="list-inline-item"><a href="#">Qui sommes nous ?</a></li>
            <li class="list-inline-item"><a href="#">Mentions légales</a></li>
          </ul>
        </div>
      </div>

    </footer>

  </div> <!-- /.container -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
    integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous">
  </script>
</body>

</html>
