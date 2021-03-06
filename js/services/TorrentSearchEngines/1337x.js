DuckieTV.run(["TorrentSearchEngines", "SettingsService", "$q", "$http", "$injector",
    function(TorrentSearchEngines, SettingsService, $q, $http, $injector) {
        if (SettingsService.get('torrenting.enabled')) {
            TorrentSearchEngines.registerSearchEngine('1337x', new GenericTorrentSearchEngine({
                mirror: 'https://1337x.to',
                mirrorResolver: null,
                includeBaseURL: true,
                noMagnet: true,
                endpoints: {
                    search: '/sort-search/%s/%o/1/',
                    details: '%s'
                },
                selectors: {
                    resultContainer: 'div.tab-detail ul.clearfix li',
                    releasename: ['div.coll-1 strong a', 'innerText'],
                    seeders: ['div.coll-2 span', 'innerText'],
                    leechers: ['div.coll-3 span', 'innerText'],
                    size: ['div.coll-4 span', 'innerText'],
                    detailUrl: ['div.coll-1 strong a', 'href']
                },
                detailsSelectors: {
                    detailsContainer: 'div.content',
                    magnetUrl: ['#magnetdl', 'href']
                },
                orderby: {
                    age: {d: 'time/desc', a: 'time/asc'},
                    seeders: {d: 'seeders/desc', a: 'seeders/asc'},
                    leechers: {d: 'leechers/desc', a: 'leechers/asc'},
                    size: {d: 'size/desc', a: 'size/asc'}
                }
            }, $q, $http, $injector));
        }
    }
]);
