Accounts.onCreateUser((options, user) => {
  if ( Meteor.settings.admins.indexOf(options.email) > -1 ) {
    user.roles = ['admin'];
  }
  return user
})


Meteor.publish('currentUser', function () {
  return Meteor.users.find({_id: this.userId}, {
    fields: {
      roles: 1
    }
  });
})


/* REF
 options = {
 email: '2@2.com',
 password: {
 digest: '4cc8f4d609b717356701c57a03e737e5ac8fe885da8c7163d3de47e01849c635',
 algorithm: 'sha-256'
 }
 }
 user = {
 createdAt: 'Wed Jun 07 2017 22:36:11 GMT-0400 (EDT)',
 _id: 'LzKmbwrBYEpmpsEyC',
 services: {password: {bcrypt: '$2a$10$msEjNHb27xNfZ62oRqQQ7uCyRaF.h7E4cxBJyreQ2vx1SZBpevzpe'}},
 emails: [{address: '2@2.com', verified: false}]
 }
 */