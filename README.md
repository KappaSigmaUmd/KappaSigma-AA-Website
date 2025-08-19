# KappaSigma-AA-Website ReadMe
Welcome to the University of Maryland Kappa Sigma website GitHub! If you are here to work on the website and improve it **please read the README**. If you have no experience with git or web design, that is fine, I will explain everything I did.

## Getting Started
1. You are going to need an IDE (integrated development environment), the most popular one is [Visual Studio Code](https://code.visualstudio.com/download).
2. Next, you are going to need to install [git](https://git-scm.com/downloads/win). Git is an open source version control system. Github, uses git to upload and download files to and from your computer.
3. I recommend downloading [GitHub Desktop](https://desktop.github.com/download/) as it makes all of the terminal work a UI, which makes it super simple. If you do this you can skip steps 4 and 5. You will have to clone the repository on the app (hit the drop down add button and click URL) and then click the open in VS Code button.
4. In VS Code open a new terminal (ctrl + `) and type: git clone https://github.com/KappaSigmaUmd/KappaSigma-AA-Website.git. This will download the main branch to your computer.
5. Navigate Into the Project Folder if you aren't there already (cd KappaSigma-AA-Website). Terminal tips: cd stands for change directory (changing folders) and ls lists all of the files in the folder. cd .. goes back a folder.
6. Install Node.js (if not already installed). The project requires Node.js to run. Download and install Node.js (choose the LTS version). Verify installation: node -v and npm -v
7. Install Dependencies. Once inside the project folder, install the required packages: npm install
8. I have made testing easier but making it so you don't have to stop and start the server every time to see a change. I did this by using nodemon, which is a dependency, so you don't have to manually download it yourself. So to start the server usually you type: node server.js. **With nodemon, you type: npm run dev.**
9. Open the Website Locally.After starting the server, the terminal will tell you where the app is running (usually http://localhost:300). Open this link in your browser to view the website. If the website doesn't work try changing the default port number, which can be found in server.js line 16 (or this line: const PORT = process.env.PORT || 300).

## Contributing
1. The first thing you need is permissions to push to the repository. Currently, when I write this, the grand scribe account owns this repository so you will have to ask them to add you as a contributor.
2. There are two ways to go about contributing. An important note is that the web server uses the main branch to run. So you can either push to the main branch which will have immediate effect on the website or you can create a new branch which can be merged to the main branch later. If you are making a huge change then I suggest making a branch. However, branching is used a lot in projects where multiple people are working on it at once so it's perfectly fine to push to main as long as you know the website is functional.
3. **How to push to a new branch**<br>
Make a new branch before working on a feature: git checkout -b feature-name<br>
Commit your changes with a clear message: git commit -m "Added feature-name"<br>
Push your branch to GitHub: git push origin feature-name<br>
Open a pull request on GitHub to merge your changes.
4. **How to push to the main branch**<br>
Make sure you’re on the main branch: git checkout main<br>
Pull the latest changes (to avoid conflicts): git pull origin main (I doubt there are, but if multiple people are working on it, there may be)<br>
Add and commit your changes: git add .<br>
git commit -m "Your descriptive message"<br>
Push directly to main: git push origin main or git push (origin main may be your default depending on how you cloned and if there are branches)

## Description of folders and files
Starting from bottom to top
1. `server.js` <br>
This is essentially your main file. All your other files are in some way linked to this file.
2. `package.json` <br>
A "directory" of all the dependencies needed in the project. When you do npm install, it looks at these dependencies and downloads them.
3. `package-lock.json` <br>
A "dictionary" of all the dependencies. Tells you version, license, etc.
4. `.gitIgnore` <br>
When pushing to the repo the ignore file ignores files listed and doesn't push them to the repo. node_modules/ is one of them and doesn't need to be uploaded to save space. npm install just installs all dependencies into this folder. Think of it as a library.
5. `views folder` <br>
This folder contains .ejs files. ejs files are very similar to html files but they have more features. An example is importing other .ejs files straight into another .ejs file. I do this a lot with the files in the partials folder. The partials file contains things that are redundant, like the header and footer. I imported these into the main pages so I didn't have to retype it, and it keeps things organized and clean for changes.
6. `routes folder` <br>
The `routes` folder contains all the URL endpoints for the website. Each file defines routes for a specific part of the site. For example:
- `routes/index.js` → homepage routes (`/`)
- `routes/users.js` → user-related routes (`/users`)
Routes determine how the server responds when a user visits a URL. Each route typically specifies the **HTTP method** (GET, POST, etc.) and what content or data should be returned. These methods are used for things such as forms and getting pages.
7. `public folder` <br>
The `public` folder contains images, JavaScript files, and CSS files

## Future hopes and what can be added
Designing this project from scratch was a lot of fun, and it was so cool seeing people use it. I designed the project with backend development in mind. That's why I created it with Node.js and organized folders for backend development later. There's always more that can be added, including:

### Features & Functionality
- [ ] **Member login portal**: Allow brothers to log in to access private content.
- [ ] **Event calendar**: Show upcoming events, meetings, and deadlines.
- [ ] **RSVP system**: Let members RSVP for events directly on the site.
- [ ] **Photo/Gallery section**: Display past events, rush photos, or achievements.
- [ ] **Contact form**: Allow visitors to send messages to the fraternity.
- [ ] **Announcements section**: Post news or updates quickly to all members.
- [ ] **Search functionality**: Make it easier to find pages, events, or members.

### Design & User Experience
- [ ] **Mobile optimization**: Make the site fully responsive for all screen sizes.
- [ ] **Theme customization**: Allow light/dark mode or color scheme options.
- [ ] **Smooth scroll/animations**: Improve transitions between sections. Text flying in from the side of the screen.
- [ ] **Accessibility improvements**: Ensure the site is friendly for screen readers and keyboard navigation.

### Technical Improvements
- [ ] **Better SEO**: Add meta tags, structured data, and sitemap.xml.
- [ ] **Performance optimizations**: Compress images, minify CSS/JS, and improve load times.
- [ ] **Analytics integration**: Track site usage with Google Analytics or similar.
- [ ] **Testing suite**: Implement automated tests for routes and functionality.

### Community & Engagement
- [ ] **Blog or news section**: Share updates, achievements, or member spotlights.
- [ ] **Discussion board / forum**: Allow members to communicate online.
- [ ] **Integration with social media**: Pull in posts from Instagram, Facebook, or Twitter.

