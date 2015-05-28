A web application to show how HelpMe can be adapted to jQuery, this model was used to implement new structure for second version (code not publically available)

An additional constraint of the environment it will be run (in a kiosk app on a tablet) means the URL cannot be changed at all.

This means the application works in a slightly different way to normal jQuery single page applications.

Instead of changing the URL to navigate within a single page, the various HTML elements are controlled by a switch in the jQuery file.

This allows the content to be changed without a URL change. 

The status of the various tasks are tracked using the local browser storage (instead of in a session which would require server side interaction)