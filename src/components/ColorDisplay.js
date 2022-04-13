export default function ColorDisplay(props) {
  return (
    <section style={{display: 'flex', justifyContent: "space-evenly", alignItems: "center"}}>
      <p><strong>{props.hex_value}</strong></p>
      <div style={{color: `${props.hex_value}`}}>&#9632;</div>
      <button onClick={() => props.setBackgroundColor(props.hex_value)}>Set BG Color</button>
    </section>
  )
}