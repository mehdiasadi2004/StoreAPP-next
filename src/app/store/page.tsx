import Container from '@/components/Container';
import ProductItem from '@/components/ProductItem';
import React from 'react'

function store() {
    const data = [
      {
        id: 1,
        title: "corvet",
        desc: "corvet zl1",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/24chcr35018-1673633610.jpg?crop=0.704xw:0.528xh;0.146xw,0.323xh&resize=700:*",
        price: "20",
      },
      {
        id: 2,
        title: "lamborgini",
        desc: "lamborgini svj",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLUydmaIClsMAz0GqT2H2GsJVwCG3ZQP0_Q&s",
        price: "200",
      },
      {
        id: 3,
        title: "BMW",
        desc: "BMW i8",
        image:
          "https://a.storyblok.com/f/143588/1600x1014/9099ac5ca3/46554036-e51c-4057-aa79-a9fb4281517a_bmw-i8.jpg/m/filters:quality(80)",
        price: "50",
      },
      {
        id: 4,
        title: "porsh",
        desc: "porsh 911",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTEe28raBScDQld08j2OUJT8dMMyTZVRNnqCQPLenIyUZTcRwTMTXwjkntylKS9H92IQ&usqp=CAU",
        price: "100",
      },
      {
        id: 5,
        title: "ford",
        desc: "ford gt",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3Wjq4jd0bNsc2vLEoyHIUgoB8x3WEbDGmg&s",
        price: "80",
      },
    ];
  return (
    <Container>
      <h1 className="py-4">store</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item)=>(
            <ProductItem key={item.id} {...item}/>
        ))}
        
      </div>
    </Container>
  );
}

export default store;