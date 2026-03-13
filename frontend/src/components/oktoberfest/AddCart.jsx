import { useOktoberfest } from '../../store/oktoberfest-cart'

export function AddCart({ item, translate }) {
  const { addToCart } = useOktoberfest()

  return (
    <>
      <button
        onClick={() => addToCart(item)}
        className='square_red text-white font-bold p-2 hover:bg-red-700'
      >
        {translate.addtocart}
      </button>
    </>
  )
}
