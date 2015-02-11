function redacted(options){
  var _d = document,
      _w = window;
  var niceman = ['love','enjoy','cuddle','hug','smile','entertain','care','hold close','bake cookes','bunnies',
    'cheerful','charming','enchanting','good','happy','harmonious','jolly','joyous',
    'kind-hearted','proud','romantic','righteous','silly','talented','warm','skillful','witty','wonderful'];
  var choseone = niceman[Math.floor(Math.random() * niceman.length)];
  options = options || {};
  options.root = options.root || 'body';
  options.color = options.color || '#f00';
  options.list = options.list || ['fuck', '[^cl]ass', 'shit', 'bitch', 'fag', 'dyke', 
    'tranny', 'cunt',  'rape', 'murder', 'tits', 'piss', 'pussy', 'dick', 'cock', 
    'nigger', 'spic', 'cracker', 'coon', 'dago', 'damn', 'gook', 'heeb', 'dike',
    'homo', 'kike', 'jizz', 'kyke', 'mick', 'muff', 'paki', 'poon', 'slut', 
    'retard','twat','wank', 'cum', 'splooge', 'nigga'];
  var newStyle = _d.createElement('style'),
      style = _d.createTextNode('.redacted{color:'+'#000'+
      ';background-color:'+options.color+';padding: 3px;}');
      parentNode = _d.head;
  newStyle.appendChild(style);
  parentNode.insertBefore(newStyle, parentNode.querySelector('link'));
  var root = _d.querySelector(options.root);
  var regex = new RegExp(options.list.join('|'), 'ig');
  root.innerHTML = root.innerHTML.replace(regex, '<mark class="redacted">'+choseone+'</mark>');
};
