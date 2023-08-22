import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'

function ShoppingList() {
  const categories = plantList.reduce((acc, value) =>
    acc.includes(value.category) ? acc : acc.concat(value.category),[]
    )
  return (<div>
            <ul>
              {categories.map((category) => (
                <li key={ category.id }>{ category}</li>
              ))}
            </ul>
            <ul className='lmj-plant-list'>
              {plantList.map((plant) => (
                plant.isSpecialOffer? <li key={ plant.id } className='lmj-plant-item'>{ plant.name }<div className="lmj-sales">Soldes</div></li> : <li key={ plant.id } className='lmj-plant-item'>{ plant.name }</li>
              ))}
            </ul>
          </div>
  )
}

export default ShoppingList
