# tareasy
The **tareasy** is a powerful Node.js package designed to simplify the creation of utility-based CSS files, specifically tailored for crafting responsive layouts using grids and flex. This tool automates the generation of CSS rules for custom padding, margins, gaps, colors, buttons, and gradients, offering developers a convenient and efficient way to incorporate consistent and visually appealing styles into their projects. Whether you're working on a web application, website, or any other front-end project, the Utility CSS Generator provides a seamless experience, allowing users to effortlessly customize and fine-tune their styles with minimal effort. With a user-friendly command-line interface (CLI) and a flexible Node.js API, this package accommodates diverse workflows, making it a valuable asset for developers seeking to enhance the design and responsiveness of their applications


# Installation

To install you have to run the command in  your new project as
```
npm i tareasy
```

## What you get from Tareasy

With our package you are able to construct a full utility css sheets that are enough to make any design layout that you want to make
you can generate these utility files
```

 - import file
 - root styles sheet
 - flex design sheet
 - grid design sheet
 - margins design sheet
 - padding design sheet
 - gaps design sheet
 - color design sheet
 - gradient design sheet
 - button design sheet

```

##  How to use
It is a CLI package so first we have to install the package
```JavaScript 
npm i tareasy
```
to initiate the package
run these commands
```
node node_modules/tareasy/UI.js
```

it will initiate the package and loads a folder name as Utility-UI
and loads 2 more csss files init named as root.css and import.css

now to make the individuals design files we have to run seperate CLI commands
these commands are given below
```
node node_modules/tareasy/UI.js 'flex'
node node_modules/tareasy/UI.js 'grid'
node node_modules/tareasy/UI.js 'margins'
node node_modules/tareasy/UI.js 'pads'
node node_modules/tareasy/UI.js 'gaps'
node node_modules/tareasy/UI.js 'color'
node node_modules/tareasy/UI.js 'btns'
node node_modules/tareasy/UI.js 'grads'

```

## Instructions for grids
when we run grid command the CLI as you to entre the column count that is needed to addning `grid-template-colums and grid-template-rows` properties type the appropriate number say 10 as per the requirement

## Instructions for margins, pads, gaps
when we run command for these in the CLI as you have to entre the count for it as 100 then you have to add the step change for the property and then finally you have to add the units to add in the padding, margins and gaps we can add any unit say `pixel-px, rem, em, vh etc` .

## Instructions for colors
When you run CLI command for color the CLI as for you to entre the color hex codes you can entre any number of hex codes but in a specific manner, because the CLI generated css variabes for your hex codes and you get 10 shades and tint for each of your hex code
```
entre hex code as follow
#hexcode-variable_name,#hexcode-variable-name
e.g -- #er77d8-primary,#gty748-secondary
```

## Instructions for gradients
When you run CLI for gradients the CLI as you to entre how much gradients you want to add as 10, then CLI add 10 different gradient pairs to the style sheet

## Instruction for button
we have 10 differnt kind of utility buttons that we can sue in our project, the CLI ask which button you want to add in utility add any number from 1-10 and the that respective button is added to you project
```
```
The CLI adds classes in your style sheets and now you can easily use these Utility classes and build almost any type of UI layout.

### About Author
author - Tarsem singh

linkedin - https://www.linkedin.com/in/tarsem-singh-a57022204/
