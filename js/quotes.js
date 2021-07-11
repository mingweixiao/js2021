const quotes = [
    {
        quotes:'왼손으로 악수합시다. 그쪽이 내 심장과 가까우니까' ,
        author: '지미 핸드릭스'
    },
    {
        quotes:'기교가 좋은 연주인이라면 누구나 최대한 빨리 쳐보고 싶은 욕망들을 가지고 있을 것이다. 그러나 멜로디가 없는 속주는 듣는 이에게 감동을 주기 힘들다.' ,
        author:'크리스 임페리테리'
    },
    {
        quotes:'자신에 대한 믿음이 없이는 록계에서 살아남기 힘들다.' ,
        author:'데이브 머스테인'
    },
    {
        quotes: '나는 한 아티스트가 마음에 들면 오로지 그것만 듣고 다른 건 전혀 듣지 않는다. 그러다가 다른게 좋아지면  또 그것만 듣고. 기타 연습도 그렇게 했다.',
        author:'제이슨 베커'
    },
    {
        quotes:'테크닉에 미치는 것은 바보짓이고 불필요하다. 내가 언제나 주장하고 싶은 것은 그루브감을 지닌 연주인이 되라는 것이다.',
        author:'잉베이 맘스틴'
    },
    {
        quotes:'자기 자신을 잃지 마라. 남이 하는 말에 신경 쓰지 마라. 연주하고 싶은 것을 연주해라.',
        author:'잭 와일드'
    },
    {
        quotes:'블루스를 듣고 거기서 배워라, 그것은 위대한 종착지이고 거기서부터 어느 곳이라도 쉽게 갈 수 있게 된다.' ,
        author:'키 마첼로'
    },
    {
        quotes:'난 주위 환경에 대단히 민감한 편이다. 쉽게 표현한다면 예민하다고나 할까?' ,
        author:'제이크 이리' 
    },
    {
        quotes:'곡을 만들 때 아무래도 보이싱과 멜로디에 많은 신경이 쓰인다, 한 음악이 기억될 수 있고 오랫동안 사랑 받는 것이 멜로디이기 때문이다.' ,
        author:'에릭존슨' 
    },
    {
        quotes:'자신에 대한 믿음이 없이는 록계에서 살아남기 힘들다.' ,
        author:'데이브 머스테인'
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;