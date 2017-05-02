import {Mongo} from 'meteor/mongo'

const Items = new Mongo.Collection('items');

Meteor.methods({
  insertNewItem(itemOne, itemTwo){
    check(itemOne, String);
    check(itemTwo, String);
    Items.insert({
      itemOne: {
        text: itemOne,
        value: 0
      },
      itemTwo: {
        text: itemTwo,
        value: 0
      }
    })
  },
  voteOnItem(item, position) {
    if(Meteor.userId()){
      if(position==='itemOne'){
        Items.update(item._id, {
          $inc: {
            'itemOne.value': 1
          }
        })
      } else if(position==='itemTwo'){
        Items.update(item._id, {
          $inc: {
            'itemTwo.value': 1
          }
        })
      }
    }else{
      console.log('You need to login!')
    }
  }
});

export default Items
