# Sprint6 : part 4/4

This project includes:

- Form validation
- esc key bindings for javascript

# Project 6 updated: Around The U.S.

### Overview

- Intro
- Figma
- Images
- javscript
- html
- added css

**Intro**

This project is made so all the elements are displayed correctly on popular screen sizes. We recommend investing more time in completing this project, since it's more difficult than previous ones.

**Figma**

project has been updated locally.

**Images**
here is an example ::
![Alt text](images/pictures/Screenshot_overview.png "aroundthewrold")

The way you'll do this at work is by exporting images directly from Figma — we recommend doing that to practice more. Don't forget to optimize them [here](https://tinypng.com/), so your project loads faster.

Good luck and have fun!

**AboutMe**

Hello my name is Joshua B. Zimmerman. This project is remake as I dumped the previous project and I needed to retry to completely understand what I was doing. I have built a design based on a FIGMA shared project, additionally I have improvised troubleshooting, testing and released this project on gitPages.

This project shows a usage of a shared FIGMA project ui file, containing both desktop projects, and mobile project with specific size settings, styling and resolutions. This is a project that is meant to represent an a example of a unifiied and dynamic website. This is to be used as a growing, and changing project thoughout the rest of class, more to come !!!!

To view this iteration of this first stage of the project: click here: https://zimmermanjosh.github.io/se_project_aroundtheus/

**Updates and Development**
this project revision is adding a scripts_folder to the project, additionally we are adding javascript (.js) to the project.
Project sprint 6
Dev Updates

- Step 1. Validating the "Edit Profile" Form
- if a field of the "Edit profile" form doesn't pass the validation, a red error message should be displayed underneath it
- Validation settings are as follows:Both fields are required.
  - The "Name" field must contain between 2 and 40 characters.
  - The "About" field must contain between 2 and 200 characters.
    Use the default error messages of the browser.
    If any field doesn't pass validation, the "Save" button should be inactive. If both fields pass validation, then they should be active. Use the colors from the design for the inactive buttons.
    Note that after adding a new card and reopening the modal window, a user can create an empty card. We need to make it unavailable for the user to do that. When opening a modal window, if you reset the values of the input fields, make sure to disable the save button and add the corresponding class to it.
- Step 2. Validating the "New Place" Form
- Validation settings are as follows: Both fields are required.
  - The "Title" field must contain between 1 and 30 characters.
  - The "Image URL" field must contain a URL.
  - Use the default error messages of the browser.
  - If any field doesn't pass validation, the "Save" button should be inactive. If both fields pass validation, then it should be active. Inactive button colors are the same as for the "Edit profile" form.
- Step 3. Closing the Popup by Clicking on the Overlay
  - Code a feature that allows the users to close the popup by clicking on the overlay, i.e. anywhere outside the popup's borders
- Step 4. Closing the Popup by Pressing Esc
  - Code a feature that allows the users to close the popup by pressing the Esc key.
