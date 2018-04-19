window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Royal Arch',
      description: 'A classic Boulder hike to a natural arch with great views!',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/Tommy.png',
      productImageUrl: 'images/products/trailhead-chautauqua.jpg',
    },
    {
      id: 2,
      title: "Sunshine Lion's Lair Loop",
      description: 'Great Mount Sanitas views are the reward for this gentler loop in Sunshine Canyon.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/products/lions-lair-trail-at-map.png',
    },
    {
      id: 3,
      title: 'Bear Peak',
      description: 'A must-do hike for Boulder locals and visitors alike!',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/veronika.jpg',
      productImageUrl: 'images/products/bear-peak-trail-at-map.png',
    },
    {
      id: 4,
      title: 'Walker Ranch',
      description: 'An awesome and challenging hike near Boulder with great scenery!',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/molly.png',
      productImageUrl: 'images/products/walker-ranch-loop-at-map.png',
    },
  ];

  return { products: products };
}());
