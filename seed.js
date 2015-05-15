var tasks = require('./tasks/index').list
    task = process.argv.slice(2)[0];

switch (task) {
  case tasks[0]: 
    task = require('./tasks/stations')
    break;
  case tasks[1]:
    task = require('./tasks/trips')
    break;
  case tasks[tasks.length - 1]:
    console.log('Wiping database')
    tasks.forEach(function(e, i) {
      console.log(e)
      if (i != tasks.length) {
        Mongoose.connection.collections['trips', 'stations'].drop( function(err) {
          console.log('collection dropped');
        });
      }
    })
    break;
  default:
    console.log('Valid commands: ' + tasks)
    break;
}

task();