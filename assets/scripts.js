$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

const search = instantsearch({
  appId: 'BLHSU1VJ22',
  apiKey: 'c450c22d29f635ce83623a7147b80982',
  indexName: 'codebase',
  routing: true
});


search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-box',
      placeholder: 'Search for posts'
    })
);

search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        empty: '<div class="alert alert-danger" role="alert"> <strong>No results!</strong> Please try another term.</div>',
        item: '<article class="post-preview"> <a href="{{url}}"> <h2 class="post-title">{{title}}</h2><h3 class="post-subtitle">{{ subtitle }}</h3> <h3 class="post-subtitle">{{ description }}</h3></a><p class="post-meta">Post type: {{ type }}</p></article><hr>'
      },
      hitsPerPage: 5
    })
);

search.start();