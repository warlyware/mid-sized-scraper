const Xray = require('x-ray');
const xray = Xray({
  filters: {
    trim: (value) => typeof value === 'string' ? value.trim() : value
  }
});

xray('https://medium.com/tag/react/', '.postArticle', [{
  title: 'h4',
  author: '.postMetaInline-authorLockup a:nth-child(1)',
  publication: '.postMetaInline-authorLockup a:nth-child(2)',
}])
.paginate('.nav-previous a@href')
.limit(3)
.write('results.json');