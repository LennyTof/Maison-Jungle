import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function Need(sunNeed) {

}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? ( <img src={Sun} alt='sun-icon' /> ) : ( <img src={Water} alt='sun-icon' /> )

	return (
		<div onClick={() => {
      let quantity = ""
      const needed = careType === 'light' ? 'de lumière' : "d'arrosage"
      if (scaleValue === 1) {
       quantity = 'peu'
      } else if (scaleValue === 2) {
        quantity = 'modérement'
      } else {
        quantity = 'beaucoup'
      }
      alert(`cette plante requiert ${quantity} ${needed}`)}}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
