function Display(props) {
  return (
  <div id="display" style={{ textAlign: "right" }}>
        <div id="answer">{props.answer}</div>
        <div id="expression">{props.expression}</div>
      </div>
  )
}

export default Display;