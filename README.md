# User Zoom - Github Repo Browser

Application where we can see our starred repos from Github and find new repositories by organisation name to add them to our favourites list.

## Installation

To install the project you need to clone it:

```bash
git clone https://github.com/joosemi1993/UserZoom.git
```

## Usage

After clone it we will see two folders, 'front-end' and 'backend'. To be able to run the application we need to run both projects:

### Back-end

- First thing to do 

```bash
yarn install
``` 

After we have all the packages installed we run

```bash
yarn dev
``` 

And it will be listening in [http://localhost:8080](http://localhost:8080)

### Front-end

- First thing to do 

```bash
yarn install
``` 

After we have all the packages installed we run

```bash
yarn start
``` 

And it will open a new tab in our browser pointing to this link [http://localhost:3000](http://localhost:3000)

After this steps we will have our application running.

## Implementation / Design

### Home Page

In this page we have our starred repositories organised in simple cards. To show them we call to our endpoint `GET userzoom/user/favourites` and it give us a list of repositories for the authenticated user (the authenticated user is set in the `.env` file in the backend side). 

With this list of repositories we build the cards containing some information such us name, description and two buttons, one is the "star" on the top right, if we click on it we call to our `DELETE /userzoom/user/favourites/:owner/:repo` and we removed from our starred list. The other button we have is to open a modal where we can see more information about the repository, like name, author name, avatar of the user and last update.

### Explore Repositories Page

In this page we can see a form to search organisation repositories by organisation name. When we click in the button we call `GET /userzoom/repositories/:organization`. When we get the response we present the data in a list with name, description and one star button that will indicate if the repository is in our starred list or not calling to `GET userzoom/user/is-favourite/:owner/:repo`. 

If the repository is not in our starred list and we click in the star we will add to our starred list calling to `PUT /userzoom/user/favourites/:owner/:repo`.
On the other hand if the repository is already in our starred list and we click in the star button we remove it from our list calling `DELETE /userzoom/user/favourites/:owner/:repo`.
