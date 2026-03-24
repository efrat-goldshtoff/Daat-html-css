// Posts Data Array
const postsData = [
    {
        id: 1,
        categories: ['חדשות'],
        title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti peatque commodi. Nulla odio nemo eveniet?',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti perspi totam dicta adipisci tenetur ipsa molestiae excepturi amet consectetur adipisicing elit. Dolorem corrupti perspi totam dicta adipisci tenetur ipsa molestiae excepturi amet consectetur adipisicing elit. Dolorem corrupti perspi totam dicta adipisci tenetur ipsa molestiae excepturi amet consectetur adipisicing elit. Dolorem corrupti perspi totam dicta adipisci tenetur ipsa molestiae excepturi atque commodi. Nulla odio nemo eveniet?',
        author: 'ישראל ישראלי',
        date: '01/01/2025',
        imageClass: 'image1'
    },
    {
        id: 2,
        categories: ['שלי', 'ספורט'],
        title: 'Lorem ipsum, dolor s',
        summary: 'Lorem ipsum, dolor sit i perspiciatis magnam nemo consequatur similique, sapiente quisquam, totam dicta adipisci tenetur ipsa molestiae excepturi i perspiciatis magnam nemo consequatur similique, sapiente quisquam,iciatis magnam nemo consequatur similique, sapiente quisquam, totam dicta adipisci tenetur ipsa molestiae excepturi atque commodi. Nulla odio nemo eveniet?',
        author: 'שלמה יוסף יהודה כהן',
        date: '01/02/2024',
        imageClass: 'image3'
    },
    {
        id: 3,
        categories: ['חדשות', 'ספורט'],
        title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrxcepturi atque commodi. Nulla odio nemo eveniet?',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti perspiciatis magnam nemo consequatur similique, sapiente quisquam, totmodi. Nulla odio nemo eveniet?',
        author: 'יששכר לוי',
        date: '01/02/2023',
        imageClass: 'image2'
    },
    {
        id: 4,
        categories: ['חשבון'],
        title: 'Lorem ipsum, dolor atque commodi. Nulla odio nemo eveniet?',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti perspiciatis di. Nulla odio nemo eveniet?',
        author: 'יהושע שורץ',
        date: '01/02/2020',
        imageClass: 'image2'
    },
    {
        id: 5,
        categories: ['הסטוריה', 'ספורט'],
        title: 'Lorem ipsum, dolor s?',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti per, totam dicta adipisci tenetur ipsa molestiae excepturi atque commodi. Nulla odio nemo eveniet?',
        author: 'מתי כהן',
        date: '01/02/2019',
        imageClass: 'image3'
    },
    {
        id: 6,
        categories: ['חדשות', 'מדעים'],
        title: 'Lorem ipsum,di. Nulla odio eveniet?',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti perspicitam dicta adipisci tenetur ipsa molestiae excepturi atque commodi. Nulla odio nemo eveniet?',
        author: 'שלמה קליין',
        date: '01/02/2016',
        imageClass: 'image1'
    },
    {
        id: 7,
        categories: ['חדשות', 'ספורט'],
        title: 'Lorem ipsum, dolor sit amet',
        summary: 'Lorem ipsum, dolor sit a perspiciatis magnam nemo consequatur similique,epturi atque commodi. Nulla odio nemo eveniet?',
        author: 'צבי רביץ',
        date: '01/02/2015',
        imageClass: 'image3'
    },
    {
        id: 8,
        categories: ['התעמלות', 'טבע'],
        title: 'Lorem ipsum,',
        summary: 'Lorem ipsum, dolor sit elit. Dolorem',
        author: 'יוחנן לוי',
        date: '01/02/2014',
        imageClass: 'image2'
    },
    {
        id: 9,
        categories: ['מענין', 'ספורט'],
        title: 'Lorem ipsum, dolor',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti perspiciatis magnam nemo consequatur similique, sapiente quisquam, totam dicta adipisci tenetur ipsa molestiae excepturi atque commodi. Nulla odio nemo eveniet?',
        author: 'שלמה יוחנן צבי יהושע קרביץ',
        date: '01/02/2013',
        imageClass: 'image1'
    },
    {
        id: 10,
        categories: ['נחמד', 'מרתק'],
        title: 'Lorem ipsum, dolor sit amri atque commo',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti perspiciatis magnam nemo consequatur similique, sapiente quisquam, totam dicta adipisci tenetur iae exce',
        author: 'יוסי כהן',
        date: '01/02/2012',
        imageClass: 'image2'
    },
    {
        id: 11,
        categories: ['חדשות', 'חדש'],
        title: 'Lorem ipsum, dolor sit amet consectetu',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti perspiciatis magnam nemo consequatur similique, sapiente quisquam, totam dicta adipisci tenetur ipsa molestiae excepturi atque commodi. Nulla odio nemo eveniet?',
        author: 'מוטי לוי',
        date: '01/02/2011',
        imageClass: 'image3'
    },
    {
        id: 12,
        categories: ['חדשות', 'ספורט'],
        title: 'Lorem ipsum, dolor sit atque commodi',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti perspiciatis magnam nemo consequatur similique, sapiente quisquam, totam dicta adipisci tenetur ipsa molestiae excepturi atque commodi. Nulla odio nemo eveniet?',
        author: 'אהרן שורץ',
        date: '01/02/2010',
        imageClass: 'image1'
    },
    {
        id: 13,
        categories: ['חדשות', 'ספורט'],
        title: 'Lorem ipsum, dolor siatque commodi.',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti perspiciatis magnam nemo consequatur similique, sapiente quisquam, totam dicta adipisci tenetur ipsa molestiae excepturi atque commodi. Nulla odio nemo eveniet?',
        author: 'מוטי לוי',
        date: '01/02/2008',
        imageClass: 'image2'
    },
    {
        id: 14,
        categories: ['חדשות', 'ספורט'],
        title: 'Lorem ipsum, dolor siatque commodi.',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti perspiciatis magnam nemo consequatur similique, sapiente quisquam, totam dicta adipisci tenetur ipsa molestiae excepturi atque commodi. Nulla odio nemo eveniet?',
        author: 'מוטי לוי',
        date: '01/02/2008',
        imageClass: 'image2'
    },
    {
        id: 15,
        categories: ['חדשות', 'ספורט'],
        title: 'Lorem ipsum, dolor siatque commodi.',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti perspiciatis magnam nemo consequatur similique, sapiente quisquam, totam dicta adipisci tenetur ipsa molestiae excepturi atque commodi. Nulla odio nemo eveniet?',
        author: 'מוטי לוי',
        date: '01/02/2008',
        imageClass: 'image2'
    },
    {
        id: 16,
        categories: ['חדשות', 'ספורט'],
        title: 'Lorem ipsum, dolor siatque commodi.',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti perspiciatis magnam nemo consequatur similique, sapiente quisquam, totam dicta adipisci tenetur ipsa molestiae excepturi atque commodi. Nulla odio nemo eveniet?',
        author: 'מוטי לוי',
        date: '01/02/2008',
        imageClass: 'image2'
    },
    {
        id: 17,
        categories: ['חדשות', 'ספורט'],
        title: 'Lorem ipsum, dolor siatque commodi.',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti perspiciatis magnam nemo consequatur similique, sapiente quisquam, totam dicta adipisci tenetur ipsa molestiae excepturi atque commodi. Nulla odio nemo eveniet?',
        author: 'מוטי לוי',
        date: '01/02/2008',
        imageClass: 'image2'
    }
];
