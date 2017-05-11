const Models = require('../lib/core');
const $Topic = Models.$Topic;

exports.get = function* () {
  const tab = this.query.tab;
  const p = this.query.p || 1;

  yield this.render('index', {
    topics: $Topic.getTopicsByTab(tab, p)
  });
};
