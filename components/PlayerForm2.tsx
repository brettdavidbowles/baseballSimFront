// import * as React from 'react'
// import { Batter, Pitcher, PlayerAttribute } from '../classes'
// const attributes : string[] = [
//   'strength', 'speed', 'endurance', 'composure', 'reflexes', 'intellect', 'willpower'
// ]

// type PlayerFormState = {
//   batters: Batter[],
//   name: string,
//   number: number,
//   attributes: object,
// }
// export class PlayerForm extends React.Component{
//   constructor(props: any) {
//     // no any?
//     super(props)
//     this.handleChange = this.handleChange.bind(this)
//   }
//   state: PlayerFormState =  {
//     batters: [],
//     name: '',
//     number: 0,
//     attributes: {}
//   }

//   handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
//     const target = event.target as HTMLInputElement
//     const value = target.value
//     const name = target.name
//     if(name === "name") {
//       this.setState({ name: value})
//     } else {
//       this.setState({ attributes: { ...this.state.attributes, [name]: value }})
//     }
//     console.log('target', target.name)
//     console.log(this.state)
//   }
//   handleSubmit = () => {
//     const attributesArray : PlayerAttribute[] = []
//     for (let i=0; i<Object.keys(this.state.attributes).length; i++){
//       attributesArray.push({
//         name: Object.keys(this.state.attributes)[i],
//         level: Number(Object.values(this.state.attributes)[i])
//       })
//     }
//     const newBatter = new Batter(this.state.name, Math.random(), attributesArray)
//   }
//   render() {
//     return (
//       <div className='w-72'>
//         <h2 className="text-2xl py-2 text-green-500">
//           Create Teams
//         </h2>
//         <form
//           className="flex flex-col"
//           onSubmit={this.handleSubmit}
//         >
//           <label>
//             Make a Player, Dr. Funkenstein:
//           </label>
//           <label className='capitalize flex justify-start' >
//           <span className='w-24'>
//             Name:
//           </span>
//             <input
//               name="name"
//               type="text"
//               className="text-white mx-4 w-1/2"
//               defaultValue=""
//               onChange={this.handleChange} />
//           </label>
//           { 
//             attributes.map(attribute => (
//               <label className='capitalize flex justify-start'
//                 key={attribute}
//               >
//                 <span className='w-24'>
//                   { attribute }
//                 </span>
//                 <input
//                   name={attribute}
//                   className='mx-4 w-1/2'
//                   max="100"
//                   type="number"
//                   defaultValue=""
//                   onChange={this.handleChange}
//                 />
//               </label>
//               ))
//           }
//           <input
//             className='text-blue-200 hover:text-green-500 hover:cursor-pointer'
//             type="submit"
//             value="Create Player"
//           />
//         </form>
//       </div>
//     )
//   }
// } 
