import { useOktoberfest } from '../../store/oktoberfest-cart'

export function AddCart({ item }) {
  const { addToCart } = useOktoberfest()

  return (
    <>
      <button
        onClick={() => addToCart(item)}
        className='square_red text-white font-bold p-2 hover:bg-red-700'
      >
        Add to cart
      </button>
    </>
  )
}
