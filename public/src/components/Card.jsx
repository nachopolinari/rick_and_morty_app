const Card=(props)=> {
const {onClose,name,status,species,gender,origin,image}=props
   return (

      <div >
         <button onClick={onClose}>X</button>

         <h2> {name}</h2>
         <h3>Status: {status}</h3>
         <h3>Species: {species}</h3>
         <h3>Gender: {gender}</h3>
         <h3>Origin: {origin}</h3>
         <img src={image} alt={name} /> 
      </div>
   );
}
export default Card;