import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span className={`${letterClass} _${i + idx}`} key={char + i}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
