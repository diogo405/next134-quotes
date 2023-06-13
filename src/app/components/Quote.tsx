const Quote: React.FC<{text: string}> = ({text}) => {
  return <blockquote style={{textAlign: 'center'}}>{text}</blockquote>
}

export default Quote
