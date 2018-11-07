let items = [];
let newItem;

new Vue({
  el: '#list',
  data: {
    items,
    itemDescription: ''
  },
  methods: {
    removeItem
  }
})

new Vue({
  el: '#add',
  data: {
    newItem: ''
  },
  methods: {
    addItem
  }
})

function addItem() {
  items.push({ 
    id: `item-${items.length}`, 
    description: this.newItem,
    visible: true
  });
  this.newItem = '';
}

function removeItem(itemIndex) {
  items[itemIndex].visible = false;
}



