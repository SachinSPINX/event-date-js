function() {
  var date = new Date();
  var year = date.getUTCFullYear();
  var month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  var day = String(date.getUTCDate()).padStart(2, '0');
  var hours = String(date.getUTCHours()).padStart(2, '0');
  var minutes = String(date.getUTCMinutes()).padStart(2, '0');
  var seconds = String(date.getUTCSeconds()).padStart(2, '0');
  
  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}
