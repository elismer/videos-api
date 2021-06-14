const videosMock = [
  {
    id: 'e588dc75-99cf-4a8b-af74-c0c67aa0d439',
    title: 'Deadly Surveillance',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    thumb: 'http://dummyimage.com/250x100.png/cc0000/ffffff',
    source: [
      'https://fc2.com/id/nisl/venenatis/lacinia.jpg',
      'https://mashable.com/eget/congue.js',
    ],
    categories: [
      'b13cc0a7-4a10-4d6a-8190-ffc143336a59',
      '965253ba-8da8-48de-b724-3fa31baa20b9',
      '6aafb259-dbce-41b2-bcfe-c32291c8fc42',
    ],
  },
  {
    id: '2a5dba8d-41c1-489f-b9fc-92b5985996a7',
    title: 'Notebook, The',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    thumb: 'http://dummyimage.com/141x100.png/ff4444/ffffff',
    source: [
      'http://t-online.de/feugiat/et/eros.xml',
      'http://google.de/dui/luctus/rutrum/nulla/tellus.png',
    ],
    categories: ['80aa4a24-0534-448f-b43b-389270e637b9'],
  },
  {
    id: 'faedcc37-f704-4fb2-87d3-acdd81f9db35',
    title: 'Sube y Baja',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    thumb: 'http://dummyimage.com/223x100.png/5fa2dd/ffffff',
    source: [
      'https://arizona.edu/sem/sed/sagittis/nam/congue/risus.html',
      'http://about.me/integer/ac/leo.js',
    ],
    categories: [
      '80aa4a24-0534-448f-b43b-389270e637b9',
      '965253ba-8da8-48de-b724-3fa31baa20b9',
      '80aa4a24-0534-448f-b43b-389270e637b9',
    ],
  },
  {
    id: '90eca844-6068-4419-b1d4-2a13372a82c7',
    title: 'Porgy and Bess',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    thumb: 'http://dummyimage.com/186x100.png/5fa2dd/ffffff',
    source: [
      'https://wiley.com/nec/nisi.aspx',
      'https://about.me/vitae/nisl/aenean.jpg',
    ],
    categories: [
      '6aafb259-dbce-41b2-bcfe-c32291c8fc42',
      '80aa4a24-0534-448f-b43b-389270e637b9',
      '965253ba-8da8-48de-b724-3fa31baa20b9',
    ],
  },
  {
    id: '9601f84a-dbc2-4a8b-a386-287cdd8fcc0f',
    title: 'Mr. & Mrs. Smith',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    thumb: 'http://dummyimage.com/213x100.png/ff4444/ffffff',
    source: [
      'http://fema.gov/eget/tempus/vel/pede.png',
      'http://hibu.com/integer/non.js',
    ],
    categories: ['41729d14-c1f2-436c-a736-ae89b9e65437'],
  },
  {
    id: 'decb8df7-3cd9-44cf-bb26-1b39a16b9f85',
    title: 'Laffghanistan: Comedy Down Range',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    thumb: 'http://dummyimage.com/224x100.png/cc0000/ffffff',
    source: [
      'https://comcast.net/enim/in/tempor/turpis.js',
      'https://csmonitor.com/lectus/suspendisse/potenti.jsp',
    ],
    categories: [
      '6aafb259-dbce-41b2-bcfe-c32291c8fc42',
      '965253ba-8da8-48de-b724-3fa31baa20b9',
    ],
  },
  {
    id: '83da7306-cab9-4be5-994c-8f3da5e76012',
    title: 'Unbelievers, The',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    thumb: 'http://dummyimage.com/232x100.png/dddddd/000000',
    source: [
      'http://sohu.com/quisque/erat.js',
      'http://sun.com/sit/amet/justo/morbi/ut/odio/cras.aspx',
    ],
    categories: [
      '965253ba-8da8-48de-b724-3fa31baa20b9',
      '6aafb259-dbce-41b2-bcfe-c32291c8fc42',
      '41729d14-c1f2-436c-a736-ae89b9e65437',
    ],
  },
  {
    id: '9a449747-b37c-4194-8b1e-3be7c2b8539d',
    title: 'Scarlet Letter, The',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    thumb: 'http://dummyimage.com/112x100.png/5fa2dd/ffffff',
    source: [
      'https://com.com/tincidunt/eu/felis/fusce/posuere.html',
      'https://yolasite.com/tincidunt/eu/felis.json',
    ],
    categories: [
      '41729d14-c1f2-436c-a736-ae89b9e65437',
      '965253ba-8da8-48de-b724-3fa31baa20b9',
    ],
  },
  {
    id: '39fc3911-7124-4963-a659-083a80d30a0f',
    title: 'Dog Day (Canicule)',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    thumb: 'http://dummyimage.com/112x100.png/ff4444/ffffff',
    source: [
      'https://barnesandnoble.com/faucibus/orci/luctus/et/ultrices.js',
      'http://microsoft.com/morbi/vel/lectus/in/quam/fringilla/rhoncus.aspx',
    ],
    categories: [
      'b13cc0a7-4a10-4d6a-8190-ffc143336a59',
      '41729d14-c1f2-436c-a736-ae89b9e65437',
    ],
  },
  {
    id: '8af4a77b-d304-4be0-be66-354dabc06d57',
    title: 'Imagine',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    thumb: 'http://dummyimage.com/158x100.png/5fa2dd/ffffff',
    source: [
      'http://trellian.com/potenti.html',
      'http://dailymail.co.uk/nunc/donec/quis/orci/eget/orci/vehicula.js',
    ],
    categories: ['f9701a96-f639-4a73-90f9-24ee51362cfc'],
  },
];

function filteredVideosMock(category) {
  return videosMock.filter((video) => video.categories.includes(category));
}

class VideosServiceMock {
  async getVideos() {
    return Promise.resolve(filteredVideosMock(category));
  }
}

module.exports = {
  videosMock,
  filteredVideosMock,
  VideosServiceMock,
};
