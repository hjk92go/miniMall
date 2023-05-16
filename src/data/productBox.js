import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    brand: "샤넬",
    name: "코코 마드모아젤",
    gender: "female",
    size: ["50ml", "100ml"],
    sizeNprice: [
      {
        size: "50ml",
        price: "179,000",
      },
      {
        size: "100ml",
        price: "255,000",
      },
    ],
    productImg1: "perfume001_1.jpg",
    productImg2: "perfume001_2.jpg",
    price1: "179,000",
    price2: "255,000",
    checkSale: false,
    info: "코코 마드모아젤 자유롭고 대담함을 즐길 줄 아는 여성을 위한 향수 놀랍도록 프레쉬하면서도 동시에 거부할 수 없는 강렬한 엠버리 향기를 선사합니다.",
    Note: "오렌지, 쟈스민, 로즈",
    clickCount: 5,
  },
  {
    id: 2,
    brand: "샤넬",
    name: "N°5",
    gender: "female",
    size: ["50ml", "100ml"],
    sizeNprice: [
      {
        size: "50ml",
        price: "179,000",
      },
      {
        size: "100ml",
        price: "255,000",
      },
    ],
    productImg1: "perfume002_1.jpg",
    productImg2: "perfume002_2.jpg",
    price1: "179,000",
    price2: "255,000",
    checkSale: false,
    info: "N°5, 여성미의 정수. 알데하이드 플로랄 부케 향수는 미니멀한 디자인이 돋보이는 아이코닉 보틀로 선보입니다. 시간을 초월한 유서 깊은 샤넬의 아이콘.",
    Note: "메이 로즈, 쟈스민",
    clickCount: 7,
  },

  {
    id: 3,
    brand: "디올",
    name: "쟈도르 퍼퓸 도 오 드 퍼퓸",
    gender: "female",
    size: ["50ml", "100ml"],
    sizeNprice: [
      {
        size: "50ml",
        price: "182,000",
      },
      {
        size: "100ml",
        price: "262,000",
      },
    ],
    productImg1: "perfume003_1.jpg",
    productImg2: "perfume003_2.jpg",
    price1: "182,000",
    price2: "262,000",
    checkSale: false,
    info: "오랜 시간, 자연스럽게 향수 본연의 강렬하고 풍부한 향기를 경험할 수 있습니다.",
    Note: "쟈스민, 백목련",
    clickCount: 2,
  },
  {
    id: 4,
    brand: "입생로랑",
    name: "리브르 르 퍼퓸",
    gender: "female",
    size: ["50ml", "90ml"],
    sizeNprice: [
      {
        size: "50ml",
        price: "213,000",
      },
      {
        size: "90ml",
        price: "289,000",
      },
    ],
    productImg1: "perfume004_1.jpg",
    productImg2: "perfume004_2.jpg",
    price1: "213,000",
    price2: "289,000",
    checkSale: false,
    info: "대담한 리브르의 향에 진저와 사프란의 악센트가 더해진 강렬한 스파이시 플로럴 향수입니다.",
    Note: "진저, 사프란, 베르가못, 만다린",
    clickCount: 1,
  },
  {
    id: 5,
    brand: "디올",
    name: "디올 옴므 오 드 뚜왈렛",
    gender: "male",
    size: ["50ml", "100ml"],
    sizeNprice: [
      {
        size: "50ml",
        price: "120,000",
      },
      {
        size: "100ml",
        price: "168,000",
      },
    ],
    productImg1: "perfume005_1.jpg",
    productImg2: "perfume005_2.jpg",
    price1: "120,000",
    price2: "168,000",
    checkSale: true,
    info: "디올 옴므는 현대 남성의 다채로운 모습을 담아내었습니다. 남성미가 넘치는 시그니처 향뿐만 아니라 강인함과 부드러움이 교차하는 부드럽고 센슈얼한 느낌도 함께 선사합니다.",
    Note: "아틀라스 시더, 아이티산 베디버, 우디",
    clickCount: 4,
  },
  {
    id: 6,
    brand: "구찌",
    name: "구찌 길티 퍼퓸 뿌르 옴므",
    gender: "male",
    size: ["50ml", "90ml"],
    sizeNprice: [
      {
        size: "50ml",
        price: "161,000",
      },
      {
        size: "90ml",
        price: "225,000",
      },
    ],
    productImg1: "perfume006_1.jpg",
    productImg2: "perfume006_2.jpg",
    price1: "161,000",
    price2: "225,000",
    checkSale: false,
    info: "마음이 서로 잘 맞는 연인을 연결하는 상징으로 디자인된 구찌 길티 퍼퓸 뿌르 옴므는 구찌 길티 뿌르 옴므의 시그니처 향을 더욱 강렬하게 표현한 우디 아로마틱 앰버 향이 특징적입니다.",
    Note: "일랑일랑, 튜베로즈, 우디",
    clickCount: 4,
  },
  {
    id: 7,
    brand: "입생로랑",
    name: "와이 오 드 뚜왈렛",
    gender: "male",
    size: ["60ml", "100ml"],
    sizeNprice: [
      {
        size: "60ml",
        price: "126,000",
      },
      {
        size: "100ml",
        price: "177,000",
      },
    ],
    productImg1: "perfume007_1.jpg",
    productImg2: "perfume007_2.jpg",
    price1: "126,000",
    price2: "177,000",
    checkSale: false,
    info: "푸른 바다의 청량감이 느껴지는 동시에, 파도처럼 강인한 에너지를 담고 있는 미네랄 우디 푸제르 향수입니다.",
    Note: "베르가못, 세이지, 제라늄, 라벤더",
    clickCount: 9,
  },
  {
    id: 8,
    brand: "샤넬",
    name: "블루 드 샤넬 빠르펭",
    gender: "male",
    size: ["50ml", "100ml"],
    sizeNprice: [
      {
        size: "50ml",
        price: "158,000",
      },
      {
        size: "100ml",
        price: "220,000",
      },
    ],
    productImg1: "perfume008_1.jpg",
    productImg2: "perfume008_2.jpg",
    price1: "158,000",
    price2: "220,000",
    checkSale: false,
    info: "매력적인 잔향이 돋보이는 아로마틱 우디 향의 블루 드 샤넬은 남성적인 자유로움을 상징합니다.",
    Note: "샌달우드",
    clickCount: 8,
  },

  {
    id: 9,
    brand: "조말론",
    name: "블랙베리 앤 베이 코롱",
    gender: "all",
    size: ["50ml", "100ml"],
    sizeNprice: [
      {
        size: "50ml",
        price: "155,000",
      },
      {
        size: "100ml",
        price: "218,000",
      },
    ],
    productImg1: "perfume009_1.jpg",
    productImg2: "perfume009_2.jpg",
    price1: "155,000",
    price2: "218,000",
    checkSale: false,
    info: "순수의 향. 블랙베리를 따던 어린 시절의 추억, 블랙베리로 물든 입술과 손. 이제 막 수확한 월계수 잎의 신선함에 톡 쏘는 블랙베리 과즙을 가미하였습니다. 매력적이고 생기 넘치는 상쾌한 느낌의 향입니다.",
    Note: "블랙베리, 월계수 잎, 시더우드",
    clickCount: 3,
  },
  {
    id: 10,
    brand: "조말론",
    name: "라임 바질 앤 만다린 코롱",
    gender: "all",
    size: ["50ml", "100ml"],
    sizeNprice: [
      {
        size: "50ml",
        price: "155,000",
      },
      {
        size: "100ml",
        price: "218,000",
      },
    ],
    productImg1: "perfume010_1.jpg",
    productImg2: "perfume010_2.jpg",
    price1: "155,000",
    price2: "218,000",
    checkSale: false,
    info: "카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다",
    Note: "만다린, 바질, 앰버우드",
    clickCount: 2,
  },
  {
    id: 11,
    brand: "메종 프란시스 커정",
    name: "아쿠아 유니버셜 오 드 뚜왈렛",
    gender: "all",
    size: ["35ml", "70ml"],
    sizeNprice: [
      {
        size: "35ml",
        price: "173,000",
      },
      {
        size: "70ml",
        price: "273,000",
      },
    ],
    productImg1: "perfume011_1.jpg",
    productImg2: "perfume011_2.jpg",
    price1: "173,000",
    price2: "273,000",
    checkSale: false,
    info: "상쾌한 느낌의 관능적이고 부드러운 향",
    Note: "시칠리아 레몬, 화이트 플라워, 머스키 우드",
    clickCount: 6,
  },
  {
    id: 12,
    brand: "로에베",
    name: "001 맨 오 드 뚜왈렛",
    gender: "all",
    size: ["50ml", "100ml"],
    sizeNprice: [
      {
        size: "50ml",
        price: "148,000",
      },
      {
        size: "100ml",
        price: "196,000",
      },
    ],
    productImg1: "perfume012_1.jpg",
    productImg2: "perfume012_2.jpg",
    price1: "148,000",
    price2: "196,000",
    checkSale: false,
    info: "라벤더의 우아함과 머스크의 힘이 특징인 스파이시하고 우디한 향의 향수.",
    Note: "시칠리아 레몬, 라임, 오렌지 블로썸",
    clickCount: 1,
  },
];

export const productSlice = createSlice({
  name: "productBox", //slice 식별 이름(액션함수의 고유성을 유지하기 위한 장치)
  initialState, //초기값
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
