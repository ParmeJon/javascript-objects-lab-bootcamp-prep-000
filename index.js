var recipe = {};

function updateObjectWithKeyAndValue (object, key, value) {
  object.assign ({}, object,{ [key]:value } )
}