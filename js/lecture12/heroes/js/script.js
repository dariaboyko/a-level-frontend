const HEROES = [
  {
    group_type: 'avengers',
    headline: 'Iron Man',

    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg',
      alt: 'Iron Man (Tony Stark)'
    },
    secondary_text: 'Tony Stark',
    description:
      "Genius. Billionaire. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
    link: {
      link: '/characters/iron-man-tony-stark',
      title: 'Iron Man (Tony Stark)'
    }
  },
  {
    group_type: 'avengers',
    headline: 'Captain America',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg',
      alt: 'Captain America (Steve Rogers)'
    },
    secondary_text: 'Steve Rogers',
    description:
      'Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.',
    link: {
      link: '/characters/captain-america-steve-rogers',
      title: 'Captain America (Steve Rogers)'
    }
  },
  {
    group_type: 'avengers',
    headline: 'Thor',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg',
      alt: 'Thor (Thor Odinson)'
    },
    secondary_text: null,
    description:
      'The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.',
    link: {
      link: '/characters/thor-thor-odinson',
      title: 'Thor (Thor Odinson)'
    }
  },
  {
    group_type: 'avengers',
    headline: 'Spider-Man',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg',
      alt: 'Spider-Man (Peter Parker)'
    },
    secondary_text: 'Peter Parker',
    description:
      'Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.',
    link: {
      link: '/characters/spider-man-peter-parker',
      title: 'Spider-Man (Peter Parker)'
    }
  },
  {
    group_type: 'avengers',
    headline: 'Hulk',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg',
      alt: 'Hulk (Bruce Banner)'
    },
    secondary_text: 'Bruce Banner',
    description:
      'Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.',
    link: {
      link: '/characters/hulk-bruce-banner',
      title: 'Hulk (Bruce Banner)'
    }
  },
  {
    group_type: 'avengers',
    headline: 'War Machine',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/042wmr_ons_crd_03.jpg',
      alt: 'War Machine (James Rhodes)'
    },
    secondary_text: 'James Rhodes',
    description:
      'Military veteran James Rhodes is ready for combat in his advanced armor, adding a formidable arsenal to Tony Stark-created designs.  ',
    link: {
      link: '/characters/war-machine-james-rhodes',
      title: 'War Machine (James Rhodes)'
    }
  },
  {
    group_type: 'avengers',
    headline: 'Black Widow',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_04.jpg',
      alt: 'Black Widow (Natasha Romanoff) Scarlett Johansson'
    },
    secondary_text: 'Natasha Romanoff',
    description:
      'Natasha Romanoff, separated from the now-fractured Avengers, confronts the dark path she took to becoming a spy and assassin, as well as events that followed.',
    link: {
      link: '/characters/black-widow-natasha-romanoff',
      title: 'Black Widow (Natasha Romanoff)'
    }
  },
  {
    group_type: 'avengers',
    headline: 'Vision',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_ons_crd_01-1.jpg',
      alt: 'Vision'
    },
    secondary_text: null,
    description:
      'The android called Vision defies physics and fights as an Avenger with the power of density manipulation and his flawless computer brain.',
    link: {link: '/characters/vision', title: 'Vision'}
  },
  {
    group_type: 'avengers',
    headline: 'Hawkeye',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/hawkeye_ons_crd_01.jpg',
      alt: 'Hawkeye (Clint Barton)'
    },
    secondary_text: 'Clint Barton',
    description:
      'A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers’ amazing archer.',
    link: {
      link: '/characters/hawkeye-clint-barton',
      title: 'Hawkeye (Clint Barton)'
    }
  },
  {
    group_type: 'avengers',
    headline: 'Wanda Maximoff',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg',
      alt: 'Scarlet Witch (Wanda Maximoff)'
    },
    secondary_text: null,
    description:
      'Notably powerful, Wanda Maximoff has fought both against and with the Avengers, attempting to hone her abilities and do what she believes is right to help the world.',
    link: {
      link: '/characters/scarlet-witch-wanda-maximoff',
      title: 'Scarlet Witch (Wanda Maximoff)'
    }
  },
  {
    group_type: 'avengers',
    headline: 'Black Panther',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_ons_crd_02.jpg',
      alt: "Black Panther (T'Challa)"
    },
    secondary_text: "T'Challa",
    description:
      'T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.',
    link: {
      link: '/characters/black-panther-t-challa',
      title: "Black Panther (T'Challa)"
    }
  },
  {
    group_type: 'avengers',
    headline: 'Ant-Man',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/010ant_ons_crd_04.jpg',
      alt: 'Ant-Man (Scott Lang)'
    },
    secondary_text: 'Scott Lang',
    description:
      'Ex-con Scott Lang finds a new lease on life, and a chance to redeem himself in the eyes of his daughter, after taking over the mantle of Ant-Man.',
    link: {
      link: '/characters/ant-man-scott-lang',
      title: 'Ant-Man (Scott Lang)'
    }
  },
  {
    group_type: 'galaxy',
    headline: 'Star-Lord',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/021slq_ons_crd_02.jpg',
      alt: 'Star-Lord (Peter Quill)'
    },
    secondary_text: 'Peter Quill',
    description:
      'Leader of the Guardians of the Galaxy, Peter Quill, known as Star-Lord, brings a sassy sense of humor while protecting the universe from any and all threats.',
    link: {
      link: '/characters/star-lord-peter-quill',
      title: 'Star-Lord (Peter Quill)'
    }
  },
  {
    group_type: 'galaxy',
    headline: 'Gamora',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/022gam_ons_crd_01-1.jpg',
      alt: 'Gamora'
    },
    secondary_text: null,
    description:
      'Raised by Thanos to be a living weapon, Gamora seeks redemption as a member of the Guardians of the Galaxy, putting her extraordinary fighting abilities to good use.',
    link: {link: '/characters/gamora', title: 'Gamora'}
  },
  {
    group_type: 'galaxy',
    headline: 'Drax',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/025drx_ons_crd_02.jpg',
      alt: 'Drax'
    },
    secondary_text: null,
    description:
      'Drax uses his super strength and combat skills to destroy any enemies of the galaxy.',
    link: {link: '/characters/drax', title: 'Drax'}
  },
  {
    group_type: 'galaxy',
    headline: 'Rocket',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/023rra_ons_crd_03.jpg',
      alt: 'Rocket'
    },
    secondary_text: null,
    description:
      'As the weapons and tactical expert of the Guardians of the Galaxy, Rocket risks his hide to defend the cosmos.',
    link: {link: '/characters/rocket', title: 'Rocket (Rocket Raccoon)'}
  },
  {
    group_type: 'galaxy',
    headline: 'Groot',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/024grt_ons_crd_01-1.jpg',
      alt: 'Groot'
    },
    secondary_text: null,
    description:
      'This sentient alien tree branches out of his comfort zone to help the Guardians of the Galaxy keep the people of the universe safe.',
    link: {link: '/characters/groot', title: 'Groot'}
  },
  {
    group_type: 'galaxy',
    headline: 'Mantis',
    image: {
      filename: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/045mts_ons_crd_02.jpg',
      alt: 'Mantis'
    },
    secondary_text: null,
    description:
      'Mantis uses her powers to protect the galaxy against those who would seek to harm it.',
    link: {link: '/characters/mantis', title: 'Mantis'}
  }
];

const createCardContent = (object) => {
  const {headline, image} = object;

  const card = `<div class="card">
    <img class="card__img" src="${image.filename}" alt="${image.alt}">
    <p class="card__title">${headline}</p>
    </div>`;

  return card;
};

const generateContent = (array) => {
  const content = document.querySelector('#content');

  content.innerHTML = '';

  let data = '';

  array.forEach((element) => {
    data += createCardContent(element);
  });

  if (!data) data = 'No data';

  content.innerHTML = data;
};


const filterData = (data, filter) => {
  const {name, group} = filter;
  return data.filter((item) => {
    let result = true;

    if (name) {
      if (item.headline.toLowerCase().indexOf(name.toLowerCase()) === -1) {
        result = false;
      }
    }

    if (group) {
      if (item.group_type !== group) {
        result = false;
      }
    }

    return result;
  });
};
    generateContent(HEROES);

document.forms.filtersForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  const filteredData = filterData(HEROES, formProps);
  generateContent(filteredData);
});

