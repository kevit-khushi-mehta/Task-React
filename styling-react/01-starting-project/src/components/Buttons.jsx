// import {styled} from 'styled-components'

// const Buttons = styled.button`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none;

//   &:hover{
//    background-color: #f0920e;
//   }
// `;

// export default Buttons;


export default function Button({children, ...props}){
  return <button className="px-4 py-5 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500"{...props}>{children}
  </button>

}