export default [{
    path: '/',
    name: 'index',
    component: require('./views/index.vue')
}, {
    path: '/movies',
    name: 'movies',
    component: require('./views/videos/movies.vue')
}, {
    path: '/tv-play',
    name: 'tv-play',
    component: require('./views/videos/tv-play.vue')
}, {
    path: '/others',
    name: 'others',
    component: require('./views/videos/others.vue')
}, {
    path: '/favorites',
    name: 'favorites',
    component: require('./views/favorites/favorites.vue')
}]