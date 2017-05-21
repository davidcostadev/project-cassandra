  soundManager.setup({
    url: '/path/to/swfs/',
    flashVersion: 9,
    preferFlash: false,
    debugMode : true,// prefer 100% HTML5 mode, where both supported
    onready: function() {
      console.log('SM2 ready!');
    },
    ontimeout: function() {
      // console.log('SM2 init failed!');
    },
    defaultOptions: {
      // set global default volume for all sound objects
      volume: 50
    }
  });

  var app = new Vue({
    el: '#app',
    data: {
      playing : null,
      covers : [
        {
          showDescription: false,
          img : 'https://coverartarchive.org/release/7e535de9-a3b3-423e-8edf-c200e8713c77/7135267762.jpg',
          id : 'salad-days',
          playStatus : false,
          title : 'Salad Days',
          description : 'Salad Days is the second full-length studio album by Canadian musician Mac DeMarco released on April 1, 2014 through Captured Tracks. Following the debut releases of Rock and Roll Night Club and 2 in 2012 and the extensive touring for both releases in 2013, DeMarco worked on material for his next album at his Bedford-Stuyvesant apartment in Brooklyn. The album garnered critical acclaim from critics. Salad Days debuted at number 30 on the Billboard 200 and spawned two singles: "Passing Out Pieces" and "Brother".',
          mainMusic: 'https://firebasestorage.googleapis.com/v0/b/cassandra-ced35.appspot.com/o/09%20Chamber%20of%20Reflection.mp3?alt=media&token=466781d3-dc52-41d3-85b7-c8406b482c94',
        },
        {
          showDescription: false,
          img : 'https://coverartarchive.org/release/92664345-1118-45a0-ac44-c54585e5aab7/11239538795.jpg',
          id : 'amnesia',
          playStatus : false,
          title : 'Nightclub Amnesia',
          description : 'Magnifique is the fifth studio album by Ratatat, released on July 17, 2015. Ratatat began touring in early 2015 with limited stops in the midwestern US and the Coachella music festival where new songs were debuted. On April 12, 2015, the band released "Cream on Chrome", the first single from the album. On June 16, 2015, "Abrasive" was released as the second single. The album features a cover of the 1971 Springwater single "I Will Return" and cover artwork collage sketches by Evan Mast and Mike Stroud.',
          mainMusic: 'https://firebasestorage.googleapis.com/v0/b/cassandra-ced35.appspot.com/o/08%20Nightclub%20Amnesia.mp3?alt=media&token=d3cc155c-064d-4e68-a100-64a90460662f',
        },

      ]
    },
    computed: {
      // soundManagervolume(val){
      //   mySound.setVolume(val);
      // }
    },
    methods: {
      showInfo: function(cover){
        cover.showDescription =! cover.showDescription;
      },
      playerController: function(cover){
        if (data.playing != null) {
          soundManager.stop(data.playing);
        }
        else if (data.playing == cover.id) {
          soundManager.pause(data.playing);
        }
        else {
          data.playing = cover.id;
          const play = soundManager.createSound({
            id: cover.id,
            url: cover.mainMusic,
          }).play();
        }
      }
    }
  });