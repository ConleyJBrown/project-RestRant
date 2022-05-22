# Project REST-Rant

REST-Rant is an app where users can review restaurants.

Here are the various routes which I intend to create for this app
| Method | Path                    | Purpose                                       |
| :---   |    :----:               |          ---:                                 |
| GET    |  /                      |  Home Page                                    |
| GET    | /places                 | Places index Page                             |
| POST   | /places                 | Create New place                              |
|GET     | /places/new             | Form page for creating a new place            |
|GET     | /places/:id             | Details about a particular place              |
|PUT     | /places/:id             | Update a particular place                     |
|GET     | /places/:id/edit        | Form page for editing an existing place       |
|DELETE  | /places/:id             | Delete a particular place                     |
|POST    | /places/:id/rant        | Create a rant about a particular place        |
|DELETE  | /places/:id/rant/:rantid| Delete a rant about a particular place        |
|GET     | *                       | 404 page (matches any route not defined above)|


Places data: Places will include the following data:
    -name    (string)
    -city    (string)
    -state   (string)
    -cusines (string)
    -pic     (string)