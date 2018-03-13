# gatsby-theme-kit
A theme development template kit to develop themes for the
Gatsby Manor [theme gallery](https://gatsbymanor.com/themes).

## Contribute a Themes
Read our theme development [tutorial](https://gatsbymanor.com/docs/tutorials/theme-development) to learn
how to use our theme kit to develop a theme. Afterwards read our guide on how
to [contribute your theme](https://gatsbymanor.com/docs/contribute/contribute-a-theme)

## Themes Gallery
The collection of themes found on Gatsby Manor.
- [Massively](https://github.com/gatsbymanor/gatsby-theme-massively)
- [Lens](https://github.com/gatsbymanor/gatsby-theme-lens)
- [Photon](https://github.com/gatsbymanor/gatsby-theme-photon)
- [Tessellate](https://github.com/gatsbymanor/gatsby-theme-tessellate)
- [Identity](https://github.com/gatsbymanor/gatsby-theme-identity)
- [Dimension](https://github.com/gatsbymanor/gatsby-theme-dimension)



# How to Port over HTML5UP themes
1. Find theme on html5up and download
  - Watch `find_theme_and_download.mov`

2. Make a new branch on the theme kit repo
  - [optional] $ git clone https://github.com/gatsbymanor/gatsby-theme-kit.git
  - $ cd gatsby-theme-kit
  - $ git checkout -b theme-name

3. Open both projects in your editor
  - watch `open_theme_kit_and_html5up_projects_in_atom.mov`

4. Copy over necessary assets (fonts/images/css) and html to our theme project
  - watch `copy_over_assets_and_index_file.mov`

  [] Copy over the html5up `/assets` folder to `gatsby-theme-kit/src`
  [] Copy over the html5up `/images` folder to `gatsby-theme-kit/src`
  [] From the html5up `index.html` copy the `<div id="wrapper">` element and everything inside.
  [] In `src/pages/index.js` paste the html contents in the return function. Delete any starter information there.
  ```
  import React from 'react';
  import Link from 'gatsby-link';
  import Helmet from 'react-helmet';
  import { Starter } from '../components/Starter';

  export default function Index({ data }) {

    return (
      // PASTE EVERYTHING HERE
    );
  }
  ```
  [] Delete the wrapper comment
  [] Comment out the over parts of the HTML that will serve as our guide
  - check changes by running `$ gatsby develop` in the root of `gatsby-theme-kit` directory

5. Import images from the local filesystem
  - watch `replace_and_import_images.mov`
  [] Import the stylesheets
  [] Replace image pages with images imported from the filesystem
  [] Repeat for any other images in the html


6. Create components from repeating elements, using appropriate naming conventions


Use knowledge of javascript, reactJS and Chrome DevTools to recreate the theme experience.
  - Not as helpful I know
