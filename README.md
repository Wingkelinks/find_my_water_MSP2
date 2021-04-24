# Find My Water Australia

###### Code Institute MS2 / Interactive Front-End Development

An interactive and responsive, multi-page website with the primary function of enabling users to search and locate existing tidal/ocean pools in and around Australia.

## UX

### Target audiences include:

- Australian residents with a specific interest in exploring the country's ocean/tidal pools.
- People with general swimming interests.
- People that enjoy being active outdoors. 
- International and local travellers, with an interest in exploring Australia's ocean/tidal pools.

### External User goals:

- To search for iconic and lesser-known ocean/tidal pools, by region.
- Obtain visitor information such as: 
> - Addresses
> - Opening hours 
> - Pool features
> - Accesibility

- Access to external links offering further information on locations.
- Access to images of some of the locations. 
- Ability to contribute data, by suggesting locations not yet listed (by email).

### Developer and Site Owner goals:

- To provide a niche service around a topic the developer has a personal interest in. 
- To showcase Australia's iconic and lesser-known ocean/tidal pools. 
- To build a website, that offers information and data in a visually appealing manner. 
- To initiate an idea that could potentially lead to a real world project at a later stage in the developer's career.

### 1. Strategy

The primary purpose of the website is to build an attractive and functional site that offers users an introductory launchpad into the world of Australia's ocean pools.  

### 2. Scope

**Minimum Viable Product** for the website will include:
- responsive navigation on all pages.
- home page - featuring an underwater video background.
- about section - offering information about the site's purpose. 
- map page - integrated Google Maps API to allow users to interact with relevant data. 
- top locations page - gallery of selected popular locations with links to external sites. 
- contact page - with a form, to allow users to communicate with the site owner. 

**Desirable features** at a later stage may include:

- a newsletter/sign up feature
- an account/login feature - allowing users to save searches and create a user profile. 

### 3. Structure

## User Stories

**User interviews/research:**

1. As a user, would you like to have access to a website that enables you to search for tidal/saltwater pools in Australia?

   > Yes.

2. If yes, what features/content would you like the website to have and why?

> - Map function to search for locations and get directions
> - To select/save favourite locations 
> - Access to external information/links
> - To view images of locations 

3. Would you expect the website to offer further info related to the topic of natural/outdoor swimming in Australia? If yes, what type of information?

   > Yes, access to any other relevant external links, articles or news features. 

4. What type of device would you normally use to perform the above tasks?

   > Mobile and desktop.

## User Story Testing

**User interviews post deployment:**

1. One user reported that they'd prefer to see the info window contents displayed differently. This advice was taken onboard, and the layout was changed from paragraph style to list style.  

2. One user reported they'd like to see more colour contrast between the navigation and the rest of the pages. This was taken onboard, and the nav color went from a light blue to the colour it is now - a bright green. 

3. Another user reported that when using the map on a mobile device, the UI experience wasn't very good, because the map wasn't immediately visible on a button click - it was up to them to know to scroll down. This issue was fixed by adding some JS with a scrollIntoView function.

### 4. Skeleton

- Wireframes showing layout and responsive design: [Wireframes]()

### 5. Surface

- The **tidal/ocean pool theme** stems from the developer's own desire to travel Australia's coastline and explore it's famous and lesser known coastal swimming spots. As a swimmer and ocean admirer, the developer also intends to convey the beauty and meditative qualities that can be linked to water. 

- **Images and media** obtained from [Unsplash](https://unsplash.com/) and [Pexels](https://www.pexels.com/). 

- **Strong water/ocean theme** influenced the colour choices made for the site. 
- Using [Google Maps Cloud-based styling](https://developers.google.com/maps/documentation/javascript/styling#cloud_tooling), a custom map ID was created with all water to dislplay as the colour **Cornflower Blue.** 
- With this as a reference, a colour picker was used: [Coolors](https://coolors.co/). The palette includes a range of analogous and complementary colours that work in harmony together. The full palette can be viewed here [Find My Water colour palette](https://coolors.co/709bff). 

- For **font selection** [Google Fonts](https://fonts.google.com/) was used. A variety of fonts were tested before settling on "Bungee Shade" as a leading font, which is paired with "Pangolin" and "Montserrat" as sub-fonts. The 'outlined' design on Bungee Shade provides strong contrast against the movement of the water video on the home page. 

- [Google Fonts: Material Icons](https://fonts.google.com/icons) were used to implement the 'map marker' that accompanies the title in the navbar and home page. This icon was chosen not only for it's reference to mapping, searching and discovering, but also because it hints at the shape of a water droplet.

##

## Features

### Existing Features

- A responsive navigation menu that becomes a dropdown hamburger menu on smaller screens.

- A home page featuring a full size video background with a centred title. When the user scrolls down, a top navigation bar will transition into view. 

- An About section, providing background inforamtion on the site's existence and purpose.

- The Map - essentially the main feature of the site. Using Google Maps API integration users can: 
  - interact with the map by clicking on 'region' buttons  display markers within the selected region.
  - view info windows for each marker that display visitor information and links to related sites. 

- The Top Spots page displays a gallery of images in the form of a responsive grid. These include links to external sites with more information on the locations. 

- A Resources page - designed to reference a 'news' page. It includes links to articles and websites that relate to the topic of ocean pools in Australia. 

- A Contact page featuring a fully functioning form powered by [EmailJs](https://www.emailjs.com/).

- A Footer on all pages, with links to social media and copyright information. 

### Features Left to Implement

- A login/user profile feature.
- A newsletter/signup feature. 

##

## Technologies Used

##### 1. Languages

- [HTML5](https://html.com/html5/): Semantic markup structuring of the site.
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets): Cascading Style Sheets for design/styling of the site.
- [JavaScript](https://www.javascript.com/): Primary function for user interaction in the site. 


##### 2. Integrations and Frameworks

- [Google Maps API](https://developers.google.com/maps)
- [Tachyons](https://tachyons.io/): a fully responsive CSS Toolkit. Used in the form of small components throughout areas of the site in conjunction with custom CSS. 
- [FontAwesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [Material Icons by Google Fonts](https://fonts.google.com/icons)
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/): used to create responsive layouts.
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/): used to create responsive layouts.
- [Balsamiq](https://balsamiq.com/): Wireframing tool used. 

##### 3. Workspace, version control and Repository storage

- [Visual Studio Code](https://code.visualstudio.com/) - Coding Editor
- [Git](https://git-scm.com/) - Version Control
- [GitHub](https://github.com/) - Repository Storage
- [Imgbot](https://github.com/marketplace/imgbot) - A Github app that optimizes images (free for open source projects).
  > Imgbot sends an auto pull request with images optimized. The pull request is merged and Imgbot keeps working as changes are made to the repository.

##

## Testing

### [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)

- Throughout the development process, DevTools was used for testing responsive behaviour on small, medium and large screen sizes.
- It was also consistently used to debug and prototype CSS.
- Used to check for JavaScript issues and access the console. 

### [W3C Markup Validation Service](https://validator.w3.org/)

- Used to check that my HTML and CSS markup was in order and in line with best practice methods.

### [JSHint](https://jshint.com/)

- Used to detect problems and errors in JavaScript code. 

### [Lighthouse](https://developers.google.com/web/tools/lighthouse)

- Used to check performance, accessibility and SEO potential of the website.
  - Overall performance: 
  - Accessibility: 
  - Best Practices: 
  - SEO: 

### [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

- Once the website was published, this site was used to check if the site was mobile-friendly.
  - Passed the test.
  - Some loading issues detected at different times, but don't seem to affect the actual running of the site. 
  
### [Web Page Test](https://www.webpagetest.org/)

- This site tested the website's performance.
  - Load speed:

### Browser compatability 

The site has been tested across the following browsers, to ensure cross compatability. 

- Chrome *v.90*
- Microsoft Edge *v.90*
- Firefox *v.88*
- Safari *v.14*

###

## Debugging process & known bugs/issues

- Incorporating Marker Clustering into the map - currently unresolved issue. 
- 



## Deployment

1. All code was written in the [Visual Studio Code](https://code.visualstudio.com/) environment. Using the VSCode Integrated terminal, regular commits were made and pushed to the project repository on Github.

2. Deployment and source control handled via Github. 
   The **repository** can be found here: 
    [Wingkelinks/find_my_water_MSP2](https://github.com/Wingkelinks/find_my_water_MSP2)

3. The site is published from the *master branch* using [Github Pages](https://pages.github.com/). 
   Access the **live site** here: 
   - [Find My Water](https://wingkelinks.github.io/find_my_water_MSP2/)

## Credits

- [Tachyons Components](http://tachyons.io/components/)
- [W3 Shools](https://www.w3schools.com/) 
  - [How to create responsive navigation](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp)
  - [How to slide down a bar on scroll](https://www.w3schools.com/howto/howto_js_navbar_slide.asp)
- [iEatWebsites](https://www.youtube.com/watch?v=05ZHUuQVvJM)
  - How to Add a Video Background with HTML & CSS (used on home page)
- [Sam Codes](https://www.youtube.com/watch?v=uPhWSyRqQDA)
  - JS Google Maps API Tutorial 

## Other resources

- [Code Institute course material](https://learn.codeinstitute.net/ci_program/diplomainsoftwaredevelopment)
- Code Institute **Slack** channel
- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) - Guide to markdown on .md files.
- [CSS Tricks](https://css-tricks.com/) - convenient CSS resources. Regularly referenced their **Flexbox** tutorial. 
- [Stack Overflow](https://stackoverflow.com/) - general questions and problem solving.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - general questions and problem solving.

### Content

In-depth research into the topic of Australian ocean pools was conducted before and during the production of this site. While several sources have been referenced for the purpose of creating this site, all written content is original and not 'copied and pasted' from anywhere. 

The following sites provided valuable information pertainining to ocean pools in Australia and several of them are included as resources in the *'Further Reading'* page on the site. 
 
 - [The Wild Edge by Nicole Larkin](https://www.nicolelarkin.com/the-wild-edge)
 - [All Into Ocean Pools by Marie-Louise McDermott](https://allintooceanpoolsinc.org/) 
 - [The Pool](https://iview.abc.net.au/show/pool) - a documentary that sparked an initial interest in ocean pools. 
 - [Water Worlds: the magic of New South Wales' ocean pools](https://www.theguardian.com/lifeandstyle/ng-interactive/2020/jan/21/water-worlds-the-magic-of-new-south-wales-ocean-pools)
 - [Ocean Pools NSW](https://oceanpoolsnsw.net.au/)
 - [8 ocean pools you can visit in South Australia](https://www.environment.sa.gov.au/goodliving/posts/2019/04/ocean-pools)
 - [Ocean Pools Australia - Australia Global Alumni](https://www.globalalumni.gov.au/news/ocean-pools-in-australia)
 - [Wild Swimming Australia](http://www.wildswimmingaustralia.com/shop/)

 All **location data** (latitude and longitude co-ordinates) were obtained directly from Google Maps:
 - [Google Maps](https://www.google.com/maps) 

### Media

- Images courtesy [Unsplash](https://unsplash.com/) 
- Water video used in home page obtained from [Pexels](https://www.pexels.com/) 
- The few instances where images are not royalty free *(in some info windows on the map)*, all image sources are accessible via links. 


### Acknowledgments

Thanks to my Mentor, Sebastian Immel for helping me consolidate and refine ideas during the inception phase of this project. 

To my partner, for the role she played in inspiring the project idea, her expert proof-reading skills and her genuine interest and enthusiasm.

Thank you to the Code Institue Slack community - a great place to check in and learn from others. 

