import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`http://demo2911845.mockable.io`, () => {
    return HttpResponse.json(
      [
        {
          name: "Camisa algodón Coolmax®",
          price: "10.00",
          size: ["XS", "S", "M"],
          img: "https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67024450_01.jpg?ts=1703239418849&imwidth=635&imdensity=2",
        },
        {
          name: "Camisa 100% lino cuello mao",
          price: "20.99",
          size: ["XS", "S", "M", "XL"],
          img: "https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67026731_37.jpg?ts=1704981795676&imwidth=499&imdensity=2",
        },
        {
          name: "Camisa 100% lino cuello mao",
          price: "35.00",
          size: ["XS", "S"],
          img: "https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67077907_08.jpg?ts=1708693426238&imwidth=499&imdensity=2",
        },
      ],
      { status: 200 }
    );
  }),
];
