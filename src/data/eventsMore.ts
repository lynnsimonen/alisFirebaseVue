export interface Events {
    eventName: string;
    eventDate: string;
    details: string;
    sourceLink: string;
    image: string;
    id: number;
  }
  
  const events: Events[] = [
    {
      eventName: 'Cooking Empanadas with Ali (View cooking video!)',
      eventDate: '2022-11-28',
      details: 'Sorry you missed this event, but, bonus, view the video and sign up for another cooking event in the future!  A great evening with friends cooking up empanadas and enjoying the delicious meal afterwards.',
      sourceLink: 'https://www.youtube.com/watch?v=sIVArBVb_II',
      image:'https://realhousemoms.com/wp-content/uploads/Mexican-Chicken-Empanadas-IG.jpg',
      id: 0
    },
    {
        eventName: 'Cooking Chacareros with Ali',
        eventDate: '2023-02-15',
        details: 'Warm up your winter with a grilling lesson and good eats with Ali!',
        sourceLink: 'Chacareros.pdf',
        image: 'https://i1.wp.com/www.sandwichtribunal.com/wp-content/uploads/2015/03/20150308_200142_color.jpg?fit=4128%2C2322',
        id: 1
    },
    {
        eventName: 'Celebrate Chilean Independence Day',
        eventDate: '2023-09-18',
        details: 'A great evening with friends cooking and enjoying the delicious meal together.',
        sourceLink: 'https://www.youtube.com/watch?v=sIVArBVb_II',
        image: 'https://data1.ibtimes.co.in/photo/en/full/99685/chile-independence-day-wishes.jpg?w=800',
        id: 2
  
    }
  ];
  
  export const getEvents = () => events;
  
  export const get = (id: number) => events.find(m => m.id === id);