This project is run using lando.
Make sure that you have lando installed in the local
The .lando.yml is shared

Database is shared in the repo which can be imported using the cmd "lando db-import <db-name>"

To access the db, please make sure that the following code is added to the setting.php file:
$databases['default']['default'] = array (
  'database' => 'drupal10',
  'username' => 'drupal10',
  'password' => 'drupal10',
  'prefix' => '',
  'host' => 'database',
  'port' => '3306',
  'isolation_level' => 'READ COMMITTED',
  'driver' => 'mysql',
  'namespace' => 'Drupal\\mysql\\Driver\\Database\\mysql',
  'autoload' => 'core/modules/mysql/src/Driver/Database/mysql/',
);
Run the following cmd's after db-import successfully: 
lando drush updb
lando drush cim
lando drush cr

A view, naming product-list, is created in the project listing all the items with content type product and is displayed as a page on the url/products-list.

Gulp is used as the complier to complie scc into css.
