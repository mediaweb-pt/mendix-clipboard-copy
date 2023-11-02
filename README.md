## ClipboardCopy
The Copy Clipboard widget empowers you to easily allow the end user to copy text to their system clipboard with just a click. You have three variations of the component, a Area where you can define the content that exist inside the widget, a Button where you can define the text, icon and style for the button and a Link where you can define the text and icon. All three variations include a customizable tooltip through the properties tab that greatly enhances the communication with the end user. Besides all these option you can further customize the component by adding custom classes is the styling tab.
Developed with the usage of the [React-Tooltip v.5](https://react-tooltip.com/). 

## Features

The widget has 3 variations although some properties are common as seen bellow (separated as in Mendix Studio Pro):

### General:

- **"String to Copy" (Expression - String)**: This is the string that is going to be copied into the clipboard

### Tooltip:

- **"Show Tooltip" (Boolean)**: This defines if the tooltip is shown.
- **"Text Before Copy" (Expression - String)**: Defines the text that is shown in the tooltip before the area is clicked. If empty the tooltip won't show at this stage!
- **"Text After Copy" (Expression - String)**: Defines the text that is shown in the tooltip after the area is clicked. When this tooltip closes it resets back to the "Text Before Copy". If empty the tooltip won't show at this stage!
- **"Tooltip Position" (Enumeration)**: Defines where the tooltip is rendered in relation to the area.
- **"Tooltip Variation" (Enumeration)**: Defines the style of the tooltip between some variations

### Tooltip Advanced (properties appear when Advanced Options is set to Yes):

- **"Tooltip Class" (Expression - String)**: Custom class applied to the tooltip (due to default styles it might be needed to create a higher specificity selector such as ".clipboard-wrapper/.clipboard-link/.clipboard-button .your-custom-class").
- **"Disable Arrow" (Boolean)**: Makes the tooltip have no arrow.
- **"Arrow Class" (Expression - String)**: Custom class applied to the tooltip arrow (due to default styles it might be needed to create a higher specificity selector such as ".clipboard-wrapper/.clipboard-link/.clipboard-button .your-custom-class").
- **"Tooltip Offset" (Number)**: Distance in pixels (px) between the component and the tooltip.
- **"Show Delay" (Number)**: Defines the delay in miliseconds (ms) for the tooltip to appear after the component was hovered.
- **"Hide Delay" (Number)**: Defines the delay in miliseconds (ms) for the tooltip to hide after the component was hovered

### The variation specific properties are as follow:

### Area:

- **"Content"**: Add your widgets inside this field (e.g. in Structure Mode in Mendix Studio Pro). A click in the area of these widgets will copy the text to the clipboard. This allows you to have the content that best fits your needs
Beware that if the content is clickable the behaviour might be undefined.

### Button:

- **"Button Text" (Expression - String)**: Defines the text that is inside the button, can be left empty and it will not be rendered.
- **"Button Style" (Enumeration)**: Defines the style for the button with preset styles provided by Atlas UI, further customization can be achieved with custom classes in the styling tab.
- **"Icon"**: Defines the icon that is inside the button, can be left with "(none)" and it will not be rendered.

### Link: 

- **"Link Text" (Expression - String)** : Defines the text that is inside the link, can be left empty and it will not be rendered.
- **"Icon"**: Defines the icon that is inside the button, can be left with "(none)" and it will not be rendered.

## Typical Usage Scenario

Have a Form Submission or a User Input? Users often need to copy information they have entered and this component facilitates that process.

Want to share a Link or a URL? Websites and applications usually provide shareable content, for example, articles, products or user profiles. The inclusion of the component next to this content can enable users to quickly share the URL.

Want to share Code Snippets? For developer-oriented website, forums and documentation platforms, the widget is invaluable. Users can effortlessly copy code snippets, configuration setting or command lines and paste them directly into their development environments.

All these use cases and much more can be achieved with the widget. 

## Demo project
You have a demo mendix application on the `test/testProject`

## Issues, suggestions and feature requests
https://github.com/mediaweb-pt/mendix-clipboard-copy/issues

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.