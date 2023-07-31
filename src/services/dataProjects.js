import casaCambio from '../assets/project-images/casaCambio.png';
import carteiraDespesas from '../assets/project-images/carteiraDespesas.png';
import cepSearch from '../assets/project-images/cepSearch.png';
import shoppingCart from '../assets/project-images/shoppingCart.png';
import rickMorty from '../assets/project-images/rickMorty.png';
import starWars from '../assets/project-images/starWars.png';
import guiMusics from '../assets/project-images/guiMusics.png';
import pixelArt from '../assets/project-images/pixelArt.png';

export const dataProjects = [
    {   id: 1,
        name: 'Trybe Wallet',
        img: carteiraDespesas,
        content: ['Redux', 'React'],
        deployLink: 'https://guivoleck-despesa.surge.sh/',
        codeLink: 'https://github.com/guivoleckk/carteira-despesas',
        language: 'javascript',
        lib: 'React',
    },
    {   id: 2,
        name: 'Cep Search',
        img: cepSearch,
        content: ['Api'],
        deployLink: 'https://cep-guilherme-voleck.surge.sh/',
        codeLink: 'https://github.com/guivoleckk/cep-localization',
        language: 'javascript',
        lib: '',
    },
    {   id: 3,
        name: 'Casa de câmbio',
        img: casaCambio,
        content: ['Api'],
        deployLink: 'http://my-cambio-app.surge.sh/',
        codeLink: 'https://github.com/guivoleckk/casa-cambio-deploy',
        language: 'javascript',
        lib: '',
    },
    {
        id: 4,
        name: 'Shopping Cart',
        img: shoppingCart,
        content: ['Api'],
        deployLink: 'https://guivoleck-carrinho-compras.surge.sh/',
        codeLink: 'https://github.com/guivoleckk/carrinhos-de-compras',
        language: 'javascript',
        lib: '',
    },
    {
        id: 5,
        name: 'Rick And Morty',
        img: rickMorty,
        content: ['Api', 'React'],
        deployLink: 'https://gui-rick-and-morty.surge.sh/',
        codeLink: '',
        language: 'javascript',
        lib: 'React',
    },
    {
        id: 6,
        name: 'Star Wars Filters',
        img: starWars,
        content: ['Context API', 'React', 'Hooks'],
        deployLink: 'https://guivoleck-starwars.surge.sh',
        codeLink: 'https://github.com/guivoleckk/star-wars-filters',
        language: 'javascript',
        lib: 'React',       
    },
    {
        id: 7,
        name: 'Guilherme Musics',
        img: guiMusics,
        content: ['React'],
        deployLink: 'https://gui-musics.surge.sh',
        codeLink: 'https://github.com/guivoleckk/guilherme-musics',
        language: 'javascript',
        lib: 'React',       
    },
    {
        id: 8,
        name: 'Pintando Pixels',
        img: pixelArt,
        content: ['DOM'],
        deployLink: 'http://gui-pixels.surge.sh/',
        codeLink: 'https://github.com/guivoleckk/pixels-art',
        language: 'javascript',
        lib: '',
    }
];