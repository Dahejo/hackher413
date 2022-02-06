# Must-seum

### Demo: https://must-seum.web.app/
### Figma: https://bit.ly/35Mx4ah
### Presentation: https://youtu.be/VVcBL_UcATw

# Description as a Tweet:
“Must-seum’ enables people to appreciate art in an easy and accessible way!

# Inspiration:
Have you wandered in a museum not knowing what to see? Do you have only an hour to look around the MATT? Or are you the person who doesn't even know what paint style you like? Frankly, this is all true for me. I always wanted to appreciate art, see the real meaning of the piece, and know exactly what I want to see when I visit famous museums. But the world of art seems far from me and I believe so do a lot of people. And that was the starting point of this project, ‘Must-seum’.

# What it does:
Like books and movies, we wanted to introduce art to people in an efficient way. While showing the most popular works, this webpage won’t allow people to miss must-see artworks at a museum they will visit. Not only saving time for busy travelers, Must-seum will also help people to find their taste who want to appreciate art with accessible information.

### 1. Find Must-see Artwork.
Users can find art museums by typing the museum name, city’s name, and a zip code. A map will pop up, which enables the user to choose the museums on the map. When you select a museum, the most saved artworks will show up in the order and users are able to access the location of the specific artwork. Through this feature, users can decide what to see in a limited time.

### 2. Personalized Artwork Curation Algorithm (To be developed)
Must-seum will recommend the style of painting, painter, and even the museum which the user would enjoy the most based on the algorithm by accumulating data of user’s preference. We can implement this feature by cooperating with art department professors!

### 3. Track Your Taste
On the profile page, you can check saved artworks, art museums you’ve been to, and even follow your friends! You can save an artwork that you like by searching it by name of the artwork, artist, or even the characteristics of your artwork! (We will enable this by artwork data labeling)

# How we built it:
**Map Feature**
1. Courtesy of the Institute of Museum and Library Services in Kaggle, we were able to utilize the dataset of museums in the United State (https://www.kaggle.com/imls/museum-directorys.)
2. We converted the CSV file to a JSON file and imported it to javascript.
3. By comparing javascript to user input data, we opt out of the inconsistent dataset and build pins of the location of museums on an OpenStreetMap by using their coordinates.

**Artcard Feature**
We also do the same process for importing artwork data of the museum of modern arts by using data on Kaggle (https://www.kaggle.com/momanyc/museum-collection?select=artworks.csv)

**Frontend Design**
We used Figma to visualize the design of the website first and used CSS to decorate our React-structured website while using CSS (https://www.figma.com/file/3gOcrbxAeH718mfxx4ctL9/museum?node-id=5%3A900)

# Technologies we used:
### HTML/CSS
### Javascript
### React.js
### Figma

# Challenges we ran into:
- Utilizing CSV data from Kaggle to our website
- Showing several pins based on the user's input on the webpage

# Accomplishments we're proud of:
- Aesthetic design 😁
- Using CSV datasets
- Collaborate coding using GitHub

# What we've learned:
How to use CSV datasets: we changed CSV into JSON data and put them in a Javascript file.

# What's next:
1. Launch an app version to increase accessibility and retention rate.
2. Provide an optimal path for visitors based on their taste and the time they have.
3. Stimulate the art museums industry through partnerships with museums regarding tickets or memberships.
4. Evolve into a virtual museum platform on one’s own taste.

# Built with:
## We used HTML/CSS, React.js for implementing the prototype and hosted it with Firebase.
- Map: OpenStreetMap
- Datasets: [Museum Of Modern Art Collection], [Museums, Aquariums, and Zoos] from Kaggle
- Design: Figma

# We won:
- Best Use of Open Source Data Hack: Cash prize $1,000 total to first place team
- Best Design Hack: Apple AirPods 3rd Gen
