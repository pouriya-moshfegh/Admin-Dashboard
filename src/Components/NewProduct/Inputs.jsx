/* eslint-disable react/prop-types */
export default function Inputs({type="text",title,value,setValue}) {
  return (
    <input 
        placeholder={title}
        value={value} 
        onChange={(e)=>setValue(e.target.value)} 
        className="product-input"
        type={type}
        />
  )
}


