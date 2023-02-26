# JAVASCRIPT: Add drop-down sub-menu items to existing Menu items in HTML

This JS package will allow you to add "sub-menu" items to existing "menu" items in an existing html file

INSTALLATION

    npm i add-dropdown-submenus

ASSUMPTIONS:

    - Your HTML file has at least one menu item
    - Each menu item has been allocated an "id"

INSTRUCTIONS

In your project's app.js file:

    1. 'Import' the code from this package
    2. Add the function call "appSubMenu" - see example below:

    addSubMenu('events', 'Meetings', 'Socials', 'Online', 'Launches')

In the example above, 'events' is the 'id' attached to the 'EVENTS' menu item in your Html file.
Running the function, will move the remaining arguments, 'Meetings', 'Socials' etc as sub-menu items, under the "EVENTS" menu item
These sub-menu items will appear only when the user mouses over ‘EVENTS’ menu item in the browser
Mousing out will hide the sub-menu items

You will need separate function calls for each menu-item in your HTML file

VERSION 1.0.1

- Export command changed to 'export default'
