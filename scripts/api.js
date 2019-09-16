'use strict';

const api = (function () {
  const BASE_URL = ('https://thinkful-list-api.herokuapp.com/seankc');

  let getItems = function() {
      console.log(BASE_URL + '/items');
      return(fetch(BASE_URL + '/items'));
  };

  let createItem = function(name) {
    let newItem = {
        'name': name
    };
    return(fetch(BASE_URL + '/items', {
        method: 'POST',
        headers: new Headers ({
            'Content-Type':'application/json'
        }),
        body: JSON.stringify(newItem)
    }));
  };

  let updateItem = function(id, updateData) {
      let formattedData = JSON.stringify(updateData);
    return (fetch(BASE_URL + '/items/' + id, {
        method: 'PATCH',
        headers: {'Content-Type':'application/json'},
        body: formattedData
    }));
  };

  let deleteItem = function(id) {
    return (fetch(BASE_URL + '/items/' + id, {
        method: 'DELETE',
        body: JSON.stringify(id)
    }));
  };



  return {
    getItems:getItems,
    createItem:createItem,
    updateItem:updateItem,
    deleteItem:deleteItem
  };
})();