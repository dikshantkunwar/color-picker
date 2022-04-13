export default function ColorDisplay(props) {
  return (
    <section style={{display: 'flex', justifyContent: "space-evenly", alignItems: "center"}}>
      <p><strong>{props.hex_value}</strong></p>
      <color style={{color: (props.hsl_value)}}>{props.hsl_value}</color>
      <button>Set BG Color</button>
    </section>
  )
}