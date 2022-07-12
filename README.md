# Post ideas
* WASM & PyScript
* WiFi setup
* Hassio
* Music setup with raspberry
* Recipes
    - Pasta
    - Quiche
* Vacarisses
* L'Escala
* Dev environment:
    - nvim
    - tmux
    - dotfiles
    - ~zsh + prezto~
    - Why bash instead of zsh


# Heroku Docker deploy
After GitHub action has been successfully completed (image pushed to Docker Hub), pull the image:
```
$ docker pull gio8tisu/strapi-blog:master
```
To push an image to Heroku, such as one pulled from Docker Hub, tag it and push it according to this naming template:
```
$ docker tag gio8tisu/strapi-blog:master registry.heroku.com/strapi-campderrich/web
$ docker push registry.heroku.com/strapi-campderrich/web
```
After you’ve successfully pushed an image to Container Registry, you can create a new release using:
```
$ heroku container:release -a strapi-campderrich web
```
