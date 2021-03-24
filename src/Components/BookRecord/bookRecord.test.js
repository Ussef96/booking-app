// import React from "react";

// import { configure, shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// import BookRecord from "./index";

// configure({ adapter: new Adapter() });

// describe("<BookRecord />", () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<BookRecord />);
//   });

//   it("check rendering component", () => {
//     wrapper.find("BookRecord").setProps({
//       book: { id: 1, name: "Harry Potter", quantity: 1 },
//       actions: {
//         handleBookAction: (f) => f,
//       },
//     });

//     expect(wrapper.find(BookRecord)).toHaveLength(1);
//   });
// });
