<?php include __DIR__. '/header.php'; ?>

<div class="container">
    <div class="row">
      <main class="col-lg-9">

        <?php foreach($allPosts as $currentPost) : ?>
        <article class="card">
          <div class="card-body">
            <h2 class="card-title"><a href="./article&ID=<?= $currentPost->id ?>"><?= $currentPost->title ?></a></h2>
            <p class="card-text"><?= $currentPost->resume ?></p>
            <p class="infos">
              Posté par <a href="./author&ID=<?= $currentPost->author_id ?>" class="card-link"><?= $currentPost->author->name?></a> le <time datetime="<?= $currentPost->published_date ?>"><?= date('d/m/Y', strtotime($currentPost->published_date)) ?></time> dans <a href="./category&ID=<?= $currentPost->category_id ?>"
                class="card-link">#<?= str_replace(' ' , '' , $currentPost->category->name) ?></a>
            </p>
          </div>
        </article>
        <?php endforeach ?>

        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-between">
            <li class="page-item"><a class="page-link" href="#"><i class="fa fa-arrow-left"></i> Précédent</a></li>
            <li class="page-item"><a class="page-link" href="#">Suivant <i class="fa fa-arrow-right"></i></a></li>
          </ul>
        </nav>
      </main>
      <?php include __DIR__. '/footer.php'; ?>
